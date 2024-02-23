document.getElementById('settingsButton').addEventListener('click', function() {
    openModal();
});

function openModal() {
    var modal = document.getElementById('settingsModal');
    var modalContent = document.querySelector('.modal-content');

    modal.style.display = 'block';

    setTimeout(function () {
        modalContent.classList.add('show');
    }, 50);
}

function applyStyles() {
    const backgroundColor = document.getElementById('backgroundColor').value;

    document.body.style.backgroundColor = backgroundColor;

    closeModal();
}

/*
function closeModal() {
    var modal = document.getElementById('settingsModal');
    var modalContent = document.querySelector('.modal-content');

    modalContent.classList.remove('show');

    setTimeout(function () {
        modal.style.display = 'none';
    }, 500);
}
*/

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
