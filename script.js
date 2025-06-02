// EmailJS
emailjs.init("vB2URU6XmyWdTth8F"); // substitua pelo seu Public Key

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_ony5qkn', 'template_ah5fqb7
', this)
    .then(() => alert('Mensagem enviada com sucesso!'))
    .catch(err => alert('Erro: ' + JSON.stringify(err)));
});

// Leia mais
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('hidden');
  });
});

// Carrossel simples
let index = 0;
const items = document.querySelectorAll('.carousel-item');

setInterval(() => {
  items.forEach((el, i) => el.style.display = i === index ? 'block' : 'none');
  index = (index + 1) % items.length;
}, 3000);

// Animações suaves ao scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .service, .carousel-item').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});
