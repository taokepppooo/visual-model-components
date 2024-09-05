import { execSync } from 'child_process';  

const args = process.argv.slice(2);  
const entryArg = args.find(arg => arg.startsWith('--entry='));  
const entryName = entryArg ? entryArg.split('=')[1] : null;  

if (!entryName) {  
  console.error('Error: No entry specified. Please use "--entry=<entry-name>".');  
  process.exit(1);  
}  

const entryPath = `src/instance/${entryName}/src/index.ts`;  

execSync(`vite build --config vite.config.js`, { stdio: 'inherit', env: { ...process.env, ENTRY_PATH: entryPath, ENTRY_NAME: entryName } });