import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 "@"\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} unptoadrih15*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let caption = `
👤 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼)
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝙉𝙊𝙈𝘽𝙍𝙀
${json.result.nickname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎
${json.result.followers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❇️ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙎
${json.result.followings}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️ 𝙈𝙀 𝙂𝙐𝙎𝙏𝘼𝗦
${json.result.likes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎁 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘾𝙄𝙊𝙉𝙀𝙎
${json.result.video}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👀 𝘽𝙄𝙊𝙂𝙍𝘼𝙁Í𝘼
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', caption, m, false)
} catch (e) {
throw `𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊`
}
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
