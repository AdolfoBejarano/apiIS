const Website = {
  foo () {
    console.log('foo')
  },
  
  bar () {
    console.log('bar')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Website.foo()
  Website.bar()
})