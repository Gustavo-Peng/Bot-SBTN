import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```REINICIANDO...```')
    process.send('reset')
    m.reply('Reinicio completado✅')
  } else throw '_eeeeeiiittsssss..._'

}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(res(tart)?)|reiniciar$/

handler.rowner = true

export default handler
