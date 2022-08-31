import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Mujeres.mp3'
conn.sendFile(m.chat, vn, 'Mujeres.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /Mujeres|las mujeres|se valoran se respetan/i
handler.command = new RegExp
export default handler
