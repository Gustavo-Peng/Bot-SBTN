let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*_Ingrese el texto que se enviará como spam!_*', m)

    let pesan = `${text}`
    await m.reply('*_INICIO DE SPAM!_*\n\n*_Nota: El Bot enviará el mensaje 10 veces_*')
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)

}
handler.help = ['spamchat'].map(v => v + ' <teks>')
handler.tags = ['General']
handler.command = /^(spamchat)$/i
handler.owner = false
handler.mods = false
handler.group = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler
