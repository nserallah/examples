const myFirstName = document.getElementById('myFirstName');
const myLastName = document.getElementById('myLastName');
const mySubmit = document.getElementById('mySubmit');

const postData = (event) => {
  event.preventDefault();
  axios.patch('https://reqres.in/api/users/2',{
    firstName: myFirstName.value,
    lastName: myLastName.value
  })
  .then(response => {
    console.log(response);
  }).catch(error => {
      console.log('Error');
  });
}

mySubmit.addEventListener('click', postData);



