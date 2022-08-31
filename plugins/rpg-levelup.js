import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { exp, limit, level, role } = global.db.data.users[m.sender]
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *NIVEL*
▢ Nombre : *${name}*
▢ Nivel : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
▢ Diamante : *${limit}*
▢ Rango : *${role}*
▢ Fecha y hora : *${new Date().toLocaleString('id-ID')}*
└──────────────
•Te falta *${max - user.exp}* de *XP* para subir de nivel.
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `✨ Bien hecho ! ${conn.getName(m.sender)}    Nivel: user.level`
        let str = `
┌─⊷ *LEVEL UP*
▢ [${before}] → [${user.level}]
└──────────────
*_Cuanto más interactúes con el bot, mayor será tu nivel_*
`.trim()
        try {
            const img = await levelup(teks, level)
            conn.sendFile(m.chat, img, '../src/levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
