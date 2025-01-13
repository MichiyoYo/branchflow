import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='w-full bg-white/50 backdrop-blur-sm border-t border-purple-100 mt-auto'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 font-light text-sm'>
          {/* Product */}
          <div>
            <h3 className='font-semibold text-slate-800 mb-3'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/brain-dump'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Brain Dump
                </Link>
              </li>
              <li>
                <Link
                  to='/features'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to='/pricing'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='font-semibold text-slate-800 mb-3'>Resources</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/docs'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to='/guides'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Guides
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='font-semibold text-slate-800 mb-3'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/about'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/careers'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-semibold text-slate-800 mb-3'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/privacy'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to='/terms'
                  className='text-slate-600 hover:text-purple-600 transition-colors'
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-8 pt-8 border-t border-purple-100'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-slate-400 text-xs '>
              BranchFlow.dev © 2025 | All rights reserved.
              <br />
              Made with ❤️ by{' '}
              <a
                className='text-slate-500 hover:text-purple-600 transition-colors'
                href='https://cristinalester.rocks'
                target='_blank'
              >
                Cristina Lester
              </a>
            </div>
            <div className='flex space-x-4'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-600 hover:text-purple-600 transition-colors'
              >
                <Github className='h-5 w-5' />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-600 hover:text-purple-600 transition-colors'
              >
                <Twitter className='h-5 w-5' />
              </a>
              {/* linked in */}
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-600 hover:text-purple-600 transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
