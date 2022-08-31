import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Te meto una ostia.mp3'
conn.sendFile(m.chat, vn, 'Te meto una ostia.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /(Te meto una ostia)|una ostia/i
handler.command = new RegExp
export default handler