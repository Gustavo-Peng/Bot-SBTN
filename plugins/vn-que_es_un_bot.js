let handler  = async (m, { conn }) => {
    let pp = './media/menus/Bot.jpg'
    let name = conn.getName(m.sender)
    let teks = `
    ${pickRandom([`*â::Â¿ðð®ðÌ ðð¬ ð®ð§ ðð¨ð­ ðð ðð¡ðð­ð¬ðð©ð©?::â*
        - ðð§ ðð¨ð­ ðð¬ ð®ð§ð ð¢ð§ð­ðð¥ð¢ð ðð§ðð¢ð ðð«ð­ð¢ðð¢ðð¢ðð¥ ðªð®ð ð«ððð¥ð¢ð³ð ð­ðð«ððð¬ ðªð®ð ð¥ð ð¢ð§ðð¢ðªð®ð ðð¨ð§ ðð¨ð¦ðð§ðð¨ð¬, ðð§ ðð¥ ððð¬ð¨ ðð ðð¡ðð­ð¬ðð©ð© ð©ð®ðððð¬ ðð«ððð« ð¬ð­ð¢ðð¤ðð«ð¬, ððð¬ððð«ð ðð« ð¦ð®Ìð¬ð¢ðð, ð¯ð¢ððð¨ð¬, ðð«ððð« ð¥ð¨ð ð¨ð¬ ð©ðð«ð¬ð¨ð§ðð¥ð¢ð³ððð¨ð¬ ð² ð¦ð®ðð¡ð¨ ð¦ðð¬, ðð¬ð­ð¨ ðð ðð¨ð«ð¦ð ðð®ð­ð¨ð¦ðð­ð¢ð³ððð, ð¨ ð¬ðð ðªð®ð ð®ð§ ð¡ð®ð¦ðð§ð¨ ð§ð¨ ð¢ð§ð­ðð«ðð¢ðð«ð ðð§ ðð¥ ð©ð«ð¨ððð¬ð¨ 
        - ððð«ð ð¯ðð« ðð¥ ð¦ðð§ð®Ì ðð ðð¨ð¦ðð§ðð¨ð¬ ð©ð®ðððð¬ ð®ð¬ðð« #menu
        *ã_*GUSTAVO PENG*_ã*`])}
    `.trim()
    conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
    }
    handler.customPrefix = /Â¿QuÃ© es un Bot?|Â¿quÃ© es un Bot?|quÃ© es un Bot|que es un Bot|QuÃ© es un Bot?|Que es un Bot?|q es un bot/i
    handler.command = new RegExp
    
    export default handler
    
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
    