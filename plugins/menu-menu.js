import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
//let vn = './media/menu.mp3'
let pp = './media/menus/Menucompleto.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
╔═══════════
║ *❂ 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
║ *❂ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
║ *❂ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${rtotalreg}*
╚══════════

╔═〘 ❂❂❂❂❂❂❂ 〙═╮
║❂ *EL BOT OTAKU*
║——————————————
║❂ *𝗛ola, ${name}*!!
║——————————————
║❂ *Creador del Bot: Gustavo Peng* 
║❂ *N° del creador:* wa.me/573017901707 (No bot) 
║❂ *Me apoyarias mucho con una donacion a seguir desarrollando el bot*
║——————————————
╰══╡❂❂❂❂❂❂❂╞══╯
╔═══════════
║ *<INFORMACIÓN|MENUS/>*
║╭——————————
║├ _${usedPrefix}estado_
║├ _${usedPrefix}infobot_
║├ _${usedPrefix}donar_
║├ _${usedPrefix}grouplist_
║├ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║╰——————————
╚═══════════
╔═══════════
║ <NUMERO DEL CREADOR/>
║╭——————————
║├ _${usedPrefix}creador_
║├
║├ *<UNE UN BOT A TU GRUPO/>*
║
║├_${usedPrefix}join *link del grupo*_ 
║├ Añade al creador al grupo y dale admin
║├ *<REPORTE DE FALLOS />*
║├
║├ _${usedPrefix}reporte *<texto>*_
║╰——————————
╚═══════════
╔═══════════
║ <𝗧𝗢𝗣𝗦/>
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
║ <𝗝𝗨𝗘𝗚𝗢𝗦/>
║╭——————————
║├ _${usedPrefix}math *modo*_
║├ _${usedPrefix}ttt *nombre del la sala*_
║├ _${usedPrefix}delttt *nombre del la sala*_
║├ _${usedPrefix}random_
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
║├ _${usedPrefix}ship_
║├ _${usedPrefix}bot *texto*_
║├ _${usedPrefix}love *@tag / nombre*_
║├ _${usedPrefix}slot *(apuesta de xp)*_
║├ _${usedPrefix}ppt *piedra / papel / tijera*_
║├ _${usedPrefix}cancion *adivinar cancion*_
║├ _${usedPrefix}ñengo *adivinar cancion de ñengo*_
║├ _${usedPrefix}pista *pista del nombre de la canción*_
║╰——————————
╚═══════════
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
║├ _${usedPrefix}play1 *<texto / enlace / link / url>*_
║├ _${usedPrefix}play2 *<texto / enlace / link / url>*_
║├ _${usedPrefix}play *<texto>*_
║├ _${usedPrefix}spotify *<texto>*_
║├ _${usedPrefix}pinteret *<texto>*_
║├ _${usedPrefix}wallpaper *<texto>*_
║├ _${usedPrefix}wallpaper2 *<texto>*_
║╰——————————
╚═══════════
╔═══════════
║ <𝗚𝗥𝗨𝗣𝗢𝗦>
║╭——————————
║├ _${usedPrefix}admins_
║├ _${usedPrefix}add *<numero>*_
║├ _${usedPrefix}kick *<@tag>*_
║├ _${usedPrefix}grupo *<abrir / cerrar>*_
║├ _${usedPrefix}promote *<@tag>*_
║├ _${usedPrefix}demote *<@tag>*_
║├ _${usedPrefix}grupo abrir/cerrar_
║├ _${usedPrefix}banchat/unbanchat_
║├ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║├ _${usedPrefix}demote *<@tag>*_
║├ _${usedPrefix}infogroup_
║├ _${usedPrefix}link_
║├ _${usedPrefix}setname *<texto>*_
║├ _${usedPrefix}setdesc *<texto>*_
║├ _${usedPrefix}hidetag *<texto>*_
║├ _${usedPrefix}del *responder al mensaje del bot para borrarlo*_
║├ _${usedPrefix}setpp *establecer foto como perfil del grupo*_
║├ _${usedPrefix}simular *<welcome / bye / promote / demote>*_
║╰——————————
╚═══════════
╔═══════════
║ <𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦/>
║╭——————————
║├ _${usedPrefix}toimg *<responde a un sticker>*_
║├ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
║├ _${usedPrefix}toptt *<responde a un video / audio>*_
║├ _${usedPrefix}tovideo *<responde a un audio>*_
║├ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
║├ _${usedPrefix}tts es *<texto>*_
║╰——————————
╚═══════════
╔═══════════
║ <𝗟𝗢𝗚𝗢𝗦/> 
║╭——————————
║├ _${usedPrefix}pixelar_
║├ _${usedPrefix}blur_
║╰——————————
╚═══════════
╔═══════════
║*<RANDOM/>*
║╭——————————
║├ _${usedPrefix}menurandom_
║╰——————————
╚═══════════
╔═══════════
║ *<🔞COMANDOS +18🔞/>*
║╭——————————
║├ 𝗘𝗦𝗧𝗘 𝗠𝗢𝗗𝗢 𝗗𝗘𝗕𝗘𝗡 𝗦𝗘𝗥 
║├ 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗣𝗢𝗥 𝗔𝗗𝗠𝗜𝗡𝗦 𝗨𝗦𝗔𝗡𝗗𝗢: *.on modohorny*
║├ 𝗬 𝗟𝗨𝗘𝗚𝗢 𝗣𝗜𝗗𝗘 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗨𝗦𝗔𝗡𝗗𝗢 .menunsfw
║╰——————————
╚═══════════
╔═══════════
║ <𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢/>*
║ *𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
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
║├ _${usedPrefix}tupai_
║╰——————————
╚═══════════
╔═══════════
║ <𝗖𝗛𝗔𝗧 𝗔𝗡𝗢𝗡𝗜𝗠𝗢/> 
║╭——————————
║├ _${usedPrefix}start_
║├ _${usedPrefix}next_
║├ _${usedPrefix}leave_
║╰——————————
╚═══════════
╔═══════════
║ <𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦/>
║╭——————————
║├ _${usedPrefix}animeinfo *<texto>*_
║├ _${usedPrefix}google *<texto>*_
║├ _${usedPrefix}imagen *<texto>*_
║├ _${usedPrefix}letra *<texto>*_
║├ _${usedPrefix}wikipedia *<texto>*_
║├ _${usedPrefix}ytsearch *<texto>*_
║├ _${usedPrefix}igstalk *<nombre de usuario>*_
║├ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
║├ _${usedPrefix}pptiktok *<nombre de usuario>*_
║╰——————————
╚═══════════
╔═══════════
║ <𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦/>
║╭——————————
║├ _${usedPrefix}afk *<motivo>*_
║├ _${usedPrefix}acortar *<enlace / link / url>*_
║├ _${usedPrefix}calc *<operacion math>*_
║├ _${usedPrefix}del *<respondre a mensaje del Bot>*_
║├ _${usedPrefix}qrcode *<texto>*_
║├ _${usedPrefix}readmore *<texto1| texto2>*_
║├ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
║├ _${usedPrefix}styletext *<texto>*_
║├ _${usedPrefix}subirestado *<texto / responder a un archivo multimedia>*_
║├ _${usedPrefix}traducir *<texto>*_
║╰——————————
╚═══════════
╔═══════════
║ *<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*
║╭——————————
║├ _${usedPrefix}balance_
║├ _${usedPrefix}claim_
║├ _${usedPrefix}top_
║├ _${usedPrefix}levelup_
║├ _${usedPrefix}myns_
║├ _${usedPrefix}perfil_
║├ _${usedPrefix}work_
║├ _${usedPrefix}minar_
║├ _${usedPrefix}buy_
║├ _${usedPrefix}buyall_
║├ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
║├ _${usedPrefix}verificar_
║├ _${usedPrefix}unreg *<numero de serie>*_
║╰——————————
╚═══════════
╔═══════════
║ <𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>
║╭——————————
║├ _${usedPrefix}s
║├ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║├ _${usedPrefix}attp *<texto>*_
║├ _${usedPrefix}ttp *<texto>*_
║├ _${usedPrefix}ttpg *<texto>*_
║├ _${usedPrefix}attpg *<texto>*_
║├ _${usedPrefix}attpg2 *<texto>*_
║├ _${usedPrefix}pat *<@tag>_
║├ _${usedPrefix}kiss *<@tag>*_
║├ _${usedPrefix}wm *<packname> <author>*_
║├ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
║├ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
║╰——————————
╚═══════════
╔═══════════
║ *<ACTIVAR/DESACTIVAR/>*
║╭——————————
║├ _${usedPrefix}on/off *welcome*_
║├ _${usedPrefix}on/off *modohorny*_
║├ _${usedPrefix}on/off *antilink*_
║├ _${usedPrefix}on/off *antilink2*_
║├ _${usedPrefix}on/off *detect*_
║├ _${usedPrefix}on/off *audios*_
║├ _${usedPrefix}on/off *autosticker*_
║├ _${usedPrefix}on/off *antisticker*_
║╰——————————
╚═══════════
╔═══════════
║ *<COMANDOS CREADOR/>*
║╭——————————
║├ _${usedPrefix}cajafuerte_
║├ _${usedPrefix}enable *restrict*_
║├ _${usedPrefix}disable *restrict*_
║├ _${usedPrefix}enable *autoread*_
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
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://instagram.com/gustavo_smpi', 'Insta Del Creador', '+57 301 790 1707', 'Numero Del Creador', [], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true}) 
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|memucompleto|menucomp|memucomp)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
