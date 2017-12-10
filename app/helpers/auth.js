export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        uid: 1,
        provider: null,
        password: null,
        name: 'Ari',
        nickname: 'DJ Aris',
        image: 'https://avatars2.githubusercontent.com/u/10625312?s=400&u=d7c26a70eee5cf72439e29225e8bfb465ecd4462&v=4',
        email: 'ari@me.com'
      })
    }, 2000)
  })
}
