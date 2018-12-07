const button = document.querySelector('.button');
const input = document.querySelector('.input-text');

button.addEventListener("click", () => {
    fetch("api.openweathermap.org/data/2.5/weather?q="+input)
    .then( resp => {
        console.log(resp);
      }
    );
});
