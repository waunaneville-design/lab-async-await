const postList = document.getElementById("post-list");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const title = document.createElement("h1");
      const body = document.createElement("p");

      title.textContent = post.title;
      body.textContent = post.body;

      postList.appendChild(title);
      postList.appendChild(body);
    });
  })
  .catch(error => console.error(error));

  function displayPosts(posts) {
  const postList = document.querySelector("#post-list");

  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    
    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}