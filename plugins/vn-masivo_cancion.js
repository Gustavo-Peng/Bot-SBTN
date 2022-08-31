
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/masivo-cancion.mp3'
conn.sendFile(m.chat, vn, 'masivo-cancion.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /MA MA MASIVO|ma ma masivo|Ma ma masivo|masivo|Masivo|MASIVO/i 
handler.command = new RegExp

handler.fail = null
export default handler