export default function logOutFunctionality() {
  const url = "https://movies-app-siit.herokuapp.com/auth/logout";
  const cookie = document.cookie;
  let token;
  let tokenName;

  if (document.cookie !== "") {
    tokenName = cookie.split("=")[0];
  } else console.log("TOKEN DOES NOT EXIST");

  console.log(tokenName);

  if (tokenName === "token") {
    token = cookie.split("=")[1];
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }
}
