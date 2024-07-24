let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let signUpBtn = document.getElementById("signUp");
import { url } from "./constant";

let userSignUp = async (user) => {
  //do fetch for user register
  let response = await fetch(`${url}/user/register`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  // with url specify method name
  // with the url specify the headers needed
  // finally send the body wwith the new user object
  let Data = await response.json();
  if (Data.sucess) {
    window.open("./signin.html");
  } else {
    alert(Data.message);
  }

  console.log(Data, "done");
};

signUpBtn.addEventListener("click", () => {
  let newUser = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  userSignUp(newUser);
  console.log(newUser, "new user");
});
