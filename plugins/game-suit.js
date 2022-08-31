let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '_Termina tu partida primero_'
  if (!m.mentionedJid[0]) return m.reply(`_A quién quiere desafiar??_\nEtiquete a una persona. Ejemplo\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `La persona que estas desafiando está jugando con otra persona :(`
  let id = 'suit_' + new Date() * 1
  let caption = `*🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮*

*—◉ @${m.sender.split`@`[0]} desafia a @${m.mentionedJid[0].split`@`[0]} a 𝙴𝙽 𝚄𝙽 𝙿𝚅𝙿 𝙳𝙴 𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻 𝙾 𝚃𝙸𝙹𝙴𝚁𝙰*
`.trim()
let footer = `◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "aceptar" 𝙿𝙰𝚁𝙰 𝙰𝙲𝙴𝙿𝚃𝙰𝚁\n◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "rechazar" 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁`
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, caption, footer, null, [[`Aceptar`]] ,null, null, m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*[ ⏳ ] 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙴𝚂𝙿𝙴𝚁𝙰 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙴𝙻 𝙿𝚅𝙿 𝚂𝙴 𝙲𝙰𝙽𝙲𝙴𝙻𝙾 𝙿𝙾𝚁 𝙵𝙰𝙻𝚃𝙰 𝙳𝙴 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰*`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, poin_bot, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit'].map(v => v + ' @tag')
handler.command = /^suit(pvp)?$/i

handler.group = true
handler.game = true

export default handler
