import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Feliz navidad kirito.mp4'
conn.sendFile(m.chat, vn, 'Feliz navidad kirito.mp4', 'Etoy bucando mikey aca', m, true, {
type: 'videoMessage', 
ptt: true
})
} 
handler.customPrefix = /Feliz navidad kirito|Felíz navidad kirito|Feliz navidad Kirito|Felíz navidad kirito/i
handler.command = new RegExp
export default handler
