'use client';

import Link from "next/link";
import { JobOffer } from "../_lib/JobOffer";
import { Tag } from "./Tag";
import Image from 'next/image';

const fallBackSrc = "https://upload.wikimedia.org/wikipedia/commons/4/49/Question_Circle-Gray.svg";

export function Card({ offer }: { offer: JobOffer }) {
  const { title, orgName, description, location, opType, categories, logoUrl, id } = offer;
  return (
    <div className="flex items-start space-x-7 border border-gray-300 m-2 rounded-3xl px-8 py-4">
      <Image unoptimized width={48} height={48} className="h-12 w-12 mt-2 object-contain" alt='LOGO' src={logoUrl == null || logoUrl == "" ? fallBackSrc : logoUrl} onError={(e) => (e.currentTarget.src = fallBackSrc)}/>
      <div>
        <h3 className="text-xl font-semibold text-slate-900"><Link href={`offer/${id}`}>{title}</Link></h3>
        <p className="text-gray-500 mt-1">{orgName} &bull; {location.join(', ')}</p>
        <p className="mt-2 mb-2">{description}</p>
        {opType == "inPerson" ? (
          <span className="mb-2 mx-1 text-xs font-semibold inline-block bg-emerald-50 text-emerald-400 py-2 px-3 rounded-full">In Person</span>
        ) : (
          <span className="mb-2 mx-1 text-xs font-semibold inline-block bg-orange-50 text-orange-400 py-2 px-3 rounded-full">Remote</span>
        )}
        <div className="mb-2 inline-block h-7 ml-2 border-l border-gray-200">&nbsp;</div>
        {categories.map((tag) => {
          return <Tag key={`${id}.${tag}`} name={tag} />;
        })}
      </div>
    </div>
  )
}


export function CardPlaceHolder() {
  return (
    <div className="flex items-start space-x-7 bg-gray-100 m-2 rounded-3xl px-8 py-4 animate-pulse">
      <div className="h-12 w-12 mt-2 rounded bg-gray-200 animate-pulse"></div>
      <div className="w-full">
        <h3 className="text-xl font-semibold bg-gray-200 rounded h-8 w-11/12"></h3>
        <p className="bg-gray-200 mt-1 h-5 w-1/3 rounded"></p>
        <div className="mt-2 mb-2 space-y-2">
          <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-5/6 bg-gray-200 rounded animate-pulse'></div>
        </div>
        <div className="flex items-center">
          <div className="mx-1 text-xs font-semibold inline-block bg-gray-200 py-2 px-3 rounded-full w-18 h-8"></div>
          <div className="inline-block h-7 ml-2 border-l border-gray-200">&nbsp;</div>
          <div className="mx-1 text-xs font-semibold inline-block bg-gray-200 py-2 px-3 rounded-full w-18 h-8"></div>
          <div className="mx-1 text-xs font-semibold inline-block bg-gray-200 py-2 px-3 rounded-full w-18 h-8"></div>
          <div className="mx-1 text-xs font-semibold inline-block bg-gray-200 py-2 px-3 rounded-full w-18 h-8"></div>

        </div>
      </div>
    </div>
  )
}


