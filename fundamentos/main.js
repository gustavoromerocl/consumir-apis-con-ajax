/**https://jsonplaceholder.typicode.com/ */
/**https://fetch.spec.whatwg.org/#fetch-api */
/**https://developer.mozilla.org/es/docs/Web/API/URLSearchParams */


/**PARAMETROS QUERY */

/*
let user = 1;

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
  .then(
    (response) => response.text()
  ).then(
    (data) => console.log(data)
  ).catch(
    err => console.log(err)
  )
*/

/**MÉTODOS HTTP GET HEAD POST PUT DELETE CONNECT OPTIONS TRACE PATCH*/

/** GET  */
let url = new URL('https://jsonplaceholder.typicode.com/posts?userId');

let parametros = {
  userId: 1,
  _limit: 3
}

//console.log(Object.keys(parametros));
Object.keys(parametros).forEach(paramKey => {
  url.searchParams.append(
    paramKey,
    parametros[paramKey]
  )
});


//console.log(url);

//fetch(url).then(r => r.json()).then(data => console.log(data));



/* POST */
let postParams = {
  title: 'test title',
  body: 'test body',
  userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify( postParams )
}).then(r => r.json()).then(data => console.log(data));



