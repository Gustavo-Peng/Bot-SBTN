import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Que te meto con la teta.mp3'
conn.sendFile(m.chat, vn, 'Que te meto con la teta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /te meto con la teta/i
handler.command = new RegExp
export default handler
