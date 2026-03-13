import path from 'path'
import sharp from 'sharp'
import fg from 'fast-glob'
import { optimize as optimizeSvg } from 'svgo'
import { execFile } from 'child_process'
import { promisify } from 'util'
import fs from 'fs/promises'
import gifsicle from 'gifsicle'

const execFileAsync = promisify(execFile)

const ICONS_DIR = path.resolve('./dist/imgs')

async function optimizeImages() {
  const files = await fg(['**/*.{png,jpg,jpeg,webp,avif,gif,svg}'], {
    cwd: ICONS_DIR,
    absolute: true
  })

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()

    try {
      if (ext === '.svg') {
        const content = await fs.readFile(file, 'utf8')

        const result = optimizeSvg(content, {
          multipass: true
        })

        await fs.writeFile(file, result.data)

        console.log(`SVG оптимизирован: ${file}`)
        continue
      }

      if (ext === '.gif') {
        await execFileAsync(gifsicle, [
          '-O3',
          '--colors',
          '256',
          '-o',
          file,
          file
        ])

        console.log(`GIF оптимизирован: ${file}`)
        continue
      }

      let pipeline = sharp(file).rotate()

      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 70, compressionLevel: 9 })
      }

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 70, progressive: true })
      }

      if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 65 })
      }

      if (ext === '.avif') {
        pipeline = pipeline.avif({ quality: 50 })
      }

      await pipeline.toFile(file)

      console.log(`Оптимизировано: ${file}`)
    } catch (err) {
      console.error(`Ошибка: ${file}`, err)
    }
  }
}

optimizeImages()
