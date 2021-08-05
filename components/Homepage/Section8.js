import Link from 'next/link'
function Section8() {
    return (
        <section id="location" className="homepage min-height-100 flex flex-wrap justify-between items-center p-4 md:px-24">
            <div className="w-full md:w-4/12 py-4">
                    <p className="cursive text-3xl brand-color">Location of</p>
                    <p className="basic text-6xl pb-8 uppercase brand-color">Utsav Residential</p>
                    <p className="w-full pb-8 text-2xl font-bold brand-color">
                        Utsav Residential prime location and public transport options keep you connected to the 
                        people and places that matter to you - now and into the future
                    </p>
                    <p className="w-full md:w-9/12 pb-8 text-lg">
                        Utsav Residential has road, rail and air transort corridors. The major transportation facilities available include NJP Railway Station, Siliguri Bus Stand and Bagdogra International Airport.
                    </p>
                    <Link href="/#map" passHref>
                    <button className="bg-white button-font mt-6 capitalise red-button">
                        Check the map
                    </button>
                    </Link>
            </div>
            <div className="w-full md:w-4/12">
                <img className="w-full md:w-10/12"  src="/images/design/airport.jpg"/>
            </div>
        </section>
    );
}

export default Section8;