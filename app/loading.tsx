import { CardPlaceHolder } from './_components/Card';


export default async function LoadingHome() {
  return (
    <div className='mx-10 xl:w-295 xl:ml-auto xl:mr-auto'>
      <div className='flex justify-between m-5 mt-10 items-center'>
        <div>
          <h1 className='mt-5 text-3xl font-black text-slate-900 mb-2'>Opportunities</h1>
          <div className='mt-5 h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-2'></div>
        </div>
        <div>
          <div className='h-8 w-40 bg-gray-200 rounded animate-pulse'>&nbsp;
          </div>
        </div>
      </div>
      <div className='mt-2 mb-10'>
        <CardPlaceHolder />
        <CardPlaceHolder />
        <CardPlaceHolder />
        <CardPlaceHolder />
        <CardPlaceHolder />
      </div>
    </div>
  );
}
