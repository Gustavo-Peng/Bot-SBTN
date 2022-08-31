const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menugrupos.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_*

╔═══════════
║ *<MENU GRUPOS>*
║╭——————————
║├ _${usedPrefix}admins_
║├ _${usedPrefix}add *<numero>*_
║├ _${usedPrefix}kick *<@tag>*_
║├ _${usedPrefix}grupo *<abrir / cerrar>*_
║├ _${usedPrefix}promote *<@tag>*_
║├ _${usedPrefix}demote *<@tag>*_
║├ _${usedPrefix}grupo abrir/cerrar_
║├ _${usedPrefix}banchat/unbanchat_
║├ _${usedPrefix}demote *<@tag>*_
║├ _${usedPrefix}infogroup_
║├ _${usedPrefix}link_
║├ _${usedPrefix}setname *<texto>*_
║├ _${usedPrefix}setdesc *<texto>*_
║├ _${usedPrefix}hidetag *<texto>*_
║├ _${usedPrefix}del *responder al mensaje del bot para borrarlo*_
║├ _${usedPrefix}setpp *establecer foto como perfil del grupo*_
║├ _${usedPrefix}simular *<welcome / bye / promote / demote>*_
║├ _${usedPrefix}fantasmas_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menugp']
handler.tags = ['main']
handler.command = /^(menugrupos|menugrupo|memugrupos|menugrupos|menugp|memugp|comandosgrupo)$/i
handler.fail = null
handler.register = true
export default  handler
