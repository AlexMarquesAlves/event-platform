import { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <>
      <h1>Sidebar</h1>
      {children}
    </>
  );
}

export default Sidebar;
