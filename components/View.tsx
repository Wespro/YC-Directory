import React from 'react';
import Ping from './Ping';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';
const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
    // Execute after the layout is rendered and sent to the user
  });

  return (
    <div className='view-container '>
      <div className='absolute -top-2 -right-2 '>
        <Ping />
      </div>
      <p className='view-text'>
        <span className='font-black flex gap-2'>
          <span className='text-primary text-shadow-lg'>{totalViews}</span>
          {totalViews === 1 ? 'view' : 'views'}
        </span>
      </p>
    </div>
  );
};

export default View;
