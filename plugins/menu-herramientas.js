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
*ππ’ππ _${username}_ *
π ππ‘π¨ πππ₯π₯ππ πππ‘π§ππ¦

ββββββββββββ
β *<ππ¨π¦π€π¨ππππ¦/>*
ββ­ββββββββββ
ββ _${usedPrefix}tag *nΓΊmero*_
ββ _${usedPrefix}say *texto*_
ββ _${usedPrefix}tiempo *sitio*_
ββ _${usedPrefix}aΓ±os *responder a foto*_
ββ _${usedPrefix}qmusicaes *responder audio/video*_
ββ _${usedPrefix}leerimagen *responder imagen*_
ββ _${usedPrefix}repetir *texto*_
ββ _${usedPrefix}repetir2 *texto*_
ββ _${usedPrefix}spamchat *texto*_
ββ _${usedPrefix}spamchat *numero*|*texto*|*nΒ° de veces*_
ββ _${usedPrefix}traducir *texto*/ *responder mensaje*_
ββ _${usedPrefix}reaccionar *emoji* *responder mensaje*_
ββ _${usedPrefix}leermas *texto*|*texto*_
ββ _${usedPrefix}rdvo *responder a viewonce*_
ββ _${usedPrefix}fake *msg del bot* *@user* *msg fake*_
ββ _${usedPrefix}acortar *link*_
ββ _${usedPrefix}calc_
ββ _${usedPrefix}del *borrar mensaje del bot respondiendo*_
ββ _${usedPrefix}qrcode *texto*_
ββ _${usedPrefix}styletext *texto*_
ββ°ββββββββββ
ββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menuherramientas', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menΓΊherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
