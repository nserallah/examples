const myEmail = document.getElementById('myEmail');
const myPassword = document.getElementById('myPassword');
const mySubmit = document.getElementById('mySubmit');
const myButton = document.getElementById('myButton');


const postData = (event) => {
  event.preventDefault();
  axios.put('https://reqres.in/api/users/2',{
    email: myEmail.value,
    password: myPassword.value
  })
  .then(response => {
    console.log(response);
  }).catch(error => {
      console.log('Error');
  });
}

mySubmit.addEventListener('click', postData);



