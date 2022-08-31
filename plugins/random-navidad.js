let handler = async (m, { conn, text, command }) => {
    let yh = global.navidad
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `feliz nabidad <3`.trim(), author, url, [['SIGUIENTE']], m)
  }
  handler.command = /^(navidad)$/i
  handler.tags = ['anime']
  handler.help = ['navidad']
  export default handler
  
  global.navidad = [
    "https://i.pinimg.com/564x/0c/6c/60/0c6c60d1f06e08a7954806c57e6630f1.jpg",
    "https://i.pinimg.com/236x/04/e3/6b/04e36b2b1ba0da4080c5cc4c457a35e5.jpg",
    "https://i.pinimg.com/236x/4d/76/15/4d7615f8360b116e6e1387dd72d0b800.jpg",
    "https://i.pinimg.com/236x/b8/7d/a4/b87da408646eec192c921b3dfe3bec97.jpg",
    "https://i.pinimg.com/236x/a6/8c/8e/a68c8e67c5403fe5d374532ca1c0ff1b.jpg",
    "https://i.pinimg.com/236x/46/89/24/4689242572cc121a08e014a48aa96d77.jpg",
    "https://i.pinimg.com/236x/3e/6a/bb/3e6abb6dc5f4cc771f50dfa219a66d25.jpg",
    "https://i.pinimg.com/236x/b3/32/3f/b3323f563681927bd9013139e385c223.jpg",
    "https://i.pinimg.com/236x/f3/91/03/f3910311f4a750ef678644be8e9fac71.jpg",
    "https://i.pinimg.com/236x/5a/6f/7d/5a6f7de290bf57873aa0f37bbfcecf71.jpg",
    "https://i.pinimg.com/236x/c2/3a/a0/c23aa055939e4f09b88920502597472c.jpg",
    "https://i.pinimg.com/236x/f3/56/2f/f3562f7a566b1b4297b340b5d41881a6.jpg",
    "https://i.pinimg.com/236x/66/86/37/66863734657f96445417dd8527ed6e19.jpg",
    "https://i.pinimg.com/236x/47/92/43/479243084d454b4faef3059bd54704d9.jpg",
    "https://i.pinimg.com/236x/dd/bc/e0/ddbce04b4bd4bc2a0c0173cdbd7a8093.jpg",
    "https://i.pinimg.com/236x/3b/90/20/3b90202bc2e582dadd68649c4b6b5801.jpg",
    "https://i.pinimg.com/236x/96/6a/03/966a0362ae69949cecee18bf5a4bf94f.jpg",
    "https://i.pinimg.com/564x/1c/95/44/1c954484dd5debcbfa2ba0baa54a33b4.jpg",
    "https://i.pinimg.com/236x/af/53/2a/af532a9b90b416fbd9e28a2349e9ceb0.jpg",
    "https://i.pinimg.com/564x/d2/cf/1c/d2cf1ce6f1a75d0fb5fb781055024ee2.jpg",
    "https://i.pinimg.com/564x/25/11/8a/25118a8bd2986dad4edf3832a8d4d969.jpg",
    "https://i.pinimg.com/236x/51/1a/be/511abe7610256b79bf8ec2c554afdd89.jpg",
    "https://i.pinimg.com/236x/f3/55/ea/f355ea59ccfd29292ffbfb52bd10d568.jpg",
    "https://i.pinimg.com/236x/a5/32/4e/a5324e86624cf4c54bf180205ee759b5.jpg",
    "https://i.pinimg.com/236x/79/da/82/79da82fddaf2e4cb98d131d79301f4f4.jpg",
    "https://i.pinimg.com/236x/21/0f/a2/210fa25701ac0545e593e9550479597b.jpg",
    "https://i.pinimg.com/236x/c5/85/9e/c5859e472d0faa3011725a0a3169c4b6.jpg",
    "https://i.pinimg.com/236x/18/5c/36/185c36fa0deaa7d0b43d9d5b81114a5a.jpg",
    "https://i.pinimg.com/236x/5f/5a/86/5f5a868b1e1718093c145b3caf16e027.jpg",
    "https://i.pinimg.com/236x/8a/6d/8b/8a6d8b48cd222d967ffedc56c4716f1e.jpg",
    "https://i.pinimg.com/236x/3c/a6/64/3ca664ddb5c73afd954a686b7d1039f3.jpg",
    "https://i.pinimg.com/236x/1c/19/32/1c1932869fa341f749dc425d9b08d2b3.jpg",
    "https://i.pinimg.com/236x/66/86/37/66863734657f96445417dd8527ed6e19.jpg",
    "https://i.pinimg.com/236x/f1/f7/ba/f1f7ba11aba61ec729d35240d85ae05f.jpg",
    "https://i.pinimg.com/236x/48/b3/58/48b358521a4e32aedaa4f903f793d485.jpg",
    "https://i.pinimg.com/236x/b7/92/96/b7929679dd2c07264e793b658ede3857.jpg",
    "https://i.pinimg.com/236x/de/7b/0f/de7b0f8892afb5288a08da9b9d302235.jpg",
    "https://i.pinimg.com/236x/2d/4f/30/2d4f30d7fe80b3a0207d4de6ce718399.jpg",
    "https://i.pinimg.com/236x/d3/57/36/d3573688894effe6dfb88b7a4d40b088.jpg",
    "https://i.pinimg.com/236x/4f/8f/bd/4f8fbdb67ebb47a0ebf5a7896aca0d95.jpg",
    "https://i.pinimg.com/236x/26/e3/ea/26e3eadbe2c3f7145e7730ffd8bb9b84.jpg",
    "https://i.pinimg.com/236x/4c/3f/74/4c3f74b64c31870fa0bd0f181e8850a3.jpg",
    "https://i.pinimg.com/236x/1d/ac/fa/1dacfa40cf36595e9c02611dae5d0906.jpg",
    "https://i.pinimg.com/236x/81/ff/07/81ff07be2c6cacc8439b1db4c885020c.jpg",
    "https://i.pinimg.com/236x/b9/29/46/b92946420c515c1672769dd481507d99.jpg",
    "https://i.pinimg.com/236x/e8/48/ea/e848eabd29a52466730455de8248d14b.jpg",
    "https://i.pinimg.com/236x/1e/5b/92/1e5b925325061508fc235a2d93148d7f.jpg",
    "https://i.pinimg.com/236x/02/29/1d/02291dc659ce2329e5b3e0a88494a63a.jpg"
  ]