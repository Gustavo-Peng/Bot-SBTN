let handler  = async (m, { conn }) => {
    let name = conn.getName(m.sender)
    let teks = `
    ${pickRandom([`Se le hicioeron cambios en los botones y reajustes de comandos con el fin de evitar el spam y lag de grupos y comandos, no olvide estar al día para más informacion`])}
    `.trim()
    conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }
    handler.customPrefix = /Informacion y actualizaciones/i
    handler.command = new RegExp
    
    export default handler
    
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }