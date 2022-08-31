import fs from 'fs'
let handler  = async (m, { conn, usedPrefix, command }) => {
let videomenu = fs.readFileSync(`./media/te la saco.mp4`)
conn.sendMessage(m.chat, { video: videomenu, gifPlayback: true, caption: '*Si tocas 2 veces el gif se reproduce con sonido*'}, { quoted: m })
}
handler.customPrefix = /te la saco|sacatela/i
handler.command = new RegExp
export default handler
