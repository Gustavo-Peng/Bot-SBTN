import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/boatarde.m4a'
conn.sendFile(m.chat, vn, 'boatarde.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /buenas tardes|Buenas Tardes|Buenas tardes|Bn tardes/i
handler.command = new RegExp
export default handler
