import assert from 'node:assert/strict'
import { deleteAll, deleteByPattern } from '../src/lib.js'
import { describe, it } from 'node:test'
import { existsSync } from 'fs'
import { mkdir, writeFile } from 'fs/promises'

describe(
  'pattern',
  () => {
    it(
      'delete work/*',
      async () => {
        await mkdir('work')
        await writeFile('work/foo', '')
        await writeFile('work/bar', '')
        await mkdir('work/baz')
        await writeFile('work/baz/1', '')
        await writeFile('work/baz/2', '')
        await writeFile('work/baz/3', '')
        await deleteByPattern('work/*')
        assert(existsSync('work/foo') === false)
        assert(existsSync('work/bar') === false)
        assert(existsSync('work/baz/1') === false)
        assert(existsSync('work/baz/2') === false)
        assert(existsSync('work/baz/3') === false)
        assert(existsSync('work/baz') === false)
        await deleteAll('work')
      }
    )
    it(
      'delete work/foo*',
      async () => {
        await mkdir('work')
        await writeFile('work/foo1', '')
        await writeFile('work/foo2', '')
        await deleteByPattern('work/foo*')
        assert(existsSync('work/foo1') === false)
        assert(existsSync('work/foo2') === false)
        await deleteAll('work')
      }
    )
  }
)
