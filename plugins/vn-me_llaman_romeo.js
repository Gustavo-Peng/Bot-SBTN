import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Me llaman romeo.mp3'
conn.sendFile(m.chat, vn, 'Me llaman romeo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /Me llaman romeo|romeo|Hola Najimi|jennifer|dominik|Hola najimi/i
handler.command = new RegExp
export default handler
