import { gql, useQuery } from "@apollo/client";

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
   const { data } = useQuery(GET_LESSONS_QUERY);

   console.log(data);

   return (
      <h1 className="text-5xl font-bold text-violet-500">Hello Ignite Lab</h1>
   );
}

export default App;
