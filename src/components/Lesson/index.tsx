import { ReactNode } from "react";

interface LessonProps {
   children: ReactNode;
}

export function Lesson({ children }: LessonProps) {
   return (
      <>
         <h1>Lesson</h1>
         {children}
      </>
   );
}
