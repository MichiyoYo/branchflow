import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

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
      {/* Header */}
      {!hideHeader && (
        <Header showBackButton={showBackButton} pageTitle={pageTitle} />
      )}

      {/* Main Content */}
      <main className='flex-1 w-full max-w-7xl mx-auto px-4 py-8'>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
