import { gql, useQuery } from "@apollo/client";
import { ReactNode } from "react";
import { Lesson } from "../Lesson";
interface SidebarProps {
   children: ReactNode;
}

interface GetLessonsQueryResponse {
   lessons: {
      id: string;
      title: string;
      slug: string;
      availableAt: string;
      lessonType: "live" | "class";
   }[];
}

const GET_LESSONS_QUERY = gql`
   query {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
         id
         lessonType
         availableAt
         title
         slug
      }
   }
`;

export function Sidebar({ children }: SidebarProps) {
   const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

   return (
      <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
         <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
            Cronograma de aulas
         </span>

         <div className="flex flex-col gap-8">
            {data?.lessons.map((lesson) => {
               return (
                  <Lesson
                     key={lesson.id}
                     title={lesson.title}
                     slug={lesson.slug}
                     availableAt={new Date(lesson.availableAt)}
                     type={lesson.lessonType}
                  />
               );
            })}
         </div>
         {children}
      </aside>
   );
}
