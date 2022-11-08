/*Great job completing this solo project. I feel you have achieved a great amount of JS knowledge 
by completing this module. Let me tell you, your project is awesome, just a few constructive changes and you are good to go. To begin with, it's always a better coding practice to include the main logic in the index.js file and include all the data in a seperate javascript file.  */
import { posts } from "./data.js"
/*For our like button to work, we need to add a boolean to our object and flip it when the like button is clicked.*/
/*If isLiked is true, the handleClick() function should flip the boolean(isLiked) and vice versa. */

/*I feel the code can be formatted better. Writing clean code is one of the most important aspects of becoming a great coder.*/
/*I feel the parameter's name should be better if we name it as post because as we know forEach is just a better way of iterating over an array of objects rather than  */

let feed = ''
/* We need to use data attributes that we have learnt in the previous module to identify the element which has been clicked in the document. For listening to clicks on the document, we need to add an event listener which will listen for clicks. */
document.addEventListener('click', function (e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }
})
function handleLikeClick(postId) {
    const targetPostObj = posts.filter(function (post) {
        return post.uuid === postId
    })[0]

    targetPostObj.isLiked = !targetPostObj.isLiked
}
function getposts() {
    posts.forEach(function (post) {
        feed += `
                <div class="head">
                    <div class="information">
                        <div class="avatars">
                            <img class="avatarphoto" src=${post.avatar}>
                            </div>
                            <div class="nameloc">
                                <div class="name">
                                ${post.name}
                                </div> 
                                <div class="location">
                                ${post.location}
                                </div> 
                            </div> 
                            </div> 
                            <img class="post" src=${post.posting}>
                        </div>
                        <div class="footer">
                        <div class="interactions">
                            <div class="icons">
                            <img class="icon putlike" data-like="${post.uuid}" id="hearticon"src="images/icon-heart.png"alt="img"/>
                            <img class="icon" src="images/icon-comment.png"alt="comment" data-comment="${post.uuid}"/>
                            <img class="icon" src="images/icon-dm.png"alt="dm" data-share="${post.uuid}"/>
                            </div> 
                            <div class="likeszone"id="count">${post.likes}likes </div>
                            
                            <div class="post-text"><span class="username">${post.username} </span> ${post.comment} </div>
                    </div>
                
                </div>`

    })
    return feed
}
function render() {
    document.getElementById("profiles").innerHTML = getposts()
}
render()
/* this is a redundant piece of code, i.e this piece of code can be removed as it hasnt been used anywhere else*/



/**I feel it's a better user experience if the heart(like btn) changes it's colour to red as we click the heart button. It can be done by changing the CSS property of the heart when it is active i.e by using active pseudo selectors */




