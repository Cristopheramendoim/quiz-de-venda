const https = require('https');
const fs = require('fs');

https.get('https://www.advancedbionutritionals.com/DS24/Nitric-Oxide-Supplements/Superhuman-At-70/HD.htm', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Inject React root and script
    const injected = data.replace('</body>', '<div id="root"></div><script type="module" src="/src/main.tsx"></script></body>');
    fs.writeFileSync('index.html', injected);
    console.log('Site fetched and patched successfully.');
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
