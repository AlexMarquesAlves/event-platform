import { ReactNode } from "react";

interface EventProps {
   children: ReactNode;
}

export function Event({ children }: EventProps) {
   return (
      <>
         <h1>Event</h1>
         {children}
      </>
   );
}
