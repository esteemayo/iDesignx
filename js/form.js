const formEl = document.querySelector('#form');

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
