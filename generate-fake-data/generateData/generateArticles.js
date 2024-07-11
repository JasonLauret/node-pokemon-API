const fs = require('fs');
// const { faker } = require('@faker-js/faker');
const { faker } = require('@faker-js/faker/locale/fr');


function generateFakeArticles(num) {
  const articles = [];
  const ids = Array.from({ length: 100 }, (_, i) => i); // Générer des IDs de 0 à 99

  for (let i = 0; i < num; i++) {
    const id = ids[i % ids.length];
    const tauxTVA = faker.number.int({ min: 5, max: 20, precision: 0.01 }); // Taux TVA entre 5% et 20%
    const prixHT = faker.commerce.price(); // Prix unitaire HT
    const prixTTC = (prixHT * (1 + tauxTVA / 100)).toFixed(2); // Prix unitaire TTC

    const article = {
      id: id,
      codeArticle: faker.string.uuid(),
      prixUnitaireHT: prixHT,
      prixUnitaireTTC: prixTTC,
      designation: faker.commerce.productName(),
      tauxTVA: tauxTVA,
      categorie: ""
    };

    articles.push(article);
  }
  return articles;
}

const num = 10; // Changez ce nombre pour générer plus ou moins d'administrateurs
const articles = generateFakeArticles(num);

fs.writeFileSync('../data/articles.json', JSON.stringify(articles, null, 2), 'utf-8');
