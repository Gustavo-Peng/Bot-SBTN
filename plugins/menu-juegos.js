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
*𝗛𝗢𝗟𝗔 _${username}_*

╔═══════════
║ <𝗠𝗘𝗡𝗨 𝗧𝗢𝗣𝗦/>
║╭——————————
║├ _${usedPrefix}top *texto*_
║├ _${usedPrefix}topgays_
║├ _${usedPrefix}topguap@s_
║├ _${usedPrefix}topput@s_
║├ _${usedPrefix}toppajer@s_
║├ _${usedPrefix}topotakus_
║├ _${usedPrefix}topfe@s_
║╰——————————
╚═══════════

╔═══════════
║ <𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦/>
║╭——————————
║├ _${usedPrefix}math *modo*_
║├ _${usedPrefix}ttt *nombre del la sala*_
║├ _${usedPrefix}delttt *nombre del la sala*_
║├ _${usedPrefix}multijuegos_
║├ _${usedPrefix}random *texto*_
║├ _${usedPrefix}minovio *@tag*_
║├ _${usedPrefix}2gay *@tag*_
║├ _${usedPrefix}gay *@tag / nombre*_
║├ _${usedPrefix}lesbi *@tag / nombre*_
║├ _${usedPrefix}pajer@ *@tag / nombre*_
║├ _${usedPrefix}put@ *@tag / nombre*_
║├ _${usedPrefix}rata *@tag / nombre*_
║├ _${usedPrefix}manc@ *@tag / nombre*_
║├ _${usedPrefix}prostitut@ *@tag / nombre*_
║├ _${usedPrefix}follar *@tag / nombre*_
║├ _${usedPrefix}pfollar *@tag / nombre*_
║├ _${usedPrefix}ship(random)_
║├ _${usedPrefix}ship *@tag* *@tag*_
║├ _${usedPrefix}bot *texto*_
║├ _${usedPrefix}love *@tag / nombre*_
║├ _${usedPrefix}slot *(apuesta de xp)*_
║├ _${usedPrefix}ppt *piedra / papel / tijera*_
║├ _${usedPrefix}ñengo *suit @user*_ (ppt PvP)
║├ _${usedPrefix}cancion *adivinar cancion*_
║├ _${usedPrefix}ñengo *adivinar cancion de ñengo*_
║├ _${usedPrefix}pista *pista del nombre de la canción*_
║├ _${usedPrefix}acertijo_
║├ _${usedPrefix}zodiac *AAAA MM DD*_
║├ _${usedPrefix}cuando *texto*_
║╰——————————
╚═══════════

`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menujuegos', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menujuegos|menutops)$/i
handler.fail = null
handler.register = true
export default  handler
