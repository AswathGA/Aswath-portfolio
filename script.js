// Experience Chart


  // Mobile nav toggle
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('hidden');
    });
    // Optional: Hide menu on link click (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) navMenu.classList.add('hidden');
      });
    });
  });
// Interactive & Visual Appeal: Experience Chart
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('experienceChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Selenium', 'Playwright', 'Java', 'Javascript', 'SAAS', 'Performance'],
      datasets: [{
        label: 'Years of Experience',
        data: [10, 5, 8, 4, 4, 2],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(251, 191, 36, 0.8)'
        ],
        borderRadius: 8,
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#fff',
          bodyColor: '#a5b4fc'
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(55,65,81,0.2)' },
          ticks: { color: '#cbd5e1', font: { weight: 'bold' } }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(55,65,81,0.2)' },
          ticks: { color: '#cbd5e1' }
        }
      }
    }
  });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});


 