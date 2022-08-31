let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(`Example : ${usedPrefix + command} teks`)

if (command == 'ttpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attpg2') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.command = ['ttpg', 'attpg', 'attpg2']
handler.tags = ['sticker']
export default handler