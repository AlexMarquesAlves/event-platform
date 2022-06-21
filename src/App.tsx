import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
   query lessons {
      lessons {
         id
         title
      }
   }
`;
interface Lesson {
   id: string;
   title: string;
}

export default function App() {
   /*
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data)
    })
  }, [])
  */

   const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

   return (
      <ul style={{ textAlign: "center", padding: "25px" }}>
         {data?.lessons.map((lesson) => {
            return <li key={lesson.id}>{lesson.title}</li>;
         })}
      </ul>
   );
}
