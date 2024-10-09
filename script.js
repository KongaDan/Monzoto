let icon = document.querySelector('.bars')
let dropdown = document.querySelector('.dropdown-menu')
icon.addEventListener('click',function(){
    dropdown.classList.toggle('none')
})

// JavaScript pour ajouter une classe sticky à l'en-tête après avoir défilé de 20px
window.addEventListener('scroll', function() {
    let check_dropdown_menu = !dropdown.classList.contains('none')

    if (window.scrollY > 90 && check_dropdown_menu) { // Vérifie si le défilement est supérieur à 20px
        dropdown.classList.add('none')
      }
  });
  