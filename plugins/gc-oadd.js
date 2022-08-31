let handler = async (m, { conn, participants, add }) => {
if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien o responde al mensaje para añadirlo'
if (!add) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚀𝚄𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙾, 𝙴𝚂𝚃𝙾 𝙿𝚄𝙴𝙳𝙴 𝙾𝙲𝚄𝚁𝚁𝙸𝚁 𝙿𝙾𝚁𝚀𝚄𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝚂𝚃𝙴 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚂𝙴 𝙷𝙰𝚈𝙰 𝚂𝙰𝙻𝙸𝙳𝙾 𝚁𝙴𝙲𝙸𝙴𝙽𝚃𝙴𝙼𝙴𝙽𝚃𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙾 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙷𝙰𝚈𝙰 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝚂𝚄 𝙿𝚁𝙸𝚅𝙰𝙲𝙸𝙳𝙰𝙳 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂, 𝚃𝙴 𝙰𝙲𝙾𝙽𝚂𝙴𝙹𝙰𝙼𝙾𝚂 𝙴𝙽𝚅𝙸𝙰𝙻𝙴 𝙻𝙰 𝙸𝙽𝚅𝙸𝚃𝙰𝙲𝙸𝙾𝙽 𝙼𝙰𝙽𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴!!*`
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
   await conn.groupParticipantsUpdate(m.chat, [user], 'add')
  m.reply(`Ya agregue a la rata de *@${user.split('@')[0]}*`, null, { mentions: [user] })
}
handler.help = ['add']
handler.tags = ['adm']
handler.command = /^(metelo|oadd|o\+)$/i
handler.owner = false
handler.group = true
handler.admin = true
export default handler