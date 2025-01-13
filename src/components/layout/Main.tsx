interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className='max-w-7xl mx-auto px-4 py-8'>{children}</main>;
};
