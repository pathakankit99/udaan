import Link from 'next/link'
function Section4() {
    return (
        <section className="min-height-100 flex flex-wrap justify-around items-center p-4">
            <div className="w-full md:w-4/12">
                    <p className="cursive text-3xl brand-color">A walk in the park</p>
                    <p className="basic text-6xl pb-8 uppercase brand-color">Lifestyle</p>
                    <p className="w-full md:w-9/12 pb-8 text-xl">Build your house in the lap of the nature, away from pollution of the city for a healthy and longer lifespan.</p>
                    <Link href="/#contact" passHref>
                    <button className="bg-white button-font mt-6 capitalise red-button">
                        Book an appointment
                    </button>
                    </Link>
            </div>
            <div className="w-full md:w-6/12">
                <img className="md:w-11/12 md:m-6" src="/images/design/park3.jpg"/>
                <div className="w-full  flex">
                    <div className="py-4 md:p-4">
                    <img src="/images/design/park4.jpg"/>
                    </div>
                    <div className="py-4 pl-4 md:p-16">
                    <img src="/images/design/swing.jpg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4;