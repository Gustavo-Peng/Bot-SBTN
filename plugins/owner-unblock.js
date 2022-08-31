let handler = async (m, { conn, text }) => {

 let who
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
 else who = false
 if (!text) throw `A quien quieres que bloquee?`
 if (!who) throw 'Menciona al usuario que quieres que bloquee!'
 let user = `${who.split("@s.whatsapp.net")[0]}` + '@c.us'
    await conn.updateBlockStatus(user, 'unblock')
  conn.reply(m.chat, `✅Usuario desbloqueado con exito!`, m)
}
handler.help = ['unblock <@user>']
handler.tags = ['owner']
handler.command = /^unblock$/i
handler.owner = true

export default handler
