import React from 'react';

const FooterComponent = () => {
  return (
    <footer className='w-full flex items-center justify-center p-8 h-10 gap-2 border-t-2 border-t-indigo-900 bg-indigo-400'>
      <p className='font-bold'>Copyright © 2024 ValerioL94</p>
      <a
        className='hover:animate-pulse focus:animate-pulse'
        href='https://github.com/ValerioL94'
      >
        <img
          className='h-6'
          src='/assets/icons/github-mark.svg'
          alt='github logo'
        />
      </a>
    </footer>
  );
};

export default FooterComponent;
