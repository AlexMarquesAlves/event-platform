import { ReactNode } from 'react';

interface LogoProps {
  children: ReactNode;
}

function Logo({ children }: LogoProps) {
  return (
    <>
      <h1>Logo</h1>
      {children}
    </>
  );
}

export default Logo;
