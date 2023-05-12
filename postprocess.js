import { writeTXT } from 'https://deno.land/x/flat@0.0.15/mod.ts' 

await writeTXT('timestamp.txt', new Date())
