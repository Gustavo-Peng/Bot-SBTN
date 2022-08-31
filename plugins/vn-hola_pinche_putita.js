import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Hola Pinche Putita.mp3'
conn.sendFile(m.chat, vn, 'Hola Pinche Putita.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /hola putita|ola putita|hola pinche putita/i
handler.command = new RegExp
export default handler