import path from 'node:path';
import fs from 'node:fs';
import { execSync } from 'child_process';

const args = process.argv.slice(2);
const entryArg = args.find(arg => arg.startsWith('--entry='));
const entryName = entryArg ? entryArg.split('=')[1] : null;

if (!entryName) {
  console.error('Error: No entry specified. Please use "--entry=<entry-name>".');
  process.exit(1);
}

const entryPath = `src/instance/${entryName}/src/index.ts`;

execSync(`vite build --config vite.config.js`, {
  stdio: 'inherit',
  env: {
    ...process.env,
    ENTRY_PATH: entryPath,
    ENTRY_NAME: entryName
  }
});

const absoluteDtsPath = `src/instance/${entryName}/src/types.ts`;
const absoluteOutDir = `dist/${entryName}`;
const absoluteRootDir = `src/instance/${entryName}/src`;

execSync(`tsc ${absoluteDtsPath} --declaration --allowImportingTsExtensions --emitDeclarationOnly --outDir ${absoluteOutDir} --rootDir ${absoluteRootDir}`, {
  stdio: 'inherit'
});

function copyFileUsingStreams(oldPath, newPath) {
  const readStream = fs.createReadStream(oldPath);
  const writeStream = fs.createWriteStream(newPath);

  readStream.on('error', (error) => {
    console.error('Error reading the file:', error.message);
    process.exit(1);
  });

  writeStream.on('error', (error) => {
    console.error('Error writing the file:', error.message);
    process.exit(1);
  });

  writeStream.on('finish', () => {
    console.log(`File copied successfully to ${newPath}`);
    fs.unlink(oldPath, (error) => {
      if (error) {
        console.error('Error deleting the original file:', error.message);
      } else {
        console.log(`Original file ${oldPath} deleted successfully.`);
      }
    });
  });

  readStream.pipe(writeStream);
}

const oldDtsPath = path.join(absoluteOutDir, 'types.d.ts');
const newDtsPath = path.join(absoluteOutDir, 'index.d.ts');

copyFileUsingStreams(oldDtsPath, newDtsPath);