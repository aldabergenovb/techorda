async function Users() {
  try {
    let response = await fetch("https://dummyjson.com/users?limit=20");
    let responseData = await response.json();
    return responseData.users;
  } catch (err) {
    console.log(err);
  }
}

export default Users;
