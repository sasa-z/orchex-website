// Paired screenshots are laid out side by side with a flex grow taken from each
// image's aspect ratio, which is what makes both render at the same height. Swap a
// screenshot for one of a different shape and the pair silently goes uneven — the
// markup still looks right, and nothing fails.
//
// This checks every `style="flex: N"` against the image it wraps.

import { readFileSync, openSync, readSync, closeSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const TOLERANCE = 0.02

function pngSize(path) {
  const fd = openSync(path, 'r')
  const buf = Buffer.alloc(24)
  readSync(fd, buf, 0, 24, 0)
  closeSync(fd)
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

const app = readFileSync(join(root, 'src/App.vue'), 'utf8')
const pattern = /style="flex: ([\d.]+)">\s*\n\s*<img src="\/images\/([^"]+)"/g

let checked = 0
const problems = []

for (const [, flex, image] of app.matchAll(pattern)) {
  checked++
  const { width, height } = pngSize(join(root, 'public/images', image))
  const actual = width / height
  if (Math.abs(actual - Number(flex)) > TOLERANCE) {
    problems.push({ image, flex, actual: actual.toFixed(2), size: `${width}x${height}` })
  }
}

if (problems.length) {
  console.error(`\n${problems.length} of ${checked} paired images no longer match their flex value:\n`)
  for (const p of problems) {
    console.error(`  ${p.image} is ${p.size} (ratio ${p.actual}) but the markup says flex: ${p.flex}`)
  }
  console.error('\nUpdate the flex value to the ratio, or the pair renders at two different heights.\n')
  process.exit(1)
}

console.log(`${checked} paired images match their flex values.`)
