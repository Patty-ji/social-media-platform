let followed = false;

function followUser() {
    const followButton = document.querySelector('.profile-info button');
    if (!followed) {
        followed = true;
        followButton.textContent = 'Unfollow';
        alert('You are now following this user!');
    } else {
        followed = false;
        followButton.textContent = 'Follow';
        alert('You have unfollowed this user.');
    }
}

function likePost(button) {
    const likeCountSpan = button.querySelector('.like-count');
    let likeCount = parseInt(likeCountSpan.innerText);
    likeCount++;
    likeCountSpan.innerText = likeCount;
}

function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentList = button.nextElementSibling;
        const li = document.createElement('li');
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = ''; // Clear the input
    } else {
        alert('Please enter a comment.');
    }
}