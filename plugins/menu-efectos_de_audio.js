const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menuefectos.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_*

╔═══════════
║ <𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢/>
║╭——————————
║├ _${usedPrefix}bass_
║├ _${usedPrefix}blown_
║├ _${usedPrefix}deep_
║├ _${usedPrefix}earrape_
║├ _${usedPrefix}fast_
║├ _${usedPrefix}fat_
║├ _${usedPrefix}nightcore_
║├ _${usedPrefix}reverse_
║├ _${usedPrefix}robot_
║├ _${usedPrefix}slow_
║├ _${usedPrefix}smooth_
║├_${usedPrefix}tupai_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menuefectos', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuefectos|menuefec|menuefect)$/i
handler.fail = null
handler.register = true
export default  handler
