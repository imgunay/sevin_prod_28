

var rellax = new Rellax('.rellax');

const loading = document.querySelector('.loading')
const one = document.querySelector('.one')

setTimeout(() => {
  loading.style.display = 'none';
  one.style.display = 'flex'
}, 3000);