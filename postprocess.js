import { writeTXT } from 'https://deno.land/x/flat@0.0.15/mod.ts' 

await writeJSON('timestamp.txt', new Date())
