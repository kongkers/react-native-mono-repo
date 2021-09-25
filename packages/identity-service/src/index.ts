import Axios from "axios";
import R from "ramda";
import { IDENTITY_SERVER_HOST } from "@excelera/config";

export async function userLogin(email: string, password: string): Promise<any> {
  const query = `mutation UserLogin($email: String!, $password: String!) {
      userLogin(email: $email, password: $password) {
        kid
        tokenType
        scope
        expiresIn
        accessToken
        refreshToken
      }
    }`;
  try {
    const response = await Axios({
      method: "post",
      url: "/graphql",
      baseURL: IDENTITY_SERVER_HOST,
      data: {
        query,
        variables: {
          email,
          password,
        },
      },
    });

    return R.pathOr(null, ["data", "data", "userLogin"], response);
  } catch (err) {
    console.log(err);
  }
}
