import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Ingrese el link de un paquete de stickers*\n-\n*Ejemplo:*\n${usedPrefix + command} https://getstickerpack.com/stickers/minecraft-uwu-boy`
  await conn.reply(m.chat, '*Enviando los stickers . . .*', m)
  let res = await fetch(`https://api.zacros.my.id/downloader/stickerpack?link=${text}`)
  let json = await res.json()
  for (let i = 0; i < (json.result.length < 10 ? json.result.length : 10); i++) {
  let stiker = await sticker(null, json.result[i], global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
  }
}

handler.help = ['stickerpack']
handler.tags = ['downloader']
handler.command = /^(stickerdl|stickerpack|stickerpackdl)$/i

export default handler