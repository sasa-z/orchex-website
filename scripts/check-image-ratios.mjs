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

// Only images inside a paired row. A lone full-width shot uses the same cell class
// and needs no flex — it has no neighbour to line up with. The row's extent is found
// by counting div openings and closings: a lazy regex stops at the first </div>,
// which is the end of the row's first cell, and silently checks half of each pair.
function pairedRows(html) {
  const rows = []
  const opening = /<div class="feature-wide-img-row[^"]*">/g
  const tag = /<div\b|<\/div>/g

  for (const start of html.matchAll(opening)) {
    let depth = 0
    tag.lastIndex = start.index
    for (let t = tag.exec(html); t; t = tag.exec(html)) {
      depth += t[0] === '</div>' ? -1 : 1
      if (depth === 0) {
        rows.push(html.slice(start.index, t.index))
        break
      }
    }
  }
  return rows
}

const cellPattern =
  /<div class="feature-wide-img"(?: style="flex: (?<flex>[\d.]+)")?>\s*\n\s*<img src="\/images\/(?<image>[^"]+)"/g

let checked = 0
const problems = []

for (const row of pairedRows(app)) {
  for (const { groups } of row.matchAll(cellPattern)) {
    checked++
    const { width, height } = pngSize(join(root, 'public/images', groups.image))
    const actual = width / height
    const size = `${width}x${height}`

    if (!groups.flex) {
      problems.push({
        image: groups.image,
        detail: `is ${size} (ratio ${actual.toFixed(2)}) but declares no flex, so it falls back to 1`,
      })
    } else if (Math.abs(actual - Number(groups.flex)) > TOLERANCE) {
      problems.push({
        image: groups.image,
        detail: `is ${size} (ratio ${actual.toFixed(2)}) but the markup says flex: ${groups.flex}`,
      })
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} of ${checked} paired images are not sized from their shape:\n`)
  for (const p of problems) {
    console.error(`  ${p.image} ${p.detail}`)
  }
  console.error('\nSet flex to the ratio, or the pair renders at two different heights.\n')
  process.exit(1)
}

console.log(`${checked} paired images match their flex values.`)
