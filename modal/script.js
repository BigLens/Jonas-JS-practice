'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShowModal.length; i++)
btnsShowModal[i].addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(u) {
    if (u.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
