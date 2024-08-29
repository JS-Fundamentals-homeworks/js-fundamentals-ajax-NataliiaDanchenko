// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const input = document.querySelector('#userNameInput');
const button = document.querySelector('#getUserButton');
const userCity = document.querySelector('#userCity');

button.addEventListener('click', getCity);

async function getCity() {
  const inputValue = input.value;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  console.log(users)
  users.forEach(user => {
    if (user.name === inputValue) {
      userCity.innerHTML = `<p>${user.address.city}</p>`
    }
  });
}
