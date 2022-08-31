import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Fermin hijo de puta.mp3'
conn.sendFile(m.chat, vn, 'Fermin hijo de puta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Fermín hijo de puta|Fermín hijo di puta|raluca|raluka|Fermín|fermin/i
handler.command = new RegExp
export default handler
