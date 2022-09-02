let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `
Bot ini menggunakan script github

𝙈𝙖𝙪 𝙨𝙘? 𝘾𝙝𝙖𝙩 𝙤𝙬𝙣𝙚𝙧 http://wa.me/6287793236775

pliss follow dan kasih ✨⭐⭐🌟 ya pak!

My Github: https://github.com/SxyoBotz

`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


