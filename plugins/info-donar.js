let media = './media/menus/Menuhot.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/sinfoto.jpg'
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/GGutierrezContreras`, pp, [['CHISTE', `bot gimeme`]], m)
  
let str = `_*Dame algo chtm llevo días sin comer y tu quejandote del bot >:v*_`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/GGutierrezContreras', 'DONAR', null, null, [
['tengo hambre >:v', 'Te felicito que bien actuas']
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler