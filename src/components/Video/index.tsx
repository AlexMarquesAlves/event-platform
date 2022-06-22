import { ReactNode } from "react";

interface VideoProps {
   children: ReactNode;
}

export function Video({ children }: VideoProps) {
   return (
      <>
         <h1>Video</h1>
         {children}
      </>
   );
}
