import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Mikey de mierda.mp4'
conn.sendFile(m.chat, vn, 'Mikey de mierda.mp4', 'Ya esta muerto', m, true, {
type: 'videoMessage', 
ptt: true
})
} 
handler.customPrefix = /mikey muerto|mikey esta muerto|/i
handler.command = new RegExp
export default handler
