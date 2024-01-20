async function News() {
  try {
    let response = await fetch("https://dummyjson.com/posts?skip=5&limit=10");
    let responseData = await response.json();
    return responseData.posts;
  } catch (err) {
    console.log(err);
  }
}

export default News;
