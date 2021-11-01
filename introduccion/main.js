/**https://jsonplaceholder.typicode.com/ */

/*
const result = fetch('https://jsonplaceholder.typicode.com/todos/1');

//console.log(result);
result.then(
  function(response){ //Uint&Array
    response.json().then(
      function(data){
        console.log(data);
      }
    )
  }
)

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(
    function(response){ return response.json(); }
  ).then(
    function(data){ console.log(data); }
  )
*/


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(
    (response) => {
      console.log(response.status)
      return response.json()
    }
  ).then(
    (data) => console.log(data)
  ).catch(
    err => console.log(err)
  )
