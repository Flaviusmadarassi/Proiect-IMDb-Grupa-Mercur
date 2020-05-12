export default function logOutFunctionality() {
  const url = "https://movies-app-siit.herokuapp.com/auth/logout";
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("token="))
  ) {
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": document.cookie.split("=")[1],
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        document.cookie =
          "token=; expires=Thu, 13 Sep 1996 00:00:00 UTC; path=/;";
        window.location.reload();
      });
  }
}