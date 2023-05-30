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
      return signupResponse.data;
    } else {
      return {};
    }
  } catch (e) {
    console.log(e);

    return {};
  }
}

export { signup };
