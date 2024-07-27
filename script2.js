const form = document.getElementById('resume-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;
  
  const preview = document.createElement('div');
  preview.classList.add('preview');
  
  preview.innerHTML = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>${summary}</p>
  `;
  
  document.body.appendChild(preview);
  window.print();
});
