
const fs = require('fs');

const itPath = 'messages/it.json';
let itData = fs.readFileSync(itPath, 'utf8');

// IT replacements
itData = itData.replace(/Prestiti/g, 'Finanziamenti');
itData = itData.replace(/prestiti/g, 'finanziamenti');
itData = itData.replace(/Prestito/g, 'Finanziamento');
itData = itData.replace(/prestito/g, 'finanziamento');
itData = itData.replace(/credito/g, 'finanziamento');
itData = itData.replace(/Credito/g, 'Finanziamento');
itData = itData.replace(/Mutuo/g, 'Fondi per la casa');
fs.writeFileSync(itPath, itData);

const dePath = 'messages/de.json';
let deData = fs.readFileSync(dePath, 'utf8');

// DE replacements
deData = deData.replace(/Kredite/g, 'Finanzierungen');
deData = deData.replace(/kredite/g, 'finanzierungen');
deData = deData.replace(/Kredit/g, 'Finanzierung');
deData = deData.replace(/kredit/g, 'finanzierung');
deData = deData.replace(/Darlehen/g, 'Finanzierung');
fs.writeFileSync(dePath, deData);

console.log('Translations cleaned!');

