import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/sos un puto.m4a'
conn.sendFile(m.chat, vn, 'sos un puto.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /sos puto|sos un puto|soy puto|eres puto/i
handler.command = new RegExp

handler.fail = null
export default handler



