const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const taskDone = true;
            if (taskDone) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000);
    });
}
createPost({title: 'Post Three', body: 'This is post Three'})
    .then(getPosts)
    .catch(err => console.log(err));
    