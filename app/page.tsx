import { Card } from './_components/Card';
import jobOffers from './_data/data.json';
import { JobOffer } from './_lib/JobOffer';

const offers : JobOffer[] = jobOffers;

export default function Home() {
  return (
    <div className='mx-10 xl:w-295 xl:ml-auto xl:mr-auto'>
      <div className='flex justify-between m-5 mt-10 items-center'>
        <div>
          <h1 className='mt-5 text-3xl font-black text-slate-900 mb-2'>Opportunities</h1>
          <p className='mb-5 text-gray-500'>Showing {offers.length} results</p>
        </div>
        <div>
          <div className='text-gray-700'>Sort by:&nbsp;
            <span className='text-blue-950'>Most Relevant&nbsp;</span>
            <svg className='inline text-blue-950' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 5.66663L8 10.3333L3.33333 5.66663" className='stroke-blue-950' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="mb-2 inline-block h-7 ml-3 border-l border-gray-200">&nbsp;</div>
          </div>
        </div>
      </div>
      <div className='mt-2 mb-10'>
        {offers.map((offer) => {
          return <Card key={offer.id} offer={offer} />
        })}
      </div>
    </div>
  );
}
