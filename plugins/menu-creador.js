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
*ππ’ππ _${username}_*

ββββββββββββ
β *<COMANDOS CREADOR/>*
ββ­ββββββββββ
ββ _${usedPrefix}cajafuerte_
ββ _${usedPrefix}enable *restrict*_
ββ _${usedPrefix}disable *restrict*_
ββ _${usedPrefix}enable *autoread*_
ββ _${usedPrefix}enable *welcome*_
ββ _${usedPrefix}enable *modohorny*_
ββ _${usedPrefix}disable *autoread*_
ββ _${usedPrefix}enable *public*_
ββ _${usedPrefix}disable *public*_
ββ _${usedPrefix}enable *pconly*_
ββ _${usedPrefix}disable *pconly*_
ββ _${usedPrefix}enable *gconly*_
ββ _${usedPrefix}disable *gconly*_
ββ _${usedPrefix}banchat2_
ββ _${usedPrefix}unbanchat2_
ββ _${usedPrefix}banuser *<@tag>*_
ββ _${usedPrefix}unbanuser *<@tag>*_
ββ _${usedPrefix}banuser *<@tag>*_
ββ _${usedPrefix}bc *<texto>*_
ββ _${usedPrefix}bcchats *<texto>*_
ββ _${usedPrefix}bcgc *<texto>*_
ββ _${usedPrefix}cleartpm_
ββ _${usedPrefix}restart_
ββ _${usedPrefix}update_
ββ _${usedPrefix}addprem *<@tag>*_
ββ _${usedPrefix}delprem *<@tag>*_
ββ _${usedPrefix}listprem_
ββ _${usedPrefix}aΓ±adirdiamantes *<@tag> <cantidad>*_
ββ _${usedPrefix}aΓ±adirxp *<@tag> <cantidad>*_
ββ _${usedPrefix}resetuser_
ββ _${usedPrefix}block_
ββ _${usedPrefix}unblock_
ββ _${usedPrefix}spamgp *link*_
ββ°ββββββββββ
ββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menucreador', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = true
export default  handler
