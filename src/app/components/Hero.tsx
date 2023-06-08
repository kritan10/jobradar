'use client'

import HeroJobCard from './HeroJobCard'
import { IconContext } from 'react-icons'
import { FaGoogle, FaApple, FaMicrosoft, FaAws } from 'react-icons/fa'

function Hero() {
    const heroJobs: JobHeroCard[] = [
        {
            jobCompany: 'Microsoft',
            companyImage: <FaMicrosoft />,
            jobCreated: '2023-06-01',
            jobPost: 'Software Engineer',
            jobDescription:
                'Develop and maintain software applications for Microsoft products.',
        },
        {
            jobCompany: 'Google',
            companyImage: <FaGoogle />,
            jobCreated: '2023-05-28',
            jobPost: 'Data Scientist',
            jobDescription:
                'Analyze and interpret complex data sets to identify trends and patterns.',
        },
        {
            jobCompany: 'Apple',
            companyImage: <FaApple />,
            jobCreated: '2023-05-30',
            jobPost: 'iOS Developer',
            jobDescription:
                "Design and develop innovative iOS applications for Apple's ecosystem.",
        },
        {
            jobCompany: 'Google',
            companyImage: <FaGoogle />,
            jobCreated: '2023-06-03',
            jobPost: 'Hardware Engineer',
            jobDescription:
                "Design and optimize hardware components for Intel's processors and systems.",
        },
        {
            jobCompany: 'Amazon Web Services',
            companyImage: <FaAws />,
            jobCreated: '2023-06-02',
            jobPost: 'Cloud Architect',
            jobDescription:
                'Develop and implement cloud-based solutions for enterprise clients using IBM Cloud services.',
        },
    ]

    return (
        <>
            <main className="w-full h-[max(80vh,500px)] flex items-center justify-center">
                <div>
                    <p className="text-center text-[64px] font-extrabold tablet:text-[52px] phone:text-[28px]">
                        Your Gateway to Success - Find <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
                            Your Dream Career
                        </span>
                    </p>
                    <p className="text-center mt-14 text-xl opacity-70 tablet:text-lg phone:text-xs">
                        Browse 2,464 jobs in Web3 at 741 Web3 Projects
                    </p>
                    <div className="flex items-center justify-center gap-5 mt-10">
                        <button className="rounded-full bg-primary text-neutral px-14 py-5 border-2 border-primary hover:text-primary hover:bg-neutral hover:border-primary transition-colors phone:px-8 phone:py-3 phone:text-xs">
                            Post Job
                        </button>
                        <button className="rounded-full bg-accent text-neutral px-14 py-5 border-2 border-accent hover:text-accent hover:bg-neutral hover:border-accent transition-colors phone:px-8 phone:py-3 phone:text-xs">
                            Find Job
                        </button>
                    </div>
                </div>
            </main>

            <div className="block mx-auto w-full">
                <div className="grid grid-cols-3 gap-10 place-items-center w-max mx-auto md:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1">
                    <IconContext.Provider
                        value={{
                            size: '40px',
                            color: 'white',
                            style: { alignSelf: 'center' },
                        }}
                    >
                        {heroJobs.map((job, index) => {
                            return <HeroJobCard key={index} job={job} />
                        })}
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export default Hero
