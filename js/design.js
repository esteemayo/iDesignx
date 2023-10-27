const formEl = document.querySelector('#design-form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const category = document.getElementById('category').value;
  const comment = document.getElementById('comment').value;

  console.log({ name, email, phone, category, comment });

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('category').value = '';
  document.getElementById('comment').value = '';
});
