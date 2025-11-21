'use client';

import BackBtn from "./_components/BackBtn"
import "./globals.css";

export default function NotFound() {
    return (
        <div className='flex items-center justify-center h-screen flex-col'>
            <div className='flex items-center justify-center mb-2'>
                <h2 className='text-2xl font-semibold'>500</h2>
                <div className="inline-block h-10 ml-2 mr-1 border-l border-gray-400">&nbsp;</div>
                <div className='text-2xl font-semibold'>Server Error</div>
            </div>
            <BackBtn></BackBtn>
        </div>
    )

}
