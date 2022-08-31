let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
 let txt = `
Hola *${name}* 

Ese comando ya no está disponible`
    
     conn.sendHydrated(m.chat, txt, igfg, null, null, null, null, null, [], m)

} 

handler.command = ['serbot', 'jadibot'] 

export default handler
