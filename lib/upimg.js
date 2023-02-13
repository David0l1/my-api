const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

module.exports = async buffer => {
  console.log('Uploading File To Telegraph')
  const { ext } = await fromBuffer(buffer)
  let form = new FormData
  form.append('file', buffer, 'tmp.' + ext)
  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  })
  let img = await res.json()
  console.log('Succes Uploading To Telegraph')
  if (img.error) throw img.error
  return 'https://telegra.ph' + img[0].src
}

