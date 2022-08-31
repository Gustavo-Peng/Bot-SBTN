import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Una pregunta.mp3'
conn.sendFile(m.chat, vn, 'Una pregunta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /una pregunta/i
handler.command = new RegExp
export default handler
