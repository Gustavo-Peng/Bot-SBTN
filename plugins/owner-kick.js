let handler = async (m, { conn, participants }) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw `𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  if (user.includes(owr)) return m.reply('No puedo eliminarlo\'a por que el creó el grupo')
  conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`✅Se eliminó a la rata de *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(okick)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler
