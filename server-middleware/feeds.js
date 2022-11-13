const axios = require('axios')
export default async function (req, res, next) {
  let link = ''
  if(req.headers.host === 'car-vana.ru'){
    link = 'https://webapi.car-vana.ru/feeds/yandex/xml/car-vana/main'
  }
  else if(req.headers.host === 'car-wana.ru'){
    link = 'https://webapi.car-vana.ru/feeds/yandex/xml/car-wana/main'
  }
  if(link !== ''){
    let response = await getXml(link)
    res.setHeader('Content-Type', response.headers['content-type']);
    res.end(response.data);
  }
  next()
}

async function getXml(link) {
  return axios({
    method: 'get',
    url: link
  });
}