import Link from 'next/link'
function Section2() {
    return (
        <section className="brand-background text-white min-height-50 flex flex-wrap p-4 justify-center items-center">
            <div className="w-full md:w-6/12 md:text-center">
                <p className="cursive text-5xl pb-3">Live Well</p>
                <p className="basic text-5xl uppercase">At Utsab <br/> Residential</p>
            </div>
            <div className="w-full md:w-6/12">
                <p className="w-full md:w-5/12 pb-8 text-xl">Udaan Property came up with yet another splendid residential project called "UTSAB RESIDENTIAL".</p>
                <Link href="/#contact" passHref>
                    <button className="white-button button-font">Book an appointment</button>
                </Link>
            </div>
        </section>
    );
}

export default Section2;