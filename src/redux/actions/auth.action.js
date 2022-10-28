import { authConstant } from "./constants";
import axios from "../../helper/AxiosIntance";
import { Toastify } from "../../App";

export const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      // let res = await axios().post("/users/login", { ...user });
      let res = {
        status: 200,
        data: {
          token: "test",
          user: {
            ...user,
            coursesBought: true,
          },
        },
      };

      if (res.status == 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        Toastify("success", "Login successfully");
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (res.status == 401) {
          Toastify("error", "Unable to Login");
          dispatch({
            type: authConstant.LOGIN_FAIL,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      // Toastify("error", error.response.data.message);
      dispatch({
        type: authConstant.LOGIN_FAIL,
        payload: { error: error.message },
      });
    }
  };
};

export const signUp = (user) => {
  console.log(user);
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.REGISTER_REQUEST });
      // let res = await axios().post("/users", { ...user });
      let res;
      res = {
        status: 201,
        data: {
          token: "test",
          user: {
            ...user,
            coursesBought: true,
          },
        },
      };

      if (res.status == 201) {
        Toastify("success", "Sign up successfully");
        dispatch({ type: authConstant.REGISTER_SUCCESS });
        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        const { error } = res.data;
        Toastify("error", "Unable to signup");
        dispatch({ type: authConstant.REGISTER_FAIL, payload: { error } });
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
      dispatch({
        type: authConstant.REGISTER_FAIL,
        payload: { error: error.message },
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        dispatch({
          type: authConstant.LOGIN_FAIL,
          payload: { error: "Failed to authenticate" },
        });
      }
    } catch (error) {
      localStorage.clear();
      Toastify("error", "Authentication failed");
      dispatch({ type: authConstant.LOGOUT_SUCCESS });
    }
  };
};

export const refreashUser = (token) => {
  return async (dispatch) => {
    try {
      if (token) {
        // let res = await axios(token).get("/users/refreash_user");
        let res = {
          status: 200,
          data: {
            token,
            user: {
              ...JSON.parse(localStorage.getItem("user")),
            },
          },
        };

        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          dispatch({
            type: authConstant.LOGIN_SUCCESS,
            payload: {
              token: res.data.token,
              user: res.data.user,
            },
          });
        } else {
          localStorage.clear();
          Toastify("error", "Authentication failed");
          dispatch({
            type: authConstant.LOGIN_FAIL,
            payload: { error: "Failed to authenticate" },
          });
        }
      } else {
        dispatch({
          type: authConstant.LOGIN_FAIL,
          payload: { error: "Failed to authenticate" },
        });
      }
    } catch (error) {
      localStorage.clear();
      Toastify("error", "Authentication failed");
      dispatch({ type: authConstant.LOGIN_FAIL });
    }
  };
};
export const signout = (token) => {
  return async (dispatch) => {
    try {
      console.log("token :", token);
      dispatch({ type: authConstant.LOGOUT_REQUEST });
      // let res = await axios(token).post("/users/logoutAll");
      let res = {
        status: 200,
      };
      // console.log(res,"signout")
      if (res.status == 200) {
        localStorage.clear();
        Toastify("success", "Logout Sucessfully");
        dispatch({ type: authConstant.LOGOUT_SUCCESS });
      } else {
        Toastify("error", "Unable to Logout");
        dispatch({
          type: authConstant.LOGOUT_FAIL,
          payload: {
            error: "Unable to logout",
          },
        });
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
      dispatch({
        type: authConstant.LOGOUT_FAIL,
        payload: { error: error.message },
      });
    }
  };
};

export const signoutOne = (token) => {
  return async (dispatch) => {
    try {
      console.log("token :", token);
      dispatch({ type: authConstant.LOGOUT_REQUEST });
      // let res = await axios(token).post("/users/logout");
let res={
  status:200
}
      console.log(res, "signout");
      if (res.status == 200) {
        localStorage.clear();
        Toastify("success", "Logout Sucessfully");
        dispatch({ type: authConstant.LOGOUT_SUCCESS });
      } else {
        Toastify("error", "Unable to Logout");
        dispatch({
          type: authConstant.LOGOUT_FAIL,
          payload: {
            error: "Unable to logout",
          },
        });
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
      dispatch({
        type: authConstant.LOGOUT_FAIL,
        payload: { error: error.message },
      });
    }
  };
};

export const forgot = ({ email }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.FORGOT_PASSWORD_REQUEST });

      let res = await axios().post("/users/forgotpassword", { email });

      if (res.status == 200) {
        Toastify("success", res.data);
        dispatch({ type: authConstant.FORGOT_PASSWORD_SUCCESS });
      } else {
        if (res.status == 400) {
          Toastify("error", "Email is not registered");
          dispatch({
            type: authConstant.FORGOT_PASSWORD_FAIL,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
      dispatch({
        type: authConstant.FORGOT_PASSWORD_FAIL,
        payload: { error: error.message },
      });
    }
  };
};

export const resetPassword = ({ password }, { id, token }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.RESET_PASSWORD_REQUEST });

      let res = await axios().post(`/users/resetpassword/${id}/${token}`, {
        password,
      });

      if (res.status == 201) {
        const { user } = res.data;
        Toastify("success", "Password changed successfully");
        dispatch({ type: authConstant.RESET_PASSWORD_SUCCESS });
      } else {
        if (res.status == 400) {
          Toastify("error", "Email is not registered");
          dispatch({
            type: authConstant.RESET_PASSWORD_FAIL,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
      dispatch({
        type: authConstant.RESET_PASSWORD_FAIL,
        payload: { error: error.message },
      });
    }
  };
};

export const paymentSuccessVerify = (user) => {
  return async (dispatch) => {
    try {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "UPDATE_USER", payload: { user } });
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
    }
  };
};

export const uploadProfile = (token, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "uploading" });
      let res = await axios(token).post("/users/profileImage", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res, "resdata");
      if (res.status == 201) {
        const user = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        Toastify("success", "Profile updated");
        dispatch({
          type: "uploading_success",
          payload: {
            user,
          },
        });
      } else {
        if (res.status == 401) {
          Toastify("error", "Unable to upload");
          dispatch({
            type: "uploading_fail",
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      Toastify("error", error.response.data.message);
      dispatch({
        type: "uploading_fail",
      });
    }
  };
};
