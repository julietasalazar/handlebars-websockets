import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename); 
console.log('__filename', __filename);
console.log('__dirname', __dirname);
console.log('import.meta.url', import.meta.url);