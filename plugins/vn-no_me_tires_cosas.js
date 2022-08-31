import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Que no me tires cosas.mp3'
conn.sendFile(m.chat, vn, 'Que no me tires cosas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /No me tires cosas/i
handler.command = new RegExp
export default handler
