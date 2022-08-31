import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Todo bien todo correcto y yo que me alegro.mp3'
conn.sendFile(m.chat, vn, 'Todo bien todo correcto y yo que me alegro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /todo bien todo correcto|y yo que me alegro|todo bien|todo correcto/i
handler.command = new RegExp
export default handler
