const sharp = require('sharp')
const path = require('path')

const source = path.join(__dirname, '../public/images/hero-main.jpg')
const target = path.join(__dirname, '../public/images/social-preview.jpg')

sharp(source)
  .resize({
    width: 1200,
    height: 630,
    fit: 'cover',
    position: 'center',
  })
  .jpeg({
    quality: 86,
    mozjpeg: true,
    progressive: true,
  })
  .toFile(target)
  .then((info) => {
    console.log(`Created ${path.relative(process.cwd(), target)} (${info.width}x${info.height})`)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
