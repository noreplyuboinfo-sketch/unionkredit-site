const fs = require('fs');

// 1. Replace email in sendEmail.ts
const emailPath = 'app/actions/sendEmail.ts';
let emailData = fs.readFileSync(emailPath, 'utf8');
emailData = emailData.replace(/unionkredit2@gmail\.com/g, 'info@unionkredit.pro');
fs.writeFileSync(emailPath, emailData);

// 2. Remove phone numbers in Footer.tsx
const footerPath = 'components/sections/Footer.tsx';
let footerData = fs.readFileSync(footerPath, 'utf8');
footerData = footerData.replace(/<a href=\"https:\/\/wa\.me\/[^\"]+\"[^>]+>[\s\S]*?<\/a>/g, '');
fs.writeFileSync(footerPath, footerData);

// 3. Remove phone numbers in Header.tsx
const headerPath = 'components/sections/Header.tsx';
let headerData = fs.readFileSync(headerPath, 'utf8');
headerData = headerData.replace(/<a href=\"https:\/\/wa\.me\/[^\"]+\"[^>]+>[\s\S]*?<\/a>/g, '');
fs.writeFileSync(headerPath, headerData);

console.log('Contacts removed and email updated!');
