import { http } from './src/http';
import { ui }  from  './src/ui';



//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

console.log("here!!!!!!!!!!!!");

function getPosts(){
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}









