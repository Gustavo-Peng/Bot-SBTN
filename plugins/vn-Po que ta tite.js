import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Po que ta tite.mp3.webm'
conn.sendFile(m.chat, vn, 'Po que ta tite.mp3.webm', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /(Po que ta tite|Porque estas triste|porque estas triste|no estes triste|No estres triste|arriba el animo)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
