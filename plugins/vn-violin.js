import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Violin.mp3'
conn.sendFile(m.chat, vn, 'Violin.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /🥲|lloro|triste|trite|violin|violín/i
handler.command = new RegExp
export default handler
