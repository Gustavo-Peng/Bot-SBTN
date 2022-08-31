import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Mami yo te digo a ti.mp3'
conn.sendFile(m.chat, vn, 'Mami yo te digo a ti.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Mami ven aqui/i
handler.command = new RegExp
export default handler