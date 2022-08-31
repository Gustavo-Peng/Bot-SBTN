import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => { 
m.reply('Lo se pero mi creador es mas guapo😳🤭')
}
handler.customPrefix = /(bot guapo|guapo bot||bot precioso|botguapo|guapobot|bot presioso)/i
handler.command = new RegExp
export default handler
