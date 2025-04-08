'use client';
import Link from 'next/link';
import React from 'react';

const SearchFormResetBtn = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    form && form.reset();
  };
  return (
    <button type='reset' onClick={reset}>
      <Link href='/' className='search-btn text-white'>
        X
      </Link>
    </button>
  );
};

export default SearchFormResetBtn;
