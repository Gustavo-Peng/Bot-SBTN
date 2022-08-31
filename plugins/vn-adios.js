import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/stickers/adios.webp'
conn.sendFile(m.chat, vn, 'adios.webg', null, m, true, { 
})
}
handler.command = /^(despedida)$/

handler.fail = null
handler.exp = 100
export default handler



