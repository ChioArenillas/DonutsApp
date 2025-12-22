import "@/styles/globals.css";
import "@/styles/vars.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}> 
     <Component {...pageProps} />
  </Provider>
  )
}
