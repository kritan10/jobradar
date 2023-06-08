import Image from 'next/image'

function HeroJobCard({ job }: { job: JobHeroCard }) {
    const { jobCompany, companyImage, jobCreated, jobPost, jobDescription } =
        job
    return (
        <div className="border-2 px-5 py-8 rounded-xl">
            <div className="flex items-stretch gap-5">
                <div className="border-black border-2 rounded-md p-2 bg-black">
                    {companyImage}
                </div>
                <div className="flex flex-col justify-between">
                    <p className="font-bold text-lg">{jobCompany}</p>
                    <p className="opacity-50">{jobCreated}</p>
                </div>
            </div>

            <div className="w-[380px] my-7">
                <p className="mb-5 text-lg font-bold">{jobPost}</p>
                <p className="opacity-60">{jobDescription}...</p>
            </div>
            <button className="px-8 py-4 text-sm border-black border-opacity-50 border-2 rounded-xl hover:bg-accent hover:text-neutral transition-colors">
                Apply Now
            </button>
        </div>
    )
}

export default HeroJobCard
