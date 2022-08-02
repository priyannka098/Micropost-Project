class UI {
    constructor() {
    this.posts=document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput =document.querySelector('#body');
    this.idInput =document.querySelector('#id');
    this.bodySubmit=document.querySelector('.body-submit');
    this.forState ='add';
}
showPosts(postsData) {
    console.log(postsData);
    let output ='';

    postsData.forEach((post) => {
        output +=`
           
         <div class="form-control">
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            <a href="#" class=" edit card-link" data-id="${post.id}">
            <i class="pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="remove"></i>
            </a>
            
        </div>
        </div>
        `;
    });
    this.posts.innerHTML = output;
}
 }
 export const ui = new UI();

