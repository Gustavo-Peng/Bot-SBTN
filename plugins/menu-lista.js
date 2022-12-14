import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menus/Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `πππ¦π§π ππ π ππ‘π¨π¦`,
rows: [
      {title: "ππ₯ππππ’π₯", description: 'ππ’π‘π§πππ§π’ πππ ππ₯ππππ’π₯', rowId: `${usedPrefix}creador`},
      {title: "ππππ πΎπππππππ", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ’π π£πππ§π’ πππ ππ’π§', rowId: `${usedPrefix}memucomp`},
      {title: "π ππ‘π¨ ππ₯π¨π£π’", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ πππ ππ₯π¨π£π’', rowId: `${usedPrefix}menugrupo`},
      {title: "π ππ‘π¨ ππ¨πππ’π¦/π§π’π£π¦", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ ππ¨πππ’π¦/π§π’π£π¦', rowId: `${usedPrefix}menujuegos`},
      {title: "ππππ πΌππΏπππ", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ ππ¨πππ’π¦', rowId: `${usedPrefix}menuaudios`},
      {title: "π ππ‘π¨ π¦π§πππππ₯π¦", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ π¦π§πππππ₯π¦', rowId: `${usedPrefix}menusticker`},
      {title: "πππππ§π’π¦ ππ ππ¨πππ’", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ πππππ§π’π¦ ππ ππ¨πππ’', rowId: `${usedPrefix}menuefectos`},
      {title: "π ππ‘π¨ π₯ππ‘ππ’π ", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ π₯ππ‘ππ’π ', rowId: `${usedPrefix}menurandom`},
      {title: "π ππ‘π¨ π‘π¦ππͺ", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ π‘π¦ππͺπ', rowId: `${usedPrefix}menunsfw`},
      {title: "ππππ πΏπ πΏπππΎπΌπππΌπ", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ πππ¦πππ₯πππ¦', rowId: `${usedPrefix}menudescargas`},
      {title: "π ππ‘π¨ ππ’ππ’π¦", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ ππ’ππ’π¦', rowId: `${usedPrefix}menulogos`},
      {title: "π ππ‘π¨ ππ¨π¦π€π¨ππππ¦", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ ππ¨π¦π€π¨ππππ¦', rowId: `${usedPrefix}menubusquedas`},
{title: "π ππ‘π¨ πππ₯π₯ππ πππ‘π§ππ¦", description: 'ππ¦π§π ππ¦ ππ π ππ‘π¨ ππ πππ₯π₯ππ πππ‘π§ππ¦', rowId: `${usedPrefix}menuherramientas`},
      {title: "ππππ ππ₯ππππ’π₯", description: 'ππ π ππ‘π¨ ππ ππ₯ππππ’π₯ π¦π’ππ’ π£π¨πππ π¦ππ₯ π¨π¦πππ’π¦ π£π’π₯ π π ππ₯ππππ’π₯', rowId: `${usedPrefix}menucreador`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `
ββββββββββββ
β *β π΅π΄π²π·π°: ${week}, ${date}*
β *β ππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}*
β *β ππππ°ππΈπΎπ ππ΄πΆπΈππππ°π³πΎπ : ${rtotalreg}*
ββββββββββββ
ββγ βββββββ γββ?
ββ *EL BOT OTAKU*
βββββββββββββββ
ββ *πola, ${name}*!!
βββββββββββββββ
ββ *Creador del Bot: Gustavo Peng* 
ββ *NΒ° del creador:* wa.me/573017901707 (No bot) 
ββ *Me apoyarias mucho con una donacion a seguir desarrollando el bot*
βββββββββββββββ
β°βββ‘βββββββββββ―
ββββββββββββ
β *<INFORMACIΓN|MENUS/>*
ββ­ββββββββββ
ββ _${usedPrefix}menucompleto_
ββ _${usedPrefix}donar_
ββ _Bot_ (π’π π π ππ πππππππ)
ββ _que es un bot_ (π’π π π ππ πππππππ)
ββ°ββββββββββ
ββββββββββββ

ββββββββββββ
β *<NUMERO DEL CREADOR/>*
ββ­ββββββββββ
ββ _${usedPrefix}creador_
ββ°ββββββββββ
ββ *<UNE UN BOT A TU GRUPO/>*
ββ­ββββββββββ
ββ _${usedPrefix}join *link del grupo*_ 
ββ AΓ±ade al creador al grupo y dale admin
ββ°ββββββββββ
ββββββββββββ`, footer: `${wm}`, pp,
title: null,
buttonText: "... Leer mΓ‘s", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto|menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
