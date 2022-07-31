import { person  , sayHello} from  './src/lib.js' ;

//console.log(person.name);

//console.log(sayHello('pranay'));


async function getPosts(){
    const response= await fetch
    (' https://jsonplaceholder.typicode.com/posts')

const data =await response.json();
return data;
}
getPosts().then(posts =>console.log(posts))








