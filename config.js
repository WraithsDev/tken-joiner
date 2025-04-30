module.exports = {
    data: {
        guildId: "", // Botun katılacağı Discord sunucusunun ID'si
    },
    bot: {
        id: "", // Botun Discord Client ID'si (Developer Portal'dan alınır)
        token: "", // Botun Discord tokenı (Botun çalışması için gerekli)
        secret: "", // Botun OAuth2 client secret'ı (Developer Portal'dan alınır)
        status: "dnd", // Botun durumu: "online", "idle", "dnd", "invisible"
        statusName: "WraithsDev", // Botun Discord'da görünecek durumu
    },
    web: {
        url: "http://localhost:3001", // OAuth2 Redirect URL (Developer Portal'da Redirects kısmına eklenir)
        port: 3001, // Redirect URL ile uyumlu bir port (isteğe bağlı, kullanılmayabilir) dokunma 
    }
};