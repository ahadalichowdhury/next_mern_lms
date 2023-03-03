import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";
import TopNav from "../Routes/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../ContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position="top-center" />
      <TopNav />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
