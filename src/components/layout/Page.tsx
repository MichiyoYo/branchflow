import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

interface PageProps {
  children: ReactNode;
  showBackButton?: boolean;
  pageTitle?: string;
  hideHeader?: boolean;
}

export const Page = ({
  children,
  showBackButton = true,
  pageTitle,
  hideHeader = false,
}: PageProps) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-purple-50 to-white flex flex-col'>
      {!hideHeader && (
        <Header showBackButton={showBackButton} pageTitle={pageTitle} />
      )}
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
