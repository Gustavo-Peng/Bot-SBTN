import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Te felicito que bien actuas goku.mp3'
conn.sendFile(m.chat, vn, 'Te felicito que bien actuas goku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /(Te felicito|que bien|actuas|Te felisito|que bien|actúas)/i
handler.command = new RegExp
export default handler
