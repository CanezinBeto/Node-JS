const sharp = require('sharp')
const path = process.argv[2]
const width = Number(process.argv[3])

const resize = (path, width) => {
  sharp(path)
    .resize({ width: width })
    .toFile('./compressed/output_resize.jpeg', (error) => {
      if (error) console.log(error)
      else console.log('Imagem redimensionada com sucesso')
    })
}

resize(path, width)
