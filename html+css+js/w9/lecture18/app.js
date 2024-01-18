async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonData = await response.json();
    let data = document.querySelector("#data-output");
    let out = "";
    for (let item of jsonData) {
      out += `<tr>
                <td>${item.id}</td>
                <td>${item.userId}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>
        `;
    }
    data.innerHTML = out;
  } catch (err) {
    alert(err);
  }
}

const button = document.getElementById("getPostButton");
button.addEventListener("click", getPosts);
