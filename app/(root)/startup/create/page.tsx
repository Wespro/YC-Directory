import { auth } from '@/auth';
import StartUpForm from '@/components/StartUpForm';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await auth();
  if (!session) {
    return redirect('/');
  }
  return (
    <>
      <section className='pink_container !min-h-[230px]'>
        <h1 className='heading'>Submit your startup pitch</h1>
      </section>
      <StartUpForm />
    </>
  );
};

export default page;
