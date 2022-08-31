import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => { 
m.reply(pickRandom(['Dana es puta😳', 'Tremenda puta es dana😳', 'Esa es una de las mejores putas que conozco😳', 'Dana te la chupa con gana😳', 'Dana esta chupandomela😳', 'Dana me la agarra con gana😳', 'Dana te chupa la banana😳']))
}
handler.customPrefix = /(dana)/i
handler.command = new RegExp
export default handler
 
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
