let handler = async (m, { conn, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let chat = db.data.chats[m.chat]
    let user = db.data.users[who]
    let set = db.data.settings[conn.user.jid]
    if (/chat$/i.test(command)) {
        m.reply(`
┌「 Chat 」${m.isGroup ? `
├ ${chat.isBanned ? '✅' : '❌'} Baneado
├ ${chat.welcome ? '✅' : '❌'} Welcome
├ ${chat.detect ? '✅' : '❌'} Detect
├ ${chat.antiLink ? '✅' : '❌'} antilink (Solo enlaces de grupos) ` : ''}
├ ${chat.antiLink2 ? '✅' : '❌'} Antilink2 (Todos los enlaces)
├ ${chat.modohorny ? '✅' : '❌'} ModoHorny(+18)
├ ${chat.antiSticker ? '✅' : '❌'} AntiSticker
├ ${chat.simi ? '✅' : '❌'} Simi
├ ${chat.viewonce ? '✅' : '❌'} Auto View Once 
├ ${autosticker ? '✅' : '❌'} AutoSticker
├ ${audios ? '✅' : '❌'} Audios
├ ${chat.antiSatir ? '✅' : '❌'} Anti insultos al bot
└────
       `.trim())
    }
    if (/user$/i.test(command)) {
        m.reply(`
┌「 User 」${user.registered ? `
├ NIM : ${user.nim}` : ``}
├ Registrado: ${user.registered}
├ Nombre: ${user.name}
├ Edad: ${user.age}
├ EXP: ${user.exp}
├ Nivel: ${level}
├ Diamantes: ${user.limit}
├ Registrado: ${registered ? 'Si (' + new Date(regTime) + ')': 'No'}
├ Premium: ${prems.includes(who.split`@`[0]) ? '✅' : '❌'}
├ Baneado: ${user.banned ? '✅' : '❌'}
└────
            `.trim())
        }
}
handler.help = ['infochat', 'infouser']
handler.tags = ['info']
handler.command = /^(info(chat|user))$/i

export default handler
