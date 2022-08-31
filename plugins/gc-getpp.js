let handler = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Etiqueta a la persona de la que quieres la foto de perfil', m)

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    let str = `Aquí está la ft de perfil de @${who.replace(/@.+/, '')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['group']
handler.command = /^getpp$/i

handler.group = true

export default handler
