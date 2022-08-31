import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Que linda noche.mp4'
conn.sendFile(m.chat, vn, 'Que linda noche.mp4', 'QUE LINDA NOOOOCHEE', m, true, {
type: 'videoMessage', 
ptt: true
})
}
handler.customPrefix = /linda noche/i
handler.command = new RegExp
export default handler
