window.addEventListener('DOMContentLoaded', () => {

    let toggle = document.getElementById('toggleDark')
    let image = document.querySelector('.image')
    
    toggle.addEventListener('click', toggleScheme, true)
    
    function toggleScheme () {
      if (toggle.getAttribute("aria-checked") == "true") {
          toggle.setAttribute("aria-checked", "false");
      } else {
          toggle.setAttribute("aria-checked", "true");
      }
      image.classList.toggle('image-dark')
      image.classList.toggle('image-light')
    }
});