import { cn, formatDate } from '@/lib/utils';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Startup, Author } from '@/sanity/types';
import { Skeleton } from './ui/skeleton';

export type StartupCardType = Omit<Startup, 'author'> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    _id,
    description,
    image,
    category,
    title,
  } = post;
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{formatDate(_createdAt)}</p>

        <div className='flex items-center gap-1.5'>
          <Eye className='size-6 text-primary' />
          <span className='text-16-medium'>{views} </span>
        </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            className='rounded-full'
            src={author?.image!}
            alt={author?.name!}
            width={48}
            height={48}
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>{description}</p>
        <img src={image} alt='placeholder' className='startup-card_img' />
      </Link>
      <div className='flex-between mt-5'>
        <Link
          href={`/?query=${category?.toLowerCase()}`}
          className='text-16-medium'
        >
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button className='startup-card_btn' asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
export const StartupCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i: number) => (
        <li key={cn('skeleton', i)}>
          {<Skeleton className='startup-card_skeleton' />}
        </li>
      ))}
    </>
  );
};
export default StartupCard;
