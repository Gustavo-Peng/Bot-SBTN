import { canLevelUp } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
┌─⊷ *SUBISTE DE NIVEL*
▢ [${before}] → [${user.level}]
└──────────────
*_Cuanto más interactúes con el bot, mayor será tu nivel_*
*Escribe .nivel para verificar*`.trim())

    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho ! ${conn.getName(m.sender)}    Nivel: user.level`
        let str = `
┌─⊷ *LEVEL UP*
▢ [${before}] → [${user.level}]
└──────────────
*_Cuanto más interactúes con el bot, mayor será tu nivel_*
`.trim()
      try {
            const img = levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }}}}