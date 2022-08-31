let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` *Hola ${name}*\n\n*𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙾𝚆𝙽𝙴𝚁 𝙴𝚂* wa.me/573017901707`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /^(.owner|.creator|.creador|.propietario)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
