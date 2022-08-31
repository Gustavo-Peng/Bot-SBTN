let handler = async (m, { conn }) => {
let vn = './media/gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '🏳️‍🌈 *𝗠𝗜𝗥𝗔𝗗 𝗔 𝗘𝗦𝗧𝗘 𝗚𝗔𝗬* 🏳️‍🌈\n\n*𝗤𝗨𝗜𝗘𝗡 𝗦𝗘 𝗟𝗢 𝗤𝗨𝗜𝗘𝗥𝗘 𝗙𝗢𝗟𝗟𝗔𝗥?*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(2gay)$/i
export default handler
