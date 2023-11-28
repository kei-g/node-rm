import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { deleteAll } from '../src/lib.js'
import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

describe(
  'delete',
  () => {
    it(
      'delete a directory simply',
      async () => {
        await mkdir('work')
        await deleteAll('work')
        assert(existsSync('work') === false)
      }
    )
    it(
      'delete directories recursively',
      async () => {
        await mkdir('work')
        await mkdir('work/foo')
        await mkdir('work/foo/bar')
        await deleteAll('work')
        assert(existsSync('work') === false)
      }
    )
    it(
      'delete files and directories',
      async () => {
        await mkdir('work')
        await mkdir('work/foo')
        await writeFile('work/foo/1', 'foo')
        await writeFile('work/foo/2', 'bar')
        await mkdir('work/foo/bar')
        await mkdir('work/foo/bar/baz')
        await writeFile('work/foo/bar/1', 'data')
        await writeFile('work/foo/bar/2', '')
        await deleteAll('work')
        assert(existsSync('work') === false)
      }
    )
  }
)
