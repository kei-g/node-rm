#!/usr/bin/env node
import { deleteAll, deleteByPattern } from './lib.js'

const main = async () => {
  const { argv } = process
  for await (const arg of argv.slice(2))
    await [deleteAll, deleteByPattern][+arg.includes('*')](arg)
}

main().catch(
  (reason: unknown) => console.error(`\x1b[31m${reason}\x1b[m`)
)
