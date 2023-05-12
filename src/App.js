import { LoginPage } from "./Views/LoginPage/LoginPage";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Views/Home/Home";
import { Router } from "./routes/routes";
import store from "./app/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { addUser } from "./reducers/UserReducer";
// import { detectOverflow } from '@popperjs/core;


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("user") !== null) {
        let user = JSON.parse(localStorage.getItem("user") ?? "{}");
        dispatch(addUser(user));
      } else if (Cookies.get("user") !== undefined) {
        let user = JSON.parse(Cookies.get("user") ?? "{}");
        dispatch(addUser(user));
      }
    })();
  }, []);

  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
