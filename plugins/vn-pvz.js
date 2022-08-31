import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/PVZ.mp3'
conn.sendFile(m.chat, vn, 'PVZ.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /PVZ|pvz|Pvz|plantas vs zombies|Plantas vs zombies/i
handler.command = new RegExp
export default handler
