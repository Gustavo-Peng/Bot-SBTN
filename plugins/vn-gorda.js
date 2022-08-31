import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => { 
m.reply('Gorda la polla de mi creador')
}
handler.customPrefix = /gorda|gordo|grda|grdo/i
handler.command = new RegExp
export default handler
 
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
