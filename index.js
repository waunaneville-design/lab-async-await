const postList = document.getElementById('post-list');

function displayPosts(posts) {
  posts.forEach(post => {
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    title.textContent = post.title;
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

async function fetchPosts() {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(posts => displayPosts(posts));
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    const fallbackPosts = [
      {
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    ];
    displayPosts(fallbackPosts);
  }
}

fetchPosts();