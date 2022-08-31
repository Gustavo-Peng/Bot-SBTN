import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/boanoite.m4a'
conn.sendFile(m.chat, vn, 'boanoite.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /buenas noches|Buenas noches|Buenas Noches|Bn noches/i
handler.command = new RegExp
export default handler
