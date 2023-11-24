const findAnyName = async() => {
//const urls = ['https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/'];
const urls = ['https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/'];
//'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/'];
  try{
    let res = await Promise.all(urls.map(e => fetch(e)))
    let resJson = await Promise.all(res.map(e => e.json()))
    resJson = resJson.map(e => e.results[0].name.first)
    console.log(resJson)
  }catch(err) {
    console.log(err)
  }
}
findAnyName()