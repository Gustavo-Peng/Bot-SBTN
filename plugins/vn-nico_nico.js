import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Nico nico.mp3'
conn.sendFile(m.chat, vn, 'Nico nico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /nico nico/i
handler.command = new RegExp
export default handler