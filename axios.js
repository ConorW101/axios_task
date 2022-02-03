
//import * as DOM from './doms.js';

//DOM.button.onclick = () => read();
//DOM.button_user.onclick = () => readUser();
//DOM.add_button_user.onclick = () => create();
//DOM.reg_button.onclick = () => register();
//DOM.login_button.onclick = () => login();

const button = document.getElementById(`button`);
const button_user = document.getElementById(`user-button`);
const add_button_user = document.getElementById(`add-user-button`);
const reg_button = document.getElementById(`reg-user-button`);
const login_button = document.getElementById(`login-user-button`);


const output = document.getElementById(`output`);
const output2 = document.getElementById(`output-user`);
const output3 = document.getElementById(`output-add-user`);
const output4 = document.getElementById(`output-reg`)
const output5 = document.getElementById(`output-login`)

button.onclick = () => read();
button_user.onclick = () => readUser();
add_button_user.onclick = () => create();
reg_button.onclick = () => register();
login_button.onclick = () => login();

const BASE_URL = 'https://reqres.in/api';

  
  read = async () => {
    axios.get(BASE_URL+"/users?page=2")
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
        console.log(output.innerHTML = JSON.stringify(response.data));
      }).catch((err) => {
        console.log(err);
      })
  }

  readUser = async () => {
    axios.get(BASE_URL+"/users/2")
      .then((response) => {
        output2.innerHTML = JSON.stringify(response.data);
        console.log(output2.innerHTML = JSON.stringify(response.data));
      }).catch((err) => {
        console.log(err);
      })
  }

  create = async () => {
    axios.post(BASE_URL+"/users", {
      name: `Morpheus`,
      job : `Leader`
    })
      .then((response) => {
        output3.innerHTML = JSON.stringify(response.data);
        console.log(output3.innerHTML = JSON.stringify(response.data));
      }).catch((err) => {
        console.log(err);
      })
  }


  register = async () => {
    axios.post(BASE_URL+"/register", {
      email: `eve.holt@reqres.in`,
      password : `pistol`
    })
      .then((response) => {
        output4.innerHTML = JSON.stringify(response.data);
        console.log(output4.innerHTML = JSON.stringify(response.data));
      }).catch((err) => {
        console.log(err);
      })
  }

  login = async () => {
    axios.post(BASE_URL+"/login", {
      email: `eve.holt@reqres.in`,
      password : `cityslicka`
    })
      .then((response) => {
        output5.innerHTML = JSON.stringify(response.data);
        console.log(output5.innerHTML = JSON.stringify(response.data));
      }).catch((err) => {
        console.log(err);
      })
  }
