import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Buscando mikey.mp4'
conn.sendFile(m.chat, vn, 'Buscando mikey.mp4', 'Etoy bucando mikey aca', m, true, {
type: 'videoMessage', 
ptt: true
})
} 
handler.customPrefix = /buscando mikey|buscando a mikey|donde esta mikey/i
handler.command = new RegExp
export default handler
