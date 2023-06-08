'use client'

import Image from 'next/image'
import { IconContext } from 'react-icons'
import { MdDescription, MdHandshake, MdSupportAgent } from 'react-icons/md'

function Features() {
    const features: { featureTitle: string; featureImage: JSX.Element }[] = [
        {
            featureTitle: 'Resume Assessments',
            featureImage: <MdDescription />,
        },
        {
            featureTitle: 'Job Fit Scoring',
            featureImage: <MdHandshake />,
        },
        {
            featureTitle: 'Top-Notch Help',
            featureImage: <MdSupportAgent />,
        },
    ]

    return (
        <>
            <section className="flex flex-col items-center justify-center my-20 h-[max(80vh,700px)]">
                <p className="text-primary font-semibold text-2xl tablet:text-lg">
                    Build your future with us
                </p>
                <h2 className="capitalize my-5 text-[54px] mt-10 tablet:text-[44px]">
                    how jobradar works
                </h2>
                <div className="flex items-center justify-between mt-14 gap-16 phone:flex-col">
                    <IconContext.Provider
                        value={{
                            size: '44px',
                            color: 'rgb(20,83,45)',
                            style: { alignSelf: 'center' },
                        }}
                    >
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center"
                                >
                                    {feature.featureImage}
                                    <p className="text-green-900 font-semibold my-4">
                                        {feature.featureTitle}
                                    </p>
                                    <p className="max-w-[250px] text-sm text-center opacity-50">
                                        Sunt nostrud nulla incididunt excepteur
                                        minim culpa sit consequat.
                                    </p>
                                </div>
                            )
                        })}
                    </IconContext.Provider>
                </div>
            </section>

            <div className="h-[max(80vh,700px)]">
                <section className="flex items-stretch justify-center gap-40 ">
                    <div>
                        <Image
                            alt=""
                            src={'/features_image.png'}
                            height={540}
                            width={540}
                        />
                    </div>
                    <div className="flex flex-col justify-between items-start py-10">
                        <h3 className="text-primary uppercase font-bold text-xl">
                            Our Feature
                        </h3>
                        <p className="text-[48px] capitalize font-semibold leading-[56px]">
                            get matched the most <br /> valuable jobs, just drop{' '}
                            <br /> your CV at staffing solutions
                        </p>
                        <p className="text-xl">
                            In the subject line of email, writer your name, the
                            description of the <br />
                            position you want to apply
                        </p>
                        <button className="bg-primary text-neutral px-8 py-4 text-sm rounded-md border-2 border-primary hover:bg-neutral hover:text-primary transition-colors">
                            Get started
                        </button>
                    </div>
                </section>
            </div>

            <div className="h-[max(30vh,400px)]">
                <section className="block mx-auto max-w-[70vw]">
                    <div className="border-2 rounded-xl flex items-stretch justify-between py-6 pl-10 pr-32">
                        <h2 className="w-min text-[48px] font-bold leading-[55px]">
                            Our Top Successes
                        </h2>
                        <div className="flex flex-col justify-between py-4">
                            <p className="text-[34px] font-bold ">47,128</p>
                            <p className="text-sm opacity-50">Jobs Added</p>
                        </div>
                        <div className="flex flex-col justify-between py-4">
                            <p className="text-[34px] font-bold ">893</p>
                            <p className="text-sm opacity-50">Active Resume</p>
                        </div>
                        <div className="flex flex-col justify-between py-4">
                            <p className="text-[34px] font-bold ">22,647</p>
                            <p className="text-sm opacity-50">
                                Positions Matched
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Features
