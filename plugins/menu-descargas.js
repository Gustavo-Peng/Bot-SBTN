const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menudownload.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_*

╔═══════════
║ <𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦/>
║╭——————————
║├ _${usedPrefix}facebook *<enlace / link / url>*_
║├ _${usedPrefix}instagram *<enlace / link / url>*_
║├ _${usedPrefix}mediafire *<enlace / link / url>*_
║├ _${usedPrefix}instagram *<enlace / link / url>*_
║├ _${usedPrefix}gitclone *<enlace / link / url>*_
║├ _${usedPrefix}tiktok *<enlace / link / url>*_
║├ _${usedPrefix}ytmp3 *<enlace / link / url>*_
║├ _${usedPrefix}ytmp4 *<enlace / link / url>*_
║├ _${usedPrefix}play *<nombre de la canción>*_
║├ _${usedPrefix}play1 *<nombre de la canción >*_
║├ _${usedPrefix}play2 *<nombte de la canción>*_
║├ _${usedPrefix}playlist *<nombre de la canción>*_
║├ _${usedPrefix}spotify *<texto>*_
║├ _${usedPrefix}pinteret *<texto>*_
║├ _${usedPrefix}wallpaper *<texto>*_
║├ _${usedPrefix}wallpaper2 *<texto>*_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menudownload', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudescarga|menudescargas|memudescarga|memudescargas)$/i
handler.fail = null
handler.register = true
export default  handler
