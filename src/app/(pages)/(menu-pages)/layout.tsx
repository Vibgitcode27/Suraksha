import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function MenuPagesLayout({ children }: LayoutProps) {
  return (
    <div>
      <nav>
        {/* Add your navigation here */}
      </nav>
      <main>{children}</main>
    </div>
  );
}