import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Contexto.mp3'
conn.sendFile(m.chat, vn, 'Contexto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /contexto/i
handler.command = new RegExp
export default handler