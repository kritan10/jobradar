import { FaAngleDown } from 'react-icons/fa'
import NavbarDropdown from './NavbarDropdown'

function Navbar() {
    return (
        <div className="flex justify-between items-center py-8 tablet:hidden">
            <div className="min-w-[300px] text-center text-xl font-extrabold md:min-w-fit ">
                JobRadar
            </div>
            <div className="flex justify-between items-center gap-6 md:gap-2">
                <button className="mx-7 font-semibold cursor-pointer">
                    Home
                </button>
                <NavbarDropdown
                    buttonTitle="Salaries"
                    dropdownItems={['Entry-level', 'Mid-level']}
                />
                <NavbarDropdown
                    buttonTitle="Internships"
                    dropdownItems={[
                        'Paid Internship',
                        'Voluntary Internship',
                        'Remote Internship',
                    ]}
                />
                <NavbarDropdown
                    buttonTitle="Top Jobs"
                    dropdownItems={['Entry-level', 'Mid-level']}
                />
            </div>

            <div className="max-w-[400px]">
                <button className="bg-neutral px-8 py-4 mx-4 text-sm hover:bg-opacity-50 transition-colors md:mx-2 md:px-4 md:py-2">
                    Sign In
                </button>
                <button className="bg-primary text-neutral px-8 py-4 mx-4 text-sm hover:bg-opacity-50 transition-colors md:mx-2 md:px-4 md:py-2">
                    Start Free
                </button>
            </div>
        </div>
    )
}

export default Navbar
