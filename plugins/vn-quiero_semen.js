

let handler = async (m, { conn }) => {
let vn = './media/Quiero semen.mp3'
conn.sendFile(m.chat, vn, 'Quiero semen.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /Semen/i
handler.command = new RegExp
export default handler
