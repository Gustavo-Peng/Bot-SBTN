let handler = async (m, { conn, text, usedPrefix, command }) => {
m.reply(text)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /say/i

export default handler
