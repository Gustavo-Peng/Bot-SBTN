let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[βππππβ] π΄πππ΄ π²π·π°π π΅ππ΄ π³π΄ππ±π°π½π΄π°π³πΎ π²πΎπ½ π΄ππΈππΎ*')
}
handler.help = ['ubch']
handler.tags = ['owner']
handler.command = /^ubch$/i
handler.rowner = true
export default handler
