import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/No chupala.mp3'
conn.sendFile(m.chat, vn, 'No chupala.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
} 
handler.customPrefix = /no chupala|hazme caso|siono|bot calla|calla bot|si o no|bot callate|callate bot|bot eres gay|calles bot|bot gay|botgay|gaybot|eri gay|eres gay|bot maricon|bot de mrd|bot de mierda/i
handler.command = new RegExp
export default handler
