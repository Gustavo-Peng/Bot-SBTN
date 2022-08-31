import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Que linda chica.mp4'
conn.sendFile(m.chat, vn, 'Que linda chica.mp4', 'QUE LINDA CHIIICAA', m, true, {
type: 'videoMessage', 
ptt: true
})
} 
handler.customPrefix = /linda chica|chica linda/i
handler.command = new RegExp
export default handler
