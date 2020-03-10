const deleteData = document.getElementById('deleteData');


const postData = () => {

  axios.delete('https://reqres.in/api/users/2')
  .then(response => {
    console.log('delete data')
  }).catch(error => {
      console.log('Error');
  });
}

deleteData.addEventListener('click', postData);
