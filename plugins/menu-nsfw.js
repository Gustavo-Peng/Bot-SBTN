const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'   
let pp = './media/menus/Menuhot.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ππ’ππ _${username}_*
ππππ‘π©ππ‘πππ’ ππ π ππ‘π¨ π‘π¦ππͺ

ββββββββββββ
β <πππ’π ππ‘ππ’π¦ +18π/>
ββ­ββββββββββ
ββ _${usedPrefix}pack_
ββ _${usedPrefix}pack2_
ββ _${usedPrefix}pack3_
ββ _${usedPrefix}videox_
ββ _${usedPrefix}tetas_
ββ _${usedPrefix}booty_
ββ _${usedPrefix}ecchi_
ββ _${usedPrefix}furro_
ββ _${usedPrefix}imagenlesbians_
ββ _${usedPrefix}panties_
ββ _${usedPrefix}pene_
ββ _${usedPrefix}porno_
ββ _${usedPrefix}porno2_
ββ _${usedPrefix}randomxxx_
ββ _${usedPrefix}pechos_
ββ _${usedPrefix}yaoi_
ββ _${usedPrefix}yaoi2_
ββ _${usedPrefix}yuri_
ββ _${usedPrefix}yuri2_
ββ _${usedPrefix}trapito_
ββ _${usedPrefix}hentai_
ββ _${usedPrefix}nsfwloli_
ββ _${usedPrefix}nsfworgy_
ββ _${usedPrefix}nsfwfoot_
ββ _${usedPrefix}nsfwass_
ββ _${usedPrefix}nsfwbdsm_
ββ _${usedPrefix}nsfwcum_
ββ _${usedPrefix}nsfwero_
ββ _${usedPrefix}nsfwfemdom_
ββ _${usedPrefix}nsfwglass_
ββ°ββββββββββ
ββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menuhot', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menunsfw|memunsfw|nsfw|menuhorny)$/i
handler.fail = null
handler.nsfw = true
handler.register = true
export default  handler
