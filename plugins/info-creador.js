let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` *Hola ${name}*\n\n*π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ πΎππ½π΄π π΄π* wa.me/573017901707`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /^(.owner|.creator|.creador|.propietario)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
