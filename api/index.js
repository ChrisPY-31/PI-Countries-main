//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios')
const {Country} = require('./src/db') 

const createDb = async () =>{
  let countries = await axios.get('https://restcountries.com/v3/all/')
  await countries.data.map(country =>{
    let pais =  {
        cca3:country.cca3,
        name:country.name.common.toLowerCase(),
        image:country.flags[1],
        continente:country.continents[0],
        capital:country.capital ?country.capital[0]:'no tiene capital',
        subregion:country.subregion?country.subregion:'no tiene subregion',
        area:country.area,
        region:country.region,
        poblation:country.population,

    }
    Country.findOrCreate({where: pais})
})
}

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    createDb()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    console.log('Data Creada')
  });
});
