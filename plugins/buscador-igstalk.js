import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `πππππππ ππ ππππΌπππ πΏπ πΌππππππ πΏπ πππππΌπππΌπ\nπππππππ\n*${usedPrefix + command} gatadios*\n\nπππππ πππππΌπππΌπ ππππππΌππ\nπππΌππππ\n*${usedPrefix + command} gata_dios*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
ββββββββββββββββββ
β ππππ½ππ
β *${name}*
ββββββββββββββββββ
β ππππΌπππ(πΌ)
β *${username}*
ββββββββββββββββββ
β ππππΌπΎπ
β *https://instagram.com/${username.replace(/^@/, '')}*
ββββββββββββββββββ
β ππππππΏππππ
β *${followersH}* 
ββββββββββββββββββ
β ππππππΏππ
β *${followingH}* 
ββββββββββββββββββ 
β πππ½πππΎπΌπΎπππππ
β *${postsH}* 
ββββββββββββββββββ
β π½πππππΌπΓπΌ 
β *${description}*

`.trim()) 
  
await conn.sendHydrated(m.chat, `Si este comando falla prueba con ${usedPrefix}igstalk2`, wm, null, null, null, null, null, null)  
  
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver|igs)$/i
export default handler