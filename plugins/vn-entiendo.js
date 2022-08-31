import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Filho da puta.mp3'
conn.sendFile(m.chat, vn, 'Filho da puta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Entiendo|filho da puta|agora si entiendo/i
handler.command = new RegExp
export default handler
