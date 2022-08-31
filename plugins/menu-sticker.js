const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menustickers.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦

╔═══════════
║ <𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>
║╭——————————
║├ _${usedPrefix}s_
║├ < *responde al archivo para crear el sticker* >
║├ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║├ _${usedPrefix}attp *<texto>*_
║├ _${usedPrefix}attp2 *<texto>*_
║├ _${usedPrefix}ttp *<texto>*_
║├ _${usedPrefix}removebg *<responder imagen>*_
║├ _${usedPrefix}pat *<@tag>_
║├ _${usedPrefix}kiss *<@tag>*_
║├ _${usedPrefix}wm *<packname> <author>*_
║├ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
║├ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
║├ _${usedPrefix}stickerpack *<link>*_
║├ _${usedPrefix}bonk_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menustickers']
handler.tags = ['main']
handler.command = /^(menusticker|menustickers)$/i
handler.fail = null
handler.register = true
export default  handler
