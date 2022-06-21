import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
   query {
      lessons {
         id
         tittle

         # teacher {
         #    name
         #    bio
         # }
      }
   }
`;

function App() {
   useEffect(() => {
      client
         .query({
            query: GET_LESSONS_QUERY,
         })
         .then((res) => {
            console.log(res.data);
         });

      return () => {};
   }, []);

   return (
      <h1 className="text-5xl font-bold text-violet-500">Hello Ignite Lab</h1>
   );
}

export default App;
