import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Bruh.mp3'
conn.sendFile(m.chat, vn, 'Bruh.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(broo|bruh|bro...)/i
handler.command = new RegExp
export default handler 