// Posts data
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Create the post section element
const postSectionEl = document.createElement("section")
postSectionEl.id = "post-section-el"

// Append the post section to the main element
const mainEl = document.querySelector("main")
mainEl.appendChild(postSectionEl)

// Function to create a post element
function createPost(post, index) {
    // Create the elements for the post
    const postContainer = document.createElement("article")
    postContainer.className = "post-container"
    postContainer.dataset.id = index
    const postHeaderContainer = document.createElement("div")
    postHeaderContainer.className = "post-header-container"
    const userAvatar = document.createElement("img")
    userAvatar.className = "user-avatar"
    userAvatar.alt = "User avatar."
    userAvatar.src = post.avatar
    const postHeaderUserInfo = document.createElement("div")
    postHeaderUserInfo.className = "post-header-user-info"
    const postHeaderUserName = document.createElement("h1")
    postHeaderUserName.textContent = post.name
    const postHeaderUserLocation = document.createElement("p")
    postHeaderUserLocation.textContent = post.location
    const postImg = document.createElement("img")
    postImg.className = "post-img"
    postImg.alt = "Image post."
    postImg.src = post.post
    const buttonContainer = document.createElement("div")
    buttonContainer.className = "button-container"
    const likeBtn = document.createElement("button")
    likeBtn.className = "like-btn"
    const likeBtnImg = document.createElement("img")
    likeBtnImg.src = "images/icon-heart.png"
    likeBtnImg.alt = "Like button."
    likeBtnImg.className = "btn-img"
    const commentBtn = document.createElement("button")
    const commentBtnImg = document.createElement("img")
    commentBtnImg.src = "images/icon-comment.png"
    commentBtnImg.alt = "Comment button."
    commentBtnImg.className = "btn-img"
    const dmBtn = document.createElement("button")
    const dmBtnImg = document.createElement("img")
    dmBtnImg.src = "images/icon-dm.png"
    dmBtnImg.alt = "DM button."
    dmBtnImg.className = "btn-img"
    const postLikes = document.createElement("h2")
    postLikes.id = `likes-count-${index}`
    postLikes.textContent = `${post.likes} likes`
    const commentP = document.createElement("p")
    commentP.className = "comment-p"
    commentP.textContent = ` ${post.comment}`
    const commentSpan = document.createElement("span")
    commentSpan.textContent = post.username

    // Append elements to create the post structure
    postContainer.appendChild(postHeaderContainer)
    postHeaderContainer.appendChild(userAvatar)
    postHeaderContainer.appendChild(postHeaderUserInfo)
    postHeaderUserInfo.appendChild(postHeaderUserName)
    postHeaderUserInfo.appendChild(postHeaderUserLocation)
    postContainer.appendChild(postImg)
    postContainer.appendChild(buttonContainer)
    buttonContainer.appendChild(likeBtn)
    likeBtn.appendChild(likeBtnImg)
    buttonContainer.appendChild(commentBtn)
    commentBtn.appendChild(commentBtnImg)
    buttonContainer.appendChild(dmBtn)
    dmBtn.appendChild(dmBtnImg)
    postContainer.appendChild(postLikes)
    postContainer.appendChild(commentP)
    commentP.prepend(commentSpan)

    // Add like button functionality
    likeBtn.addEventListener("click", function() {
        const postIndex = parseInt(postContainer.dataset.id)
        updateLikes(postIndex)
    })

    return postContainer
}

// Function to render all posts
function renderPosts() {
    postSectionEl.innerHTML = ""

    for (let i = 0; i < posts.length; i++) {
        const postElement = createPost(posts[i], i)
        postSectionEl.appendChild(postElement)
    }
}

// Function to update likes
function updateLikes(index) {
    posts[index].likes++
    const postLikes = document.getElementById(`likes-count-${index}`)
    postLikes.textContent = `${posts[index].likes} likes`
}

renderPosts()