import Image from 'next/image'

function Testimonial({
    testimonial,
    id,
}: {
    testimonial: Testimonial
    id: number
}) {
    const { userName, userImage, jobTitle, keyNote } = testimonial
    return (
        <div
            id={'testimonial' + id}
            className="flex flex-col items-center justify-between w-max mx-auto absolute top-0 left-1/2 transition ease-in-out duration-[1.5s]"
        >
            <div className="h-[72px] w-[72px] relative">
                <Image
                    src={userImage}
                    alt={userName}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    className="rounded-full "
                />
            </div>
            <div className="font-bold text-lg mt-2">{keyNote}</div>
            <div className="opacity-50 max-w-md text-center text-sm mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid repellat corrupti consectetur molestiae, totam alias aut
                sit cupiditate facilis adipisci eos quaerat? Neque ab minus,
                fuga atque quaerat ut sequi?
            </div>
            <div className="h-[1px] w-full bg-black/20 my-8"></div>
            <div className="text-4xl font-bold">{userName}</div>
            <div className="opacity-50 mt-4">{jobTitle}</div>
        </div>
    )
}

export default Testimonial
