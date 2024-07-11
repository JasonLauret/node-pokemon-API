const fs = require('fs');
// const { faker } = require('@faker-js/faker');
const { faker } = require('@faker-js/faker/locale/fr');


function generateFakeFournisseurs(num) {
  const fournisseurs = [];
  const ids = Array.from({ length: 100 }, (_, i) => i); // Générer des IDs de 0 à 99

  for (let i = 0; i < num; i++) {
    const id = ids[i % ids.length];
    const nom = faker.person.lastName();
    const prenom = faker.person.firstName();
    const email = `${prenom.toLowerCase()}.${nom.toLowerCase()}@gmail.com`;

    const fournisseur = {
      id: id,
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: faker.phone.number(),
      adresse1: faker.location.streetAddress(),
      adresse2: faker.location.secondaryAddress(),
      ville: faker.location.city(),
      codePostal: faker.location.zipCode(),
      pays: "France",
      urlPhotoFake: faker.image.avatar()
    };

    fournisseurs.push(fournisseur);
  }
  return fournisseurs;
}

const num = 10; // Changez ce nombre pour générer plus ou moins d'administrateurs
const fournisseurs = generateFakeFournisseurs(num);

fs.writeFileSync('../data/fournisseurs.json', JSON.stringify(fournisseurs, null, 2), 'utf-8');
