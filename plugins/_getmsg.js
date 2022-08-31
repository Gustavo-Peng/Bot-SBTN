export async function before(m, { isAdmin, isOwner, isBotAdmin }) {
 
let chat = db.data.chats[m.chat]
    if (m.chat.endsWith('broadcast') || chat.isBanned || !chat.getmsg || db.data.users[m.sender].banned || m.isBaileys) return
    let msgs = db.data.msgs
    let emot = pickRandom([ "🥵", "😎", "😘", "😻", "😼", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🤫", "🥴", "🤧", "🤑", "🤫", "🤖", "🥶", "😚", "⚡️", "🌝", "🌚", "🌛", "🌜", "🤝🏻", "👊🏻", "💪🏻", "🖕🏻", "👑", "❤️", "🫶🏻", "✨", "❣️", "❤️‍🔥", "💋", "🛐", "✅", "👻", "🔥"])
    if (!(m.text in msgs)) return
    let _m = this.serializeM(JSON.parse(JSON.stringify(msgs[m.text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
await _m.copyNForward(m.chat, emot, true)

    conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
