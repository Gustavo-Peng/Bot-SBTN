import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, isStaff, text, usedPrefix }) => {
  await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } })
  if (!text) await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } }), `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*.play Ñengo Perdiste*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } }), `*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*`
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } }), await conn.sendHydrated(m.chat, `
 ╭——————————
 ❂ TITULO: ${title}
 ❂ DESCRIPCIÓN: ${description}
 ❂ PUBLICADO: ${publishedTime}
 ❂ DURACIÓN: ${durationH}
 ❂ VISTAS: ${viewH}
 ❂ URL: ${url}
 ╰——————————
  `.trim(), author, thumbnail, '', '', null, null, [
    ['AUDIO', `${usedPrefix}yta ${url}`],
    ['VIDEO', `${usedPrefix}ytv ${url}`],
    ['MÁS RESULTADOS', `${usedPrefix}playlist ${text}`]
  ], m)
}catch(e){
await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } }), `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
console.log(e)
}}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play?$/i
export default handler
