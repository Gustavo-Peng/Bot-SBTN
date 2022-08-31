import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return m.reply('Todavía no estas en ninguna partida de tictactoe')
delete conn.game[room.id]
await m.reply('Se eliminó la partida de tictactoe!')
}

handler.help = ['delxo']
handler.tags = ['game']
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i

handler.fail = null

export default handler
