import axios from "axios";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axios({
    method: "post",
    url: `${process.env.API_ROOT}/auth/signin`,
    data: {
      email,
      password,
    },
  });
};
