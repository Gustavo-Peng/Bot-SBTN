import util from 'util'
import path from 'path'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) return conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } }) 

let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '🥵', '😱', '🤑', '🙄', '💩','🍑','🤨','🥴','🔥','👇🏻','😔', '👀','🌚'])}`
let l = Math.floor(Math.random() * x.length);

conn.sendFile(m.chat, pickRandom(audio), null) 
let top = `*${x} Top 10 ${text} ${x}*
    
*1. ${user(a)}*
*2. ${user(b)}*
*3. ${user(c)}*
*4. ${user(d)}*
*5. ${user(e)}*
*6. ${user(f)}*
*7. ${user(g)}*
*8. ${user(h)}*
*9. ${user(i)}*
*10. ${user(j)}*`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
//conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
//type: 'audioMessage',
//ptt: true })    

}
handler.help = handler.command = ['top']
handler.tags = ['fun']
handler.group = true
export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
let audio = [
'http://www.myinstants.com/media/sounds/nioce.mp3',
'http://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3',
'https://www.myinstants.com/media/sounds/untitled_1071.mp3',
'https://www.myinstants.com/media/sounds/inceptionbutton.mp3',
'https://www.myinstants.com/media/sounds/sound-9______.mp3',
'https://www.myinstants.com/media/sounds/nani_Pmxf5n3.mp3',
'https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1.mp3',
'http://www.myinstants.com/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3',
'https://www.myinstants.com/media/sounds/nooo.swf.mp3',
'https://www.myinstants.com/media/sounds/deja-vu.mp3',
'https://www.myinstants.com/media/sounds/run-vine-sound-effect_1.mp3',
'https://www.myinstants.com/media/sounds/meme-de-creditos-finales.mp3',
'http://www.myinstants.com/media/sounds/lol_33.mp3',
'https://www.myinstants.com/media/sounds/cyberpunk-2077.mp3',
'https://www.myinstants.com/media/sounds/mc-hammer-u-cant-touch-this.mp3',
'https://www.myinstants.com/media/sounds/my-movie-6_0RlWMvM.mp3',
'https://www.myinstants.com/media/sounds/fukthatbitch.mp3',
]
