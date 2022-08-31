let handler = async (m, { conn, command, text }) => {
if (!text) throw `Escribe el nombre de dos personas para calcular su amor`
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) throw `Escribe el nombre de la segunda persona`
let love = `❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%*👩🏻‍❤️‍👨🏻
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })
}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(ship2)$/i
export default handler