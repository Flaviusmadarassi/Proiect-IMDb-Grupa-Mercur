import React from "react";
import { useHistory } from "react-router-dom";
import "./LogIn.css";

export default function LogOutButton() {
  let history = useHistory();

  function handleClick() {
    logOutFunctionality();
    history.push("/");
  }

  return (
    <button className="LogOutButton" type="button" onClick={handleClick}>
      LOG OUT
    </button>
  );
}

const url = "https://movies-app-siit.herokuapp.com/auth/logout";
const token = document.cookie
  .split(";")
  .some((item) => item.trim().startsWith("token="));

function logOutFunctionality() {
  if (token) {
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
