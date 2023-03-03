import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const initialState = {
  user: null,
};

//create context
const Context = createContext();

//for router

//root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

//context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  //router
  const router = useRouter();

  //when jwt expire
  axios.interceptors.response.use(
    function (response) {
      //any satus code that lie within the range of 2xx cause this function to trigger

      return response;
    },
    function (error) {
      //any status code that falls outside the range of 2xx cause this function to trigger

      let res = error.message;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          axios
            .get("/api/v1/logout")
            .then((data) => {
              console.log("LOGOUT SUCCESS", data);
              dispatch({
                type: "LOGOUT",
              });
              window.localStorage.removeItem("user");
              router.push(" /login");
              resolve();
            })
            .catch((err) => {
              console.log("LOGOUT ERROR", err);
              reject(err);
            });
        });
      }
    }
  );

  // useEffect(() => {
  //   const getCsrfToken = async () => {
  //     const data = await axios.get("http://localhost:8000/api/v1/csrf-token");

  //     axios.defaults.headers["X-CSRF-TOKEN"] = data.csrfToken;
  //     console.log(data);
  //   };
  //   getCsrfToken();
  // }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
