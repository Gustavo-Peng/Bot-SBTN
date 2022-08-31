let handler = async (m, { conn, participants }) => {
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
 
  m.reply(`*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de* *@${user.split('@')[0]}* *por ti es de* *${Math.floor(Math.random() * 1000)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(mequiere)$/i

handler.group = true

export default handler
