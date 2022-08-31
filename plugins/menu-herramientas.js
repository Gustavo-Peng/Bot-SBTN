const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menuherramientas.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_ *
𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦

╔═══════════
║ *<𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>*
║╭——————————
║├ _${usedPrefix}tag *número*_
║├ _${usedPrefix}say *texto*_
║├ _${usedPrefix}tiempo *sitio*_
║├ _${usedPrefix}años *responder a foto*_
║├ _${usedPrefix}qmusicaes *responder audio/video*_
║├ _${usedPrefix}leerimagen *responder imagen*_
║├ _${usedPrefix}repetir *texto*_
║├ _${usedPrefix}repetir2 *texto*_
║├ _${usedPrefix}spamchat *texto*_
║├ _${usedPrefix}spamchat *numero*|*texto*|*n° de veces*_
║├ _${usedPrefix}traducir *texto*/ *responder mensaje*_
║├ _${usedPrefix}reaccionar *emoji* *responder mensaje*_
║├ _${usedPrefix}leermas *texto*|*texto*_
║├ _${usedPrefix}rdvo *responder a viewonce*_
║├ _${usedPrefix}fake *msg del bot* *@user* *msg fake*_
║├ _${usedPrefix}acortar *link*_
║├ _${usedPrefix}calc_
║├ _${usedPrefix}del *borrar mensaje del bot respondiendo*_
║├ _${usedPrefix}qrcode *texto*_
║├ _${usedPrefix}styletext *texto*_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menuherramientas', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menúherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
