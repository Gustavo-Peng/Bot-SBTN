const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menubusqueda.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_*

╔═══════════
║ <𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>
║╭——————————
║├ _${usedPrefix}animeinfo *<texto>*_
║├ _${usedPrefix}google *<texto>*_
║├ _${usedPrefix}imagen *<texto>*_
║├ _${usedPrefix}letra *<texto>*_
║├ _${usedPrefix}wikipedia *<texto>*_
║├ _${usedPrefix}ytsearch *<texto>*_
║├ _${usedPrefix}igstalk *<nombre de usuario>*_
║├ _${usedPrefix}igstalk2 *<nombre de usuario>*_
║├ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
║├ _${usedPrefix}sweb *link*_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menubusqueda', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menubusqueda|menubusc|memubusq|menubusquedas)$/i
handler.fail = null
handler.register = true
export default  handler
