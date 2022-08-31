let handler = async (m, { conn, participants }) => {
let chat = global.db.data.chats[m.chat]
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
 await conn.sendMessage(m.chat, { react: { text: '🫡', key: m.key } }) 
    if (chat.isBanned) return m.reply('*Este chat ya estaba baneado previamente*\n*Si desea desbanearlo use /unbanchat*')
    chat.isBanned = true
    m.reply('*Este chat ha sido baneado por incumplir alguna norma del Bot o simple decision del propietario actual*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat1$/i
handler.owner = true
export default handler
