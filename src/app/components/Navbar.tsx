import { FaAngleDown } from 'react-icons/fa'

function Navbar() {
    return (
        <div className="flex justify-between items-center py-8 tablet:hidden">
            <div className="min-w-[300px] text-center text-xl font-extrabold md:min-w-fit ">
                JobRadar
            </div>
            <div className="flex justify-between items-center gap-6 md:gap-2">
                <a className="mx-7 font-semibold cursor-pointer">Home</a>
                <a className="cursor-pointer hover:font-semibold transition-all">
                    Salaries <FaAngleDown className="inline-block" />
                </a>
                <a className="cursor-pointer hover:font-semibold transition-all">
                    Internships <FaAngleDown className="inline-block" />
                </a>
                <a className="cursor-pointer hover:font-semibold transition-all">
                    Top Jobs <FaAngleDown className="inline-block" />
                </a>
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
