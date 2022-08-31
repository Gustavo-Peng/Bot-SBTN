let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
 
const sections = [
{
title: `𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢`,
rows: [
      {title: "🚫 𝗖𝗘𝗥𝗥𝗔𝗥 𝗚𝗥𝗨𝗣𝗢 🚫", description: '𝗣𝗨𝗟𝗦𝗔 𝗔𝗤𝗨𝗜 𝗣𝗔𝗥𝗔 𝗔𝗕𝗥𝗜𝗥 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢', rowId: `.grupo cerrar`},
      {title: "✅ 𝗔𝗕𝗥𝗜𝗥 𝗚𝗥𝗨𝗣𝗢 ✅", description: '𝗣𝗨𝗟𝗦𝗔 𝗔𝗤𝗨𝗜 𝗣𝗔𝗥𝗔 𝗖𝗘𝗥𝗥𝗔𝗥 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢', rowId: `.grupo abrir`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗔𝗕𝗥𝗜𝗥/𝗖𝗘𝗥𝗥𝗔𝗥 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢

𝗧𝗔𝗠𝗕𝗜𝗘𝗡 𝗣𝗨𝗘𝗗𝗘𝗦 𝗣𝗢𝗡𝗘𝗥:
.grupo abrir
.grupo cerrar
`, footer: wm,
title: 'Menu para cerrar/abrir el grupoo',
buttonText: "𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢", 
sections }



let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
return conn.sendMessage(m.chat, listMessage)

await conn.groupSettingUpdate(m.chat, isClose)
m.reply('*[ ✔ ] 𝙶𝚁𝚄𝙿𝙾 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*')
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler

