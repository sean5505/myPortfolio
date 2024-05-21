import "@/styles/App.scss";
import { HookContext } from "@/context/HookContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";

function App({ Component, pageProps }: AppProps) {
  const [isHookLoaded, setIsHookLoaded] = useState(false);
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <HookContext.Provider value={{ isHookLoaded, setIsHookLoaded }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HookContext.Provider>
    </>
  );
}

export default App;
