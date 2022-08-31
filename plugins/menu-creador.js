const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menucreador.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_*

╔═══════════
║ *<COMANDOS CREADOR/>*
║╭——————————
║├ _${usedPrefix}cajafuerte_
║├ _${usedPrefix}enable *restrict*_
║├ _${usedPrefix}disable *restrict*_
║├ _${usedPrefix}enable *autoread*_
║├ _${usedPrefix}enable *welcome*_
║├ _${usedPrefix}enable *modohorny*_
║├ _${usedPrefix}disable *autoread*_
║├ _${usedPrefix}enable *public*_
║├ _${usedPrefix}disable *public*_
║├ _${usedPrefix}enable *pconly*_
║├ _${usedPrefix}disable *pconly*_
║├ _${usedPrefix}enable *gconly*_
║├ _${usedPrefix}disable *gconly*_
║├ _${usedPrefix}banchat2_
║├ _${usedPrefix}unbanchat2_
║├ _${usedPrefix}banuser *<@tag>*_
║├ _${usedPrefix}unbanuser *<@tag>*_
║├ _${usedPrefix}banuser *<@tag>*_
║├ _${usedPrefix}bc *<texto>*_
║├ _${usedPrefix}bcchats *<texto>*_
║├ _${usedPrefix}bcgc *<texto>*_
║├ _${usedPrefix}cleartpm_
║├ _${usedPrefix}restart_
║├ _${usedPrefix}update_
║├ _${usedPrefix}addprem *<@tag>*_
║├ _${usedPrefix}delprem *<@tag>*_
║├ _${usedPrefix}listprem_
║├ _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
║├ _${usedPrefix}añadirxp *<@tag> <cantidad>*_
║├ _${usedPrefix}resetuser_
║├ _${usedPrefix}block_
║├ _${usedPrefix}unblock_
║├ _${usedPrefix}spamgp *link*_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menucreador', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = true
export default  handler
