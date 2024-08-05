const fs = require('fs');
// const { faker } = require('@faker-js/faker');
const { faker } = require('@faker-js/faker/locale/fr');


function generateFakeAdmins(num) {
  const admins = [];
  const ids = Array.from({ length: 100 }, (_, i) => i); // Générer des IDs de 0 à 99
  
  for (let i = 0; i < num; i++) {
    const id = ids[i % ids.length];
    const nom = faker.person.lastName();
    const prenom = faker.person.firstName();

    const admin = {
      id: id,
      nom: nom,
      prenom: prenom,
      email: `${nom.toLowerCase()}.${prenom.toLowerCase()}@gmail.com`,
      telephone: faker.phone.number(),
      adresse1: faker.location .streetAddress(),
      adresse2: faker.location .secondaryAddress(),
      ville: faker.location .city(),
      codePostal: faker.location .zipCode(),
      pays: faker.location .country(),
      motDePasse: "azerty"
    };
    admins.push(admin);
  }
  return admins;
}

const num = 10;
const admins = generateFakeAdmins(num);

fs.writeFileSync('../data/admins.json', JSON.stringify(admins, null, 2), 'utf-8');
