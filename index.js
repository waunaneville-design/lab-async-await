// Write your code here!
const postList = document.getElementById('post-list');

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
function displayPosts(posts) {
    const postList = document.querySelector('#post-list');
  posts.forEach(post => {
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    h1.textContent = post.title;

    p.textContent = post.body;

    title.textContent = post.title;
    body.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);

  });
}

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}


fetchPosts();