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
*ππ’ππ _${username}_*

ββββββββββββ
β <πππ¦πππ₯πππ¦/>
ββ­ββββββββββ
ββ _${usedPrefix}facebook *<enlace / link / url>*_
ββ _${usedPrefix}instagram *<enlace / link / url>*_
ββ _${usedPrefix}mediafire *<enlace / link / url>*_
ββ _${usedPrefix}instagram *<enlace / link / url>*_
ββ _${usedPrefix}gitclone *<enlace / link / url>*_
ββ _${usedPrefix}tiktok *<enlace / link / url>*_
ββ _${usedPrefix}ytmp3 *<enlace / link / url>*_
ββ _${usedPrefix}ytmp4 *<enlace / link / url>*_
ββ _${usedPrefix}play *<nombre de la canciΓ³n>*_
ββ _${usedPrefix}play1 *<nombre de la canciΓ³n >*_
ββ _${usedPrefix}play2 *<nombte de la canciΓ³n>*_
ββ _${usedPrefix}playlist *<nombre de la canciΓ³n>*_
ββ _${usedPrefix}spotify *<texto>*_
ββ _${usedPrefix}pinteret *<texto>*_
ββ _${usedPrefix}wallpaper *<texto>*_
ββ _${usedPrefix}wallpaper2 *<texto>*_
ββ°ββββββββββ
ββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menudownload', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudescarga|menudescargas|memudescarga|memudescargas)$/i
handler.fail = null
handler.register = true
export default  handler
