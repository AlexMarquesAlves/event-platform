import { ReactNode } from "react";
import { Header, Lesson, Sidebar, Video } from "../../components";

interface EventProps {
   children: ReactNode;
}

export function Event({ children }: EventProps) {
   return (
      <>
         <Header children />
         <Sidebar children />
         <Video children />
         <Lesson children />

         {children}
      </>
   );
}
