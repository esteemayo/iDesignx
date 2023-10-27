const formEl = document.querySelector('#form');
const copyright = document.querySelector('.footer__copyright-year');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const category = document.getElementById('category').value;
  const content = document.getElementById('content').value;

  console.log({ name, email, category, content });

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('category').value = '';
  document.getElementById('content').value = '';
});

copyright.innerHTML = new Date().getFullYear();
