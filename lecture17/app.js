fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    let data = document.querySelector("#data-output");
    let out = "";
    for (let item of json) {
      out += `<tr>
                <td>${item.id}</td>
                <td>${item.userId}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>
        `;
    }
    data.innerHTML = out;
  });
