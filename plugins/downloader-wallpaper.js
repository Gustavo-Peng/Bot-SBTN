import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xtream', '/randomimage/wpmobile', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*Otaku pe XD*', m, false, { thumbnali: Buffer.alloc(0) })
    } catch (e) {
        throw `se acabo el limiteno tiene un error`
    }
}
handler.help = ['wallpaperanime', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wallpaper?)$/i
export default handler

