import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Yo por ahi no paso.mp3'
conn.sendFile(m.chat, vn, 'Yo por ahi no paso.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Yo por ahí no paso|yo por ahi no paso/i
handler.command = new RegExp
export default handler
