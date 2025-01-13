import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Brain } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
  pageTitle?: string;
}
export const Header = ({ showBackButton, pageTitle }: HeaderProps) => {
  return (
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
  );
};
