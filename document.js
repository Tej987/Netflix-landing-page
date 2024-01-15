document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
   
    cards.forEach(function(card) {
       card.addEventListener('click', function() {
         alert('You clicked on ' + card.querySelector('h2').textContent);
       });
    });
   });