
const fs = require('fs');

const frPath = 'messages/fr.json';
let frData = fs.readFileSync(frPath, 'utf8');

// FR replacements
frData = frData.replace(/Prestiti/gi, 'Financements'); // Just in case
frData = frData.replace(/Prêts/g, 'Financements');
frData = frData.replace(/prêts/g, 'financements');
frData = frData.replace(/Prêt/g, 'Financement');
frData = frData.replace(/prêt/g, 'financement');
frData = frData.replace(/Crédit/g, 'Financement');
frData = frData.replace(/crédit/g, 'financement');
frData = frData.replace(/Emprunt/g, 'Financement');
frData = frData.replace(/emprunt/g, 'financement');

fs.writeFileSync(frPath, frData);

console.log('FR Translations cleaned!');

