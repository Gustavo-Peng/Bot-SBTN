import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
m.reply(m.chat, 'Aqui tienes el link del grupo\n\nhttps://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: 'pornhub.com', mediaType: 2, description: `prueba`, 
title: 'π»πΈπ½πΊ π³π΄π» πΆπππΏπΎ',
body: 'πππ»πππ¬πππππ­ππ',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menuhot.jpg"),
sourceUrl: null}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^(link)$/i
handler.group = true
handler.botAdmin = true
export default handler
