//! NOTE : Inorder to import and export we should have package.json with a "type":module => so "npm init" 
import sum from './export.js'
import {diff, mul} from './export.js'
// ☠️ 'export.js' and not 'export'
console.log(sum(1,2))
console.log(diff(1,2))
console.log(mul(1,2))