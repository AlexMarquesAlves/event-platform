import { ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/";
import { client } from "./lib/apollo";

function App() {
   const [theme, setTheme] = useState("");

   useEffect(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   }, []);

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [theme]);

   const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
   };

   return (
      <>
         <button
            type="button"
            onClick={handleThemeSwitch}
            className="fixed z-10 p-2 text-lg rounded-full right-2 top-2 bg-slate-500 "
         >
            {theme === "dark" ? (
               <FaMoon className="w-full h-full text-white"></FaMoon>
            ) : (
               <FaSun className="w-full h-full text-white"></FaSun>
            )}
         </button>
         <div className="bg:white dark:bg-slate-900">
            <ApolloProvider client={client}>
               <BrowserRouter>
                  <Router />
               </BrowserRouter>
            </ApolloProvider>
         </div>
      </>
   );
}

export default App;
