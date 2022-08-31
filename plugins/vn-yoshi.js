import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Yoshi.mp3'
conn.sendFile(m.chat, vn, 'Yoshi.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Yoshi|papu papu papu|papu papu/i
handler.command = new RegExp
export default handler
