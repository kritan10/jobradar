import { FaArrowRight } from 'react-icons/fa'
import FooterItem from './FooterItem'

function Footer() {
    const footerItems = [
        {
            title: 'Company',
            items: ['About Us', 'Careers', 'Blog', 'Pricing'],
        },
        {
            title: 'Product',
            items: [
                'Invoicing Platform',
                'Accounting Platform',
                'Create Proposal',
                'Contracts',
            ],
        },
        {
            title: 'Resources',
            items: [
                'Proposal Template',
                'Invoice Template',
                'Tutorial',
                'Write a contract',
            ],
        },
    ]
    return (
        <footer className="bg-[#1B1C31] pt-20 text-neutral">
            <div>
                <p className="text-center capitalize text-5xl font-semibold leading-[72px]">
                    Never Want to miss <br /> Any{' '}
                    <span className="text-primary">job news</span>?
                </p>
                <button className="group block w-max mx-auto mt-10 bg-primary text-sm text-neutral px-10 py-4 rounded-md hover:bg-opacity-70 transition-colors">
                    Join the waitlist{' '}
                    <span>
                        <FaArrowRight className="inline-block group-hover:translate-x-2 ml-2 transition-transform duration-700" />
                    </span>
                </button>
            </div>
            <div className="flex items-between justify-between mt-32 px-24 py-24 border-y-2 border-y-neutral/50">
                <div>
                    <h4 className="uppercase font-bold my-4">About JobRadar</h4>
                    <p className="max-w-md opacity-60">
                        Incididunt qui deserunt consequat cupidatat aliqua. Aute
                        dolore mollit do nostrud excepteur do do in occaecat.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5 place-items-center">
                    {footerItems.map((item, index) => {
                        return (
                            <FooterItem
                                key={index}
                                title={item.title}
                                items={item.items}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="py-12 px-24 text-sm opacity-50">
                2023 JobRadar. All rights reserved. Privacy Policy. Terms of
                Services
            </div>
        </footer>
    )
}

export default Footer
