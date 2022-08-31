import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Mikey es una cucacharra.mp3'
conn.sendFile(m.chat, vn, 'Mikey es una cucacharra.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /cucacharra/i
handler.command = new RegExp
export default handler
