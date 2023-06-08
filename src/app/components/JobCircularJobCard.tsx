import { FaArrowRight } from 'react-icons/fa'

function JobCircularJobCard({ job }: { job: JobCirculerJobCard }) {
    const {
        jobCompany,
        companyLocation,
        companyImage,
        jobCreated,
        jobPost,
        jobDescription,
        jobCategory,
        jobSalary,
        jobType,
    } = job

    return (
        <div className="border-2 px-5 py-8 rounded-xl">
            <div className="flex items-stretch gap-5">
                {companyImage}
                <div className="flex flex-col justify-between">
                    <p className="font-bold text-lg">{jobCompany}</p>
                    <p className="opacity-50 text-sm">{companyLocation}</p>
                </div>
            </div>

            <div className="w-[380px] my-7">
                <p className="mb-3 text-xl font-bold">{jobPost}</p>
                <p className="mb-6 text-sm opacity-60">
                    {jobType} · {jobCategory}
                </p>
                <p className="opacity-60 min-h-[90px] text-sm leading-7">
                    {jobDescription}
                </p>
            </div>
            <div className="flex items-end justify-between px-1">
                <div>
                    <span className="font-bold text-lg inline-block">
                        ${jobSalary}
                    </span>
                    <span className="text-sm opacity-50 inline-block align-middle">
                        /month
                    </span>
                </div>
                <button className="text-blue-700 hover:text-opacity-50 transition">
                    <span className="font-semibold mr-3">Read More</span>
                    <FaArrowRight size={13} className="inline-block" />
                </button>
            </div>
        </div>
    )
}

export default JobCircularJobCard
