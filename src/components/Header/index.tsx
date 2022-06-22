import { ReactNode } from "react";
import { Logo } from "../Logo";

interface HeaderProps {
   children: ReactNode;
}

export function Header({ children }: HeaderProps) {
   return (
      <header className="flex items-center justify-center w-full py-5 bg-gray-700 border-b border-gray-600">
         <Logo />
         {children}
      </header>
   );
}
