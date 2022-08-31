import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Bocadillo de chorizo Messi.mp3'
conn.sendFile(m.chat, vn, 'Bocadillo de chorizo Messi.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Bocadillo de chorizo|Messi|chorizo|choriso|bocadillo de choriso/i
handler.command = new RegExp
export default handler
