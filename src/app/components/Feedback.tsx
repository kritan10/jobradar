'use client'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Testimonial from './Testimonial'

function Feedback() {
    const testimonials = [
        {
            userName: 'Ryan Garcia',
            userImage: '/profile1.jpg',
            jobTitle: ' Product Manager',
            keyNote: 'Great Work.',
        },
        {
            userName: 'Karen Phyllis',
            userImage: '/profile2.jpg',
            jobTitle: ' Senior Developer',
            keyNote: 'Exactly what I needed!',
        },
        {
            userName: 'Jim Bartney',
            userImage: '/profile3.jpg',
            jobTitle: 'Accountant',
            keyNote: 'Fantastic!',
        },
    ]

    var array: HTMLElement[] = []

    if (typeof window !== 'undefined') {
        const ref1 = document.getElementById('testimonial0')
        const ref2 = document.getElementById('testimonial1')
        const ref3 = document.getElementById('testimonial2')

        array = [ref1!, ref2!, ref3!]
    }
    //current slide to be displayed
    let current = Math.floor(Math.random() * array.length)
    changeDiv()

    function nextIndex() {
        console.log(array)
        if (current < array.length - 1) {
            current++
        } else {
            current = 0
        }
        changeDiv()
    }

    function prevIndex() {
        if (current === 0) {
            current = array.length - 1
        } else {
            current--
        }
        changeDiv()
    }

    /*
        changeDiv function iterates through all items and does the following.
          -initializes every slide with "nextSlide" class
          -changes first slide to "currentSlide" class
          -changes previous slide to with "prevSlide" class
          -refer to styles for these classes

        */
    function changeDiv() {
        array.forEach((element, index) => {
            element.classList.add('nextSlide')
            element.classList.remove('currentSlide')
            element.classList.remove('prevSlide')

            if (index === current) {
                element.classList.add('currentSlide')

                element.classList.remove('nextSlide')
                element.classList.remove('prevSlide')
            }

            if (
                index === current - 1 ||
                (index === array.length - 1 && current === 0)
            ) {
                element.classList.add('prevSlide')

                element.classList.remove('currentSlide')
                element.classList.remove('nextSlide')
            }
        })
    }

    return (
        <section className="min-h-[max(80vh,500px)] mt-52">
            <h3 className="text-center uppercase text-primary font-bold text-xl">
                What they say
            </h3>
            <h2 className="capitalize text-center text-5xl font-bold mt-4">
                Kind words from our users
            </h2>
            <p className="opacity-50 text-center text-xl mt-8">
                Here are some testimonials
            </p>
            <div className="block relative min-h-[60vh] w-full mt-20">
                {testimonials.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        id={index}
                        testimonial={testimonial}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center gap-5 w-max mx-auto mb-40">
                <button
                    onClick={prevIndex}
                    className="p-3 rounded-full bg-accent hover:opacity-70 transition-opacity"
                >
                    <FaAngleLeft fill="white" size={20} />
                </button>
                <button
                    onClick={nextIndex}
                    className="p-3 rounded-full bg-accent hover:opacity-70 transition-opacity"
                >
                    <FaAngleRight fill="white" size={20} />
                </button>
            </div>
        </section>
    )
}

export default Feedback
