let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
import { url } from "./constant";

let userLogin = async (user) => {
  //do fetch for user login
  let response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  // with url specify method name
  // with the url specify the headers needed
  // finally send the body wwith the new user object
  let Data = await response.json();
  if (Data.sucess) {
    window.open("./home.html");
  } else {
    alert(Data.message);
  }

  console.log(user, "login complete");
};

login.addEventListener("click", () => {
  let user = {
    email: email.value,
    password: password.value,
  };
  userLogin(user);
});
