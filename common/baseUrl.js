const axios = require("axios");
const instance = axios.create({
  baseURL: "https://ga-mobile-api.loklok.tv/cms/app",
  headers: {
    lang: "en",
    versioncode: "11",
    clienttype: "ios_jike_default",
  },
});
module.exports = instance;
