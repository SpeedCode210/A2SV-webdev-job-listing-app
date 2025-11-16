type Props = { id: number };
import { InversedTag, NeutralTag } from '@/app/_components/Tag';
import jobOffers from '../../_data/data.json';
import Link from 'next/link';


export default async function Description({ params }: { params: Promise<Props> }) {

  const { id } = await params;
  const job_offer = jobOffers.filter(j => j.id == id)[0];

  function displayDate(date: string): string {
    const dateObject = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(dateObject);
    return formattedDate;
  }

  return (
    <div className='mx-10 xl:w-295 xl:ml-auto xl:mr-auto mb-20'>
      <Link className='mt-12 flex items-center text-gray-600' href='/'>
        <svg className='inline h-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path className='fill-gray-600' d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></path>
        </svg>
        <div>Back</div>
        </Link>
      <h1 className='mt-5 text-4xl font-black text-slate-900 mb-2'>{job_offer.job_title}</h1>
      <p className='mt-2 text-1xl font-black text-slate-400 mb-2'>{job_offer.organization}</p>
      <div className='xl:grid grid-cols-12'>
        <div className='col-start-9 col-span-4'>
          <h2 className='mt-7 text-3xl font-black text-slate-800 mb-4'>About</h2>
          <div className='flex flex-wrap xl:flex-col'>

            <div className='flex items-center m-4 xl:ml-0'>
              <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1M10 1C11.4368 1 12.795 1.33671 14 1.93552C14 1.93552 12.8085 1.40681 12 1.22302C11.2337 1.0488 10 1 10 1ZM10 7V13M13 10H7" stroke="#26A4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className='ml-3'>
                <span className='text-slate-500 block'>Posted On</span>
                <span className='text-slate-900 block'>{displayDate(job_offer.posted_on)}</span>
              </p>
            </div>

            <div className='flex items-center m-4 xl:ml-0'>
              <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full'>
                <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.4678 7.3947L5.46555 7.39653L5.46341 7.39861L5.4678 7.3947ZM15.4219 7.20817C15.3523 7.14111 15.2751 7.08244 15.1919 7.03336C15.0741 6.96402 14.9433 6.91958 14.8076 6.9028C14.672 6.88601 14.5343 6.89723 14.4031 6.93577C14.272 6.9743 14.1501 7.03933 14.0451 7.12683C13.9401 7.21433 13.8541 7.32245 13.7925 7.4445C13.448 8.12319 12.9729 8.72718 12.3945 9.22184C12.483 8.72344 12.5276 8.21825 12.5278 7.71207C12.5297 6.17217 12.1234 4.65928 11.3505 3.32743C10.5775 1.99558 9.4654 0.892354 8.12741 0.130066C7.98002 0.0465136 7.81382 0.00177616 7.6444 5.18089e-05C7.47498 -0.00167255 7.3079 0.0396727 7.15884 0.120208C7.00977 0.200744 6.88362 0.317829 6.7922 0.460477C6.70078 0.603125 6.6471 0.76666 6.6362 0.935736C6.58024 1.88391 6.33236 2.81085 5.90759 3.6604C5.48282 4.50995 4.88999 5.26442 4.16503 5.8781L3.93456 6.0656C3.17648 6.57569 2.50546 7.2045 1.94726 7.9279C1.07958 9.021 0.478506 10.3012 0.191718 11.6671C-0.0950709 13.0329 -0.0596893 14.4468 0.295056 15.7966C0.649802 17.1464 1.31415 18.3949 2.23543 19.4433C3.1567 20.4916 4.30956 21.3109 5.60257 21.8361C5.75439 21.8981 5.91914 21.9219 6.08229 21.9052C6.24545 21.8885 6.40198 21.8319 6.5381 21.7404C6.67422 21.6489 6.78573 21.5254 6.8628 21.3806C6.93987 21.2358 6.98013 21.0743 6.98003 20.9103C6.97932 20.8042 6.96252 20.6989 6.93023 20.5978C6.7065 19.7568 6.64208 18.8814 6.74028 18.0168C7.68652 19.8015 9.20542 21.2162 11.0528 22.0334C11.2783 22.1342 11.5332 22.1478 11.7681 22.0715C13.2277 21.6004 14.5425 20.7639 15.5878 19.6415C16.633 18.5191 17.3739 17.1481 17.74 15.6588C18.1061 14.1694 18.0853 12.6112 17.6796 11.1321C17.2739 9.65302 16.4967 8.30227 15.4219 7.20817ZM11.5171 20.0392C10.6454 19.5975 9.87649 18.9772 9.26028 18.2187C8.64406 17.4602 8.19438 16.5806 7.94046 15.6369C7.86291 15.3191 7.80293 14.9974 7.76077 14.673C7.73221 14.4665 7.63981 14.274 7.4965 14.1226C7.35318 13.9711 7.16612 13.8682 6.96146 13.8283C6.89841 13.8159 6.8343 13.8096 6.77003 13.8097C6.59427 13.8097 6.42161 13.856 6.26944 13.9439C6.11728 14.0319 5.991 14.1584 5.90333 14.3107C5.0736 15.7419 4.65633 17.3748 4.69776 19.0285C3.968 18.4611 3.35811 17.7545 2.90344 16.9497C2.44876 16.1449 2.15835 15.2578 2.04903 14.3399C1.93971 13.422 2.01366 12.4915 2.26658 11.6024C2.51951 10.7133 2.94639 9.88326 3.52247 9.16035C3.95989 8.59218 4.48756 8.09964 5.08447 7.70235C5.11032 7.68567 5.1351 7.6674 5.15869 7.64766C5.15869 7.64766 5.45538 7.40218 5.46552 7.39656C6.89022 6.19152 7.90353 4.57207 8.36426 2.76387C9.45383 3.7711 10.1804 5.1099 10.431 6.57238C10.6817 8.03485 10.4425 9.53918 9.75049 10.8518C9.65907 11.0269 9.62157 11.2252 9.64271 11.4216C9.66386 11.6181 9.74271 11.8039 9.86932 11.9555C9.99592 12.1072 10.1646 12.218 10.3541 12.2739C10.5436 12.3298 10.7454 12.3284 10.9341 12.2698C12.4659 11.7896 13.8138 10.8517 14.7964 9.58226C15.3869 10.4545 15.773 11.4489 15.9259 12.4911C16.0787 13.5334 15.9944 14.5967 15.6792 15.6018C15.364 16.6069 14.826 17.528 14.1054 18.2963C13.3847 19.0646 12.5 19.6604 11.5171 20.0393L11.5171 20.0392Z" fill="#26A4FF" />
                </svg>
              </div>
              <p className='ml-3'>
                <span className='text-slate-500 block'>Deadline</span>
                <span className='text-slate-900 block'>{displayDate(job_offer.deadline)}</span>
              </p>
            </div>

            <div className='flex items-center m-4 xl:ml-0'>
              <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full'>
                <svg className='m-auto my-auto block' width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 8.50051C11 7.11924 9.88076 6 8.50051 6C7.11924 6 6 7.11924 6 8.50051C6 9.88076 7.11924 11 8.50051 11C9.88076 11 11 9.88076 11 8.50051Z" stroke="#26A4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.49951 19C7.30104 19 1 13.8984 1 8.56329C1 4.38664 4.3571 1 8.49951 1C12.6419 1 16 4.38664 16 8.56329C16 13.8984 9.69799 19 8.49951 19Z" stroke="#26A4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <p className='ml-3'>
                <span className='text-slate-500 block'>Location</span>
                <span className='text-slate-900 block'>{job_offer.location}</span>
              </p>
            </div>

            <div className='flex items-center m-4 xl:ml-0'>
              <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75" stroke="#26A4FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 12.8768C10 12.5906 10.3069 12.4092 10.5577 12.5471L14.4179 14.6703C14.6779 14.8132 14.6779 15.1868 14.4179 15.3297L10.5577 17.4529C10.3069 17.5908 10 17.4094 10 17.1232V12.8768Z" stroke="#26A4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className='ml-3'>
                <span className='text-slate-500 block'>Start Date</span>
                <span className='text-slate-900 block'>{displayDate(job_offer.start_date)}</span>
              </p>
            </div>

            <div className='flex items-center m-4 xl:ml-0'>
              <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75" stroke="#26A4FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14.7222L11.7778 16.5L14.4444 12.5" stroke="#26A4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className='ml-3'>
                <span className='text-slate-500 block'>End Date</span>
                <span className='text-slate-900 block'>{displayDate(job_offer.end_date)}</span>
              </p>
            </div>

          </div>
          <hr className='text-gray-200 mt-4' />
          <h2 className='mt-7 text-3xl font-black text-slate-800 mb-4'>Categories</h2>
          <div>
            {job_offer.tags.map((tag) => {
              return <InversedTag key={`${id}.${tag}`} name={tag} />;
            })}
          </div>
          <hr className='text-gray-200 mt-4' />
          <h2 className='mt-7 text-3xl font-black text-slate-800 mb-4'>Required Skills</h2>
          {job_offer.required_skills.map((tag) => {
            return <NeutralTag key={`${id}.${tag}`} name={tag} />;
          })}
          <hr className='text-gray-200 mt-4 xl:hidden' />
        </div>
        <div className='col-span-8 col-start-1 row-end-1'>
          <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>Description</h2>
          <p className='text-slate-900'>{job_offer.description}</p>
          <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>Responsibilities</h2>
          <ul>
            {job_offer.responsibilities.map((r, i) => {
              return (<li className='mb-3 flex items-center text-slate-900' key={`responsibility-${i}`}>
                <svg
                  className='inline-block h-5 w-5 mr-2'
                  viewBox="0 0 17 17"
                  fill="none"
                  version="1.1"
                  id="svg2">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.33333 1.66667C4.65143 1.66667 1.66667 4.65143 1.66667 8.33333C1.66667 12.0152 4.65143 15 8.33333 15C12.0152 15 15 12.0152 15 8.33333C15 4.65143 12.0152 1.66667 8.33333 1.66667ZM0 8.33333C0 3.73096 3.73096 0 8.33333 0C12.9357 0 16.6667 3.73096 16.6667 8.33333C16.6667 12.9357 12.9357 16.6667 8.33333 16.6667C3.73096 16.6667 0 12.9357 0 8.33333Z"
                    fill="#56CDAD"
                    id="path1" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m 11.62884,6.342828 c 0.32544,0.325437 0.32544,0.853072 0,1.178512 l -3.33333,3.33333 c -0.32544,0.32544 -0.85308,0.32544 -1.17852,0 L 5.450328,9.18801 c -0.3254372,-0.32544 -0.3254372,-0.85308 0,-1.17852 0.325437,-0.32543 0.853072,-0.32543 1.178512,0 l 1.07741,1.07742 2.74408,-2.744082 c 0.32543,-0.3254372 0.85307,-0.3254372 1.17851,0 z"
                    fill="#56cdad"
                    id="path2" />
                </svg>
                {r}
              </li>);
            })}
          </ul>
          <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>Ideal Candidate we want</h2>
          <ul className='list-disc pl-8'>
            {job_offer.qualities_wanted.map((r, i) => {
              return <li key={`quality-${i}`} className='text-slate-800'><b>{r[0]}</b> {r[1] && r[1].length > 0 && ' : ' + r[1]}</li>;
            })}
          </ul>
          <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>When and where ?</h2>
          <div className='flex items-center'>
            <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full'>
              <svg className='m-auto my-auto block' width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11 8.50051C11 7.11924 9.88076 6 8.50051 6C7.11924 6 6 7.11924 6 8.50051C6 9.88076 7.11924 11 8.50051 11C9.88076 11 11 9.88076 11 8.50051Z" stroke="#26A4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.49951 19C7.30104 19 1 13.8984 1 8.56329C1 4.38664 4.3571 1 8.49951 1C12.6419 1 16 4.38664 16 8.56329C16 13.8984 9.69799 19 8.49951 19Z" stroke="#26A4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className='ml-3 text-slate-900'>{job_offer.onboarding_location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
