import gulp from 'gulp';  
import path from 'node:path';
import ts from 'gulp-typescript';  
import { fileURLToPath } from 'node:url';  

const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename);  
const entryFilename = process.env.ENTRY_NAME;
const entryPath = path.resolve(__dirname, process.env.ENTRY_PATH);
// Gulp task to generate .d.ts files  
export const generateDts = () => {  
  return gulp.src(entryPath)  
    .pipe()  
    .dts.pipe(gulp.dest(`dist/${entryFilename}.d.ts`));
};  

// Make generateDts the default task  
export default generateDts;