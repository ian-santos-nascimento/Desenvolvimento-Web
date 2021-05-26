
const puppeteer = require('puppeteer');
const readlineSync = require('readLine-sync')


console.log("Iniciando robô");
async function  Robo(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const moedabase = readlineSync.question("Qual o valor da moeda base? ") || `dolar`;
  const moedafinal =readlineSync.question("Qual o valor da moeda que quer saber? ") || `real`;
  const usoUrl = `https://www.google.com/search?q=${moedabase}+para+${moedafinal}&hl=pt-BR&sxsrf=ALeKk02u00jo0Q3yk65Ko0BvFIcMZ1iklw%3A1622059394663&source=hp&ei=gqmuYIroJYK95OUP1rSXsAc&iflsig=AINFCbYAAAAAYK63kubPilZrV0F_en7xe8EInDkfG0dl&oq=${moedabase}+para+${moedafinal}=Cgdnd3Mtd2l6EAEYADIKCAAQsQMQRhCCAjIFCAAQsQMyAggAMgIIADICCAAyBAgAEAoyAggAMgIIADIECAAQCjIECAAQCjoGCCMQJxATOgQIIxAnOgQILhAnOggILhCxAxCDAToICAAQsQMQgwE6BQguELEDOgIILjoICAAQxwEQowI6BwguECcQkwI6BAgAEEM6CggAELEDEIMBEEM6BAguEEM6CwgAELEDEMcBEKMCOgcIABCxAxBDOgoILhCxAxBDEJMCOgcILhCxAxBDOgoILhCxAxCDARBDOgUILhCTAjoLCAAQxwEQrwEQywE6BQgAEMsBOgUILhDLAToECAAQDToHCAAQsQMQDToECC4QDToHCCMQ6gIQJzoJCCMQ6gIQJxATOggIABDHARCvAToKCAAQxwEQowIQQzoHCAAQsQMQCjoFCAAQyQM6CggAELEDELEDEApQowtYmE9gm11oCHAAeACAAcABiAH_HJIBBDAuMjGYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=gws-wiz`
  await page.goto(usoUrl);
  const resultado = await page.evaluate(() =>{
      return valorMoedaFinal = document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
  })
  await browser.close();
  console.log(`${moedabase} vale ${resultado} na moeda ${moedafinal}`);
};
Robo()