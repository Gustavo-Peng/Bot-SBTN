import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Ankara messi.mp3'
conn.sendFile(m.chat, vn, 'Ankara messi.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /enkara Messi|encara messi|Ankara Messi|Ancara messi/i
handler.command = new RegExp
export default handler
