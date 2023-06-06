import axios from "axios";

async function signup(signupBody) {
  try {
    const signupResponse = await axios.post(
      "http://localhost:8080/user/signup",
      signupBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (signupResponse.status == 201) {
      console.log(signupResponse.data);
      return signupResponse.data;
    } else {
      return {};
    }
  } catch (e) {
    console.log(e);

    return {};
  }
};

async function login(loginBody) {
  try {
    const loginResponse = await axios.post(
      "http://localhost:8080/user/login",
      loginBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (loginResponse.status == 200) {
      console.log(loginResponse.data);
      return loginResponse.data;
    } else {
      return false
    }
  } catch (e) {
    console.log(e);

    return false;
  }
}

export { signup, login };
