export default function fetchData(linkPath, user, pass) {
  fetch(`https://movies-app-siit.herokuapp.com/auth/${linkPath}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify({
      username: user,
      password: pass,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      json.authenticated === true
        ? console.log("sdfabjhbjhsadfjn")
        : console.log(json.message);

      document.cookie = `token=${json.accessToken}`;
    });
}
