export const games = {
  redDeadRedemption2: {
    title: "Red Dead Redemption 2",
    images: [
      { uri: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/09/19/red-dead-redemption-2-1jed6fis0fzhh.jpeg'},
      // ... outras imagens para RDR2
    ],
    developer: "Rockstar Games",
    synopsis: "Em Red Dead Redemption 2, você embarca...",
    storageKey: "red_dead_rating",
    defaultStyle: "Aventura",
  },
  theLastOfUs: { // Mudei para theLastOfUs para ser consistente com a chave do objeto
    title: "The Last of Us Part II", // Ajuste o título se precisar
    images: [
      { uri: require('../imagemJogos/REDteste.jpg')
      },
      // ... outras imagens para The Last of Us
    ],
    developer: "Naughty Dog",
    synopsis: "The Last of Us é um jogo de ação-aventura...",
    storageKey: "the_last_of_us_rating",
    defaultStyle: "Ação-Aventura",
  },
  hollowKnight: {
    title: "Hollow Knight",
    images: [
      { uri: require('../imagemJogos/REDteste.jpg')},
      // ... outras imagens para Hollow Knight
    ],
    developer: "Team Cherry",
    synopsis: "Hollow Knight é um aclamado jogo...",
    storageKey: "hollow_knight_rating",
    defaultStyle: "Metroidvania",
  },
  eldenRing: {
    title: "Elden Ring",
    images: [
      { uri: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/09/19/red-dead-redemption-2-1jed6fis0fzhh.jpeg'},
      { uri: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/09/19/red-dead-redemption-2-1jed6fis0fzhh.jpeg'},
      { uri: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/09/19/red-dead-redemption-2-1jed6fis0fzhh.jpeg'}
      // ... outras imagens para Elden Ring
    ],
    developer: "FromSoftware",
    synopsis: "Elden Ring é um RPG de ação...",
    storageKey: "elden_ring_rating",
    defaultStyle: "RPG de Ação",
  },
};