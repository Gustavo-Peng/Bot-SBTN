let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Responda al mensaje ViewOnce que desea abrir'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Eso no es un mensaje de ViewOnce'
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', `Aqui Tienes`|| watermark, m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', `Aqui Tienes`|| watermark, m)
    }
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^(readviewonce|rvo|rdvo|readview|readvo)/i

export default handler
