import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Nortenos.mp3'
conn.sendFile(m.chat, vn, 'Nortenos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Norteños|norteños|Primos|Primas|primo|prima|Primo|Prima|primos|primas/i
handler.command = new RegExp
export default handler
