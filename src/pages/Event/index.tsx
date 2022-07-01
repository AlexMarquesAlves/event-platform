import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Header, Sidebar, Video } from "../../components";

interface EventProps {
   children: ReactNode;
}

export function Event({ children }: EventProps) {
   const { slug } = useParams<{ slug: string }>();

   return (
      <div className="flex flex-col min-h-screen">
         <Header children />
         <main className="flex flex-1">
            {slug ? (
               <Video children lessonSlug={slug} />
            ) : (
               <div className="flex-1" />
            )}
            <Sidebar children />
         </main>
      </div>
   );
}
