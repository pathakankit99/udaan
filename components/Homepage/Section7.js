import Link from 'next/link'
function Section7() {
    return (
        <section className="relative min-height-70 fade-right flex flex-wrap p-4 justify-end items-center">
            <div className="-z-1 absolute top-0 bottom-0 left-0 right-0 bg-green-500 overflow-hidden">
                <img className="w-full object-cover h-full" src="/images/design/mail.jpg"/>
            </div>
            <div className="w-full md:w-6/12">

            </div>
            <div className="z-2 text-white w-full md:w-4/12 xl:w-3/12">
                <p className="cursive text-3xl ">We love to talk</p>
                <p className="basic text-6xl pb-8 uppercase">Contact Us</p>
                <p className="w-full md:w-9/12 pb-8 text-xl">Discover apartments that enhance your wellbeing. Live a healthy and balanced life with everything you enjoy at your fingertips.</p>
                <Link href="/#contact" passHref>
                    <button className="white-button button-font">Book an appointment</button>
                </Link>
            </div>
        </section>
    );
}

export default Section7;