import Link from "next/link";
import { JobOffer } from "../_lib/JobOffer";
import { Tag } from "./Tag";

export function Card({ offer }: { offer: JobOffer }) {
  const { job_title, organization, description, location, in_person, tags, logo_link, id } = offer;
  return (
    <div className="flex items-start space-x-7 border border-gray-300 m-2 rounded-3xl px-8 py-4">
      <img className="h-12 w-12 mt-2 object-contain" src={logo_link} alt='Company logo'></img>
      <div>
        <h3 className="text-xl font-semibold text-slate-900"><Link href={`offer/${id}`}>{job_title}</Link></h3>
        <p className="text-gray-500 mt-1">{organization} &bull; {location}</p>
        <p className="mt-2 mb-2">{description}</p>
        {in_person ? (
          <span className="mb-2 mx-1 text-xs font-semibold inline-block bg-emerald-50 text-emerald-400 py-2 px-3 rounded-full">In Person</span>
        ) : (
          <span className="mb-2 mx-1 text-xs font-semibold inline-block bg-orange-50 text-orange-400 py-2 px-3 rounded-full">Remote/Hybrid</span>
        )}
        <div className="mb-2 inline-block h-7 ml-2 border-l border-gray-200">&nbsp;</div>
        {tags.map((tag) => {
          return <Tag key={`${id}.${tag}`} name={tag} />;
        })}
      </div>
    </div>
  )
}

