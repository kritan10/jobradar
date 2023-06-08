'use client'

import { IconContext } from 'react-icons'
import JobCircularJobCard from './JobCircularJobCard'
import { useState } from 'react'
import jobs from './job_circular_data'

function JobCircular() {
    const [jobCategory, setJobCategory] = useState<string>('All Jobs')
    const jobCategories: string[] = [
        'All Jobs',
        'Technology',
        'Transportation',
        'Sales',
        'Marketing',
    ]
    var filteredJobs: JobCirculerJobCard[] = []
    if (jobCategory === 'All Jobs') {
        filteredJobs = jobs.slice(0, 6)
    } else {
        filteredJobs = jobs.filter((job) => job.jobCategory === jobCategory)
    }

    return (
        <section>
            <h2 className="text-center text-[52px] font-bold">
                All Job Circuler
            </h2>
            <div className="flex items-center justify-center gap-2 my-10">
                {jobCategories.map((category, index) => {
                    return (
                        <button
                            key={index}
                            className={`border-2 rounded-md font-semibold px-10 py-4 transition-colors ${
                                jobCategory === category
                                    ? 'bg-primary text-neutral border-primary border-2'
                                    : ''
                            }`}
                            onClick={() => setJobCategory(category)}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>
            <div className="grid grid-cols-3 place-items-center gap-6 w-max mx-auto">
                <IconContext.Provider
                    value={{
                        size: '44px',
                        style: { alignSelf: 'center' },
                    }}
                >
                    {filteredJobs.map((job, index) => {
                        const date = new Date(Date.now())
                        const seconds = date.getSeconds()
                        const myKey = job.jobCategory + index + seconds
                        return <JobCircularJobCard key={myKey} job={job} />
                    })}
                </IconContext.Provider>
            </div>
        </section>
    )
}

export default JobCircular
