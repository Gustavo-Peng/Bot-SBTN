const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menuaudios.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*𝗛𝗢𝗟𝗔 _${username}_ *

╔═══════════
║ <𝗔𝗨𝗗𝗜𝗢𝗦>
║╭——————————
║├ *𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂*
║├ 
║├ _Quien es tu sempai botsito 7w7_
║├ _A nadie le importa_
║├ _Vivan los novios_
║├ _Feliz cumpleaños_
║├ _Buenos dias_
║├ _Audio hentai_
║├ _Feliz navidad_
║├ _Vete a la vrg_
║├ _Pasa pack Bot_
║├ _Marica quien_
║├ _Murio el grupo_
║├ _Oh me vengo_
║├ _Baneado_
║├ _Sexo_
║├ _Hola_
║├ _Te amo_
║├ _Bañate_
║├ _La biblia_
║├ _Onichan_
║├ _Bot callate_
║├ _Siuuu_
║├ _Nico nico_
║├ _Bruh_
║├ _Contexto_
║├ _Masivo_
║├ _Fino señores_
║├ _Entiendo_
║├ _Raluka_
║├ _Una pregunta_
║├ _Yoshi_
║├ _a_
║├ _calzones_
║├ _chica igante_
║├ _diagnostico_
║├ _feliz cumple_
║├ _fiesta1_
║├ _miedo_
║├ _Norteños_
║├ _otaku_
║├ _pajero_
║├ _pajin_
║├ _toma_
║├ _viernes_
║├ _vivan_
║├ _yamete kudazai_
║├ _bff_
║├ _buenas noches_
║├ _buenas tades_
║├ _admin_
║├ _Linda noche_ (video)
║├ _Linda chica_ (video)
║├ _Te meto una ostia_
║├ _Mami ven aqui_
║├ _hola pinche putita_
║├ _Te meto con la teta_
║├ _Yo por ahi no paso_
║├ _Todo bien todo correto_
║├ _Bocadillo chorizo messi_
║├ _Ankara messi_
║├ _Me llaman romeo_
║├ _Que no me tires cosas_
║├ _Semen_
║├ _Te pincho_
║├ _Violin_
║├ _buscando mikey_ (video)
║├ _Mikey muerto_ (video)
║├ _Cucacharra_
║├ _tumadre_ (video)
║├ _Sos puto_
║╰——————————
╚═══════════
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuaudio|menuaudios|memuaudios|memuaudio|audios)$/i
handler.fail = null
handler.register = true
export default  handler
