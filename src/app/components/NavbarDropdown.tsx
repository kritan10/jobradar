'use client'
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

function NavbarDropdown({
    buttonTitle,
    dropdownItems,
}: {
    buttonTitle: string
    dropdownItems: string[]
}) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    return (
        <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer "
        >
            <button className="hover:font-semibold transition-[font]">
                {buttonTitle} <FaAngleDown className="inline-block" />
            </button>
            <div
                onMouseOver={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className={showDropdown ? 'relative' : 'hidden'}
            >
                <div
                    className={`${
                        showDropdown
                            ? 'animate-fadeIn absolute'
                            : 'animate-fadeOut hidden'
                    } mt-4 z-10 shadow-lg shadow-black/20 rounded-md ring-1 ring-black ring-opacity-10 right-0 origin-top-right w-48 py-1 font-light`}
                >
                    {dropdownItems.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className="block w-full px-4 py-2 hover:bg-black/5 text-right text-sm"
                            >
                                {item}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavbarDropdown
