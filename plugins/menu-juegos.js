const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menujuegos.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ππ’ππ _${username}_*

ββββββββββββ
β <π ππ‘π¨ π§π’π£π¦/>
ββ­ββββββββββ
ββ _${usedPrefix}top *texto*_
ββ _${usedPrefix}topgays_
ββ _${usedPrefix}topguap@s_
ββ _${usedPrefix}topput@s_
ββ _${usedPrefix}toppajer@s_
ββ _${usedPrefix}topotakus_
ββ _${usedPrefix}topfe@s_
ββ°ββββββββββ
ββββββββββββ

ββββββββββββ
β <π ππ‘π¨ ππ¨πππ’π¦/>
ββ­ββββββββββ
ββ _${usedPrefix}math *modo*_
ββ _${usedPrefix}ttt *nombre del la sala*_
ββ _${usedPrefix}delttt *nombre del la sala*_
ββ _${usedPrefix}multijuegos_
ββ _${usedPrefix}random *texto*_
ββ _${usedPrefix}minovio *@tag*_
ββ _${usedPrefix}2gay *@tag*_
ββ _${usedPrefix}gay *@tag / nombre*_
ββ _${usedPrefix}lesbi *@tag / nombre*_
ββ _${usedPrefix}pajer@ *@tag / nombre*_
ββ _${usedPrefix}put@ *@tag / nombre*_
ββ _${usedPrefix}rata *@tag / nombre*_
ββ _${usedPrefix}manc@ *@tag / nombre*_
ββ _${usedPrefix}prostitut@ *@tag / nombre*_
ββ _${usedPrefix}follar *@tag / nombre*_
ββ _${usedPrefix}pfollar *@tag / nombre*_
ββ _${usedPrefix}ship(random)_
ββ _${usedPrefix}ship *@tag* *@tag*_
ββ _${usedPrefix}bot *texto*_
ββ _${usedPrefix}love *@tag / nombre*_
ββ _${usedPrefix}slot *(apuesta de xp)*_
ββ _${usedPrefix}ppt *piedra / papel / tijera*_
ββ _${usedPrefix}Γ±engo *suit @user*_ (ppt PvP)
ββ _${usedPrefix}cancion *adivinar cancion*_
ββ _${usedPrefix}Γ±engo *adivinar cancion de Γ±engo*_
ββ _${usedPrefix}pista *pista del nombre de la canciΓ³n*_
ββ _${usedPrefix}acertijo_
ββ _${usedPrefix}zodiac *AAAA MM DD*_
ββ _${usedPrefix}cuando *texto*_
ββ°ββββββββββ
ββββββββββββ

`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menujuegos', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menujuegos|menutops)$/i
handler.fail = null
handler.register = true
export default  handler
