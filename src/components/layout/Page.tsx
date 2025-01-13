import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, ArrowLeft } from 'lucide-react';
import { Footer } from './Footer';

interface PageProps {
  children: ReactNode;
  showBackButton?: boolean;
  pageTitle?: string;
}

export const Page = ({
  children,
  showBackButton = true,
  pageTitle,
}: PageProps) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-purple-50 to-white flex flex-col'>
      {/* Header */}
      <header className='w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-b border-purple-100'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            {showBackButton && (
              <Link to='/'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:bg-purple-50'
                >
                  <ArrowLeft className='h-5 w-5 text-purple-600' />
                </Button>
              </Link>
            )}
            {pageTitle && (
              <div className='flex items-center space-x-2'>
                <Brain className='h-6 w-6 text-purple-600' />
                <h1 className='text-xl font-semibold text-slate-800'>
                  {pageTitle}
                </h1>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1 w-full max-w-7xl mx-auto px-4 py-8'>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
