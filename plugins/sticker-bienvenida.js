import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/stickers/bienvenido.webp'
conn.sendFile(m.chat, vn, 'bienbenifo.webp', null, m, true, { 
})
}
handler.command = /^(bienvenido)$/i

export default handler
