let handler = async (m, { conn, command, text }) => {
let [lve1, ...lve2] = text.split(' ')
lve2 = (lve2 || []).join(' ')
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de ${lve2 ? `${lve1} por ${lve2}` :  `${text} por ti`} es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })
}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler