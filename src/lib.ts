import { Stats } from 'fs'
import { join as joinPath, sep } from 'path'
import { lstat, readdir, rmdir, unlink } from 'fs/promises'

const descendingByDepth = (lhs: string, rhs: string) => rhs.split(sep).length - lhs.split(sep).length

export const deleteAll = async (target: string) => {
  const stats = (await lstat(target).catch(passTrouhgh)) as Stats
  if (typeof stats?.isDirectory === 'function')
    if (stats.isDirectory()) {
      const directories = [] as string[]
      for await (const entry of await readdir(target, { recursive: true, withFileTypes: true })) {
        const { name, path } = entry
        const fullPath = joinPath(path, name)
        await [unlink.bind(this), directories.push.bind(directories)][+entry.isDirectory()](fullPath)
      }
      directories.push(target)
      await removeAll(directories)
    }
    else
      await unlink(target)
}

export const deleteByPattern = async (pattern: string) => {
  const directories = [] as string[]
  const dir = pattern.split('*').at(0)?.split(sep)?.slice(0, -1)?.join(sep) ?? '.'
  const replaced = pattern.replaceAll(/\\/g, '\x5c\x5c')
    .replaceAll(sep, `\\${sep}`)
    .replaceAll(/\*{2,}/g, '\\S+')
    .replaceAll(/\*/g, `[^\\${sep}]+`)
    .replaceAll(/\./g, '\\.')
  const re = new RegExp(`^${replaced}$`)
  for await (const entry of await readdir(dir, { recursive: true, withFileTypes: true })) {
    const { name, path } = entry
    const fullPath = joinPath(path, name)
    if (re.test(fullPath))
      await [unlink.bind(this), directories.push.bind(directories)][+entry.isDirectory()](fullPath)
  }
  await Promise.allSettled(
    directories.map(deleteAll)
  )
}

const passTrouhgh = <T, U extends T = T>(value: U): T => value

const removeAll = async (directories: string[]): Promise<void> => {
  for await (const path of directories.sort(descendingByDepth))
    await rmdir(path)
}
