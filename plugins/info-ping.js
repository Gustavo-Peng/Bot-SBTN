let handler = async (m, { conn, command, usedPrefix }) => {
  let picture = './media/menus/Menurandom.jpg'
  let name = await conn.getName(m.sender)
  let _uptime = process.uptime() * 1000
  let _muptime
  if (process.send) { process.send('uptime')
  _muptime = await new Promise(resolve => { process.once('message', resolve) 
  setTimeout(resolve, 1000) }) * 1000}
  let uptime = clockString(_uptime)
  let estado =`
  ESTADO
*Hola* ${name}
 
*Tiempo Activo*
${uptime}
*Usuario(s) | Users* 
${Object.keys(global.db.data.users).length} 
`.trim()
  
  conn.sendHydrated(m.chat, estado, wm, picture, 'https://instagram.com/gustavo_smpi', 'INSTAGRAM', null, null, [
  ['Donar', '.donar']
  ], m,)}
  
  handler.help = ['estado']
  handler.tags = ['main']
  handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
  export default handler
  
  function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}