'use client'
import { IconContext } from 'react-icons'
import JobCircularJobCard from './JobCircularJobCard'
import { FaGoogle, FaApple, FaMicrosoft, FaAws } from 'react-icons/fa'

function JobCircular() {
    const jobs: JobCirculerJobCard[] = [
        {
            jobCompany: 'Apple',
            companyImage: <FaApple />,
            companyLocation: 'San Francisco, CA',
            jobCreated: '2023-06-01',
            jobPost: 'Senior Sales Executive',
            jobDescription:
                'We are seeking an experienced Sales Executive to drive our business growth and expand our client base.',
            jobCategory: 'Sales',
            jobType: 'Full-Time',
            jobSalary: 7000,
        },
        {
            jobCompany: 'Google',
            companyImage: <FaGoogle />,
            companyLocation: 'New York, NY',
            jobCreated: '2023-05-29',
            jobPost: 'Digital Marketing Specialist',
            jobDescription:
                'We are looking for a skilled Digital Marketing Specialist to develop and implement effective marketing strategies.',
            jobCategory: 'Marketing',
            jobType: 'Part-Time',
            jobSalary: 5000,
        },
        {
            jobCompany: 'Amazon Web Services',
            companyImage: <FaAws />,
            companyLocation: 'Seattle, WA',
            jobCreated: '2023-06-03',
            jobPost: 'Software Engineer',
            jobDescription:
                'We are seeking talented Software Engineers to join our innovative team and contribute to cutting-edge software solutions.',
            jobCategory: 'Technology',
            jobType: 'Full-Time',
            jobSalary: 8000,
        },
        {
            jobCompany: 'Microsoft',
            companyImage: <FaMicrosoft />,
            companyLocation: 'Austin, TX',
            jobCreated: '2023-06-05',
            jobPost: 'Sales Representative',
            jobDescription:
                'We are hiring motivated Sales Representatives to promote our technology products and generate new business opportunities.',
            jobCategory: 'Sales',
            jobType: 'Part-Time',
            jobSalary: 4000,
        },
        {
            jobCompany: 'Apple',
            companyImage: <FaApple />,
            companyLocation: 'Chicago, IL',
            jobCreated: '2023-06-02',
            jobPost: 'Marketing Coordinator',
            jobDescription:
                'We are looking for a highly organized Marketing Coordinator to support our marketing team and execute marketing campaigns.',
            jobCategory: 'Marketing',
            jobType: 'Intern',
            jobSalary: 3000,
        },
        {
            jobCompany: 'Microsoft',
            companyImage: <FaMicrosoft />,
            companyLocation: 'Los Angeles, CA',
            jobCreated: '2023-06-06',
            jobPost: 'Full Stack Developer',
            jobDescription:
                'We are seeking a skilled Full Stack Developer to build scalable web applications and contribute to our growing tech startup.',
            jobCategory: 'Technology',
            jobType: 'Full-Time',
            jobSalary: 9000,
        },
    ]

    return (
        <section>
            <h2 className="text-center text-[52px] font-bold">
                All Job Circuler
            </h2>
            <div className="flex items-center justify-center gap-2 my-10">
                <button className="bg-primary text-neutral border-primary border-2 rounded-md font-semibold px-10 py-4">
                    All Jobs
                </button>
                <button className="border-2 rounded-md font-semibold px-10 py-4">
                    Technology
                </button>
                <button className="border-2 rounded-md font-semibold px-10 py-4">
                    Transportation
                </button>
                <button className="border-2 rounded-md font-semibold px-10 py-4">
                    Marketing
                </button>
                <button className="border-2 rounded-md font-semibold px-10 py-4">
                    Sales
                </button>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-6 w-max mx-auto">
                <IconContext.Provider
                    value={{
                        size: '44px',
                        style: { alignSelf: 'center' },
                    }}
                >
                    {jobs.map((job, index) => {
                        return <JobCircularJobCard key={index} job={job} />
                    })}
                </IconContext.Provider>
            </div>
        </section>
    )
}

export default JobCircular
