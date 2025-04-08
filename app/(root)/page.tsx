import Image from 'next/image';
import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'John Doe' },
      _id: 1,
      description: 'This is a description',
      image:
        'https://images.pexels.com/photos/31459238/pexels-photo-31459238/free-photo-of-serene-park-scene-with-golden-autumn-foliage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Robots',
      title: 'We Robots',
    },
  ];
  return (
    <>
      <section className=' pink_container'>
        <h1 className='heading'>
          Pitch your start-up,
          <br />
          connect with Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}" :` : 'All Start-ups :'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?.id} post={post} />
            ))
          ) : (
            <p className='no-results'>No results startup found..</p>
          )}
        </ul>
      </section>
    </>
  );
}
``;
