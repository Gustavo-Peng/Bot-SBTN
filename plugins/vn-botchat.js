let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` Hola ${name}\n\nEstoy aquí`, `Si?👀`, `q te pica`, `dime`, `q quieres`, `que paso`, `q pasa conmigo`, `klk mamaguevo`, `q pasa mi amor`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /hay bot|al bot|elbot|el bot|haybot/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
