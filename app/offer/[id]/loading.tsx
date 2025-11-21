import BackBtn from "@/app/_components/BackBtn";

export default function Loading() {
    return (
        <div className='mx-10 xl:w-295 xl:ml-auto xl:mr-auto mb-20'>
            <BackBtn></BackBtn>

            {/* Title Skeleton */}
            <div className='mt-5 h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-2'></div>

            {/* Organization Name Skeleton */}
            <div className='mt-2 h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-2'></div>

            <div className='xl:grid xl:grid-cols-12'>
                {/* Sidebar */}
                <div className='xl:col-start-9 xl:col-span-4'>
                    <h2 className='mt-7 text-3xl font-black text-slate-800 mb-4'>About</h2>
                    <div className='flex flex-wrap xl:flex-col'>

                        {/* Info Items - Posted On, Deadline, Location, Start Date, End Date */}
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className='flex items-center m-4 xl:ml-0'>
                                <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 animate-pulse'>
                                </div>
                                <div className='ml-3'>
                                    <div className='h-4 w-20 bg-gray-200 rounded animate-pulse mb-1'></div>
                                    <div className='h-5 w-28 bg-gray-200 rounded animate-pulse'></div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <hr className='text-gray-200 mt-4' />

                    {/* Categories */}
                    <h2 className='mt-7 text-3xl font-black text-slate-800 mb-4'>Categories</h2>
                    <div className='flex flex-wrap gap-2'>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className='h-8 w-24 bg-gray-200 rounded-full animate-pulse'></div>
                        ))}
                    </div>

                    <hr className='text-gray-200 mt-4' />

                    {/* Required Skills */}
                    <h2 className='mt-7 text-3xl font-black text-slate-800 mb-4'>Required Skills</h2>
                    <div className='flex flex-wrap gap-2'>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className='h-8 w-28 bg-gray-200 rounded-full animate-pulse'></div>
                        ))}
                    </div>

                    <hr className='text-gray-200 mt-4 xl:hidden' />
                </div>

                {/* Main Content */}
                <div className='xl:col-span-8 xl:col-start-1 xl:row-end-1 xl:pr-4'>
                    {/* Description */}
                    <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>Description</h2>
                    <div className='space-y-2'>
                        <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-4 w-5/6 bg-gray-200 rounded animate-pulse'></div>
                    </div>

                    {/* Responsibilities */}
                    <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>Responsibilities</h2>
                    <ul className='space-y-3'>
                        {[...Array(4)].map((_, i) => (
                            <li key={i} className='flex items-center'>
                                <div className='h-5 w-5 rounded-full bg-gray-200 animate-pulse mr-2'></div>
                                <div className='h-4 flex-1 bg-gray-200 rounded animate-pulse'></div>
                            </li>
                        ))}
                    </ul>

                    {/* Ideal Candidate */}
                    <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>Ideal Candidate we want</h2>
                    <div className='space-y-2'>
                        <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-4 w-4/5 bg-gray-200 rounded animate-pulse'></div>
                    </div>

                    {/* When and where */}
                    <h2 className='mt-10 text-3xl font-black text-slate-800 mb-4'>When and where ?</h2>
                    <div className='flex items-center'>
                        <div className='border border-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 animate-pulse'>
                        </div>
                        <div className='ml-3 h-4 w-48 bg-gray-200 rounded animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}