import { ReactNode } from "react";
import { Header, Sidebar, Video } from "../../components";

interface EventProps {
   children: ReactNode;
}

export function Event({ children }: EventProps) {
   return (
      <div className="flex flex-col min-h-screen">
         <Header children />

         <main className="flex flex-1">
            <Video children />
            <Sidebar children />
         </main>

         {children}
      </div>
   );
}
