
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Fino senores.mp3'
conn.sendFile(m.chat, vn, 'Fino senores.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /fino señores/i
handler.command = new RegExp
export default handler
