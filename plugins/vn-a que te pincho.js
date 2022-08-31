import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/A que te pincho.mp3'
conn.sendFile(m.chat, vn, 'A que te pincho.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /te pincho|a que te pincho|te pinchos|tepincho/i
handler.command = new RegExp
export default handler