
export interface JobOffer {
    id: number,
    job_title: string,
    organization: string,
    location: string,
    description: string,
    in_person: boolean,
    logo_link: string,
    tags: string[],
    required_skills: string[],
    responsibilities: string[],
    qualities_wanted: string[][],
    onboarding_location : string,
    posted_on: string,
    deadline: string,
    start_date: string,
    end_date: string,
};