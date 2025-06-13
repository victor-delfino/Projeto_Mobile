const fs = require('fs');
const fetch = require('node-fetch');

const API_KEY = '6b7a585cf2e54cbbb5608315ec2e5f7b';

const gameNames = [
  'Red Dead Redemption 2',
  'The Last of Us Part II',
  'Hollow Knight',
  'Elden Ring'
];

const fetchGameData = async (name) => {
  const res = await fetch(`https://api.rawg.io/api/games?search=${encodeURIComponent(name)}&key=${API_KEY}`);
  const data = await res.json();
  const game = data.results?.[0];

  if (!game) return null;

  return {
    key: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
    data: {
      title: game.name,
      images: [{ uri: game.background_image }],
      developer: game.developers?.[0]?.name || "Desconhecido",
      synopsis: game.slug.replace(/-/g, ' ').toUpperCase(),
      storageKey: game.name.toLowerCase().replace(/ /g, "_") + "_rating",
      defaultStyle: game.genres?.[0]?.name || "Desconhecido"
    }
  };
};

(async () => {
  let output = 'export const games = {\n';

  for (const name of gameNames) {
    const game = await fetchGameData(name);
    if (game) {
      output += `  ${game.key}: ${JSON.stringify(game.data, null, 4)},\n`;
    }
  }

  output += '};\n';

  fs.writeFileSync('./src/data/games.js', output, 'utf-8'); // ou qualquer pasta desejada
  console.log('Arquivo games.js gerado com sucesso!');
})();
