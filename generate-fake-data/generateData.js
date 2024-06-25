const fs = require('fs');
const { faker } = require('@faker-js/faker');

function generateFakeAdmins(num) {
  const admins = [];
  for (let i = 0; i < num; i++) {
    const nom = faker.person.lastName();
    const prenom = faker.person.firstName();
    const admin = {
      nom: nom,
      prenom: prenom,
      email: `${nom.toLowerCase()}.${prenom.toLowerCase()}@gmail.com`,
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

const numOfAdmins = 10; // Changez ce nombre pour générer plus ou moins d'administrateurs
const admins = generateFakeAdmins(numOfAdmins);

fs.writeFileSync('admins.json', JSON.stringify(admins, null, 2), 'utf-8');
console.log(`Generated ${numOfAdmins} fake admins and saved to admins.json`);
