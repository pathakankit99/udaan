function Section1() {
    return (
        <section className="relative min-height-100 text-center">
            <div className="absolute -z-1  min-height-100 flex flex-col justify-between left-0 right-0">
                <div className="mt-24 flex justify-between">
                    <img className="w-4/12 lg:w-3/12 xl:w-2/12" src="/images/design/park1.jpg"/>
                    <img className="w-4/12 lg:w-3/12 xl:w-2/12 mt-6 md:p-6 md:mr-36" src="/images/design/kids1.jpg"/>
                </div>
                <div className="flex justify-between">
                    <img className="w-4/12 lg:w-3/12 xl:w-2/12 md:p-6 md:ml-36 mb-12" src="/images/design/road1.jpg"/>
                    <img className="w-4/12 lg:w-3/12 xl:w-2/12" src="/images/design/park2.jpg"/>
                </div>
            </div>
            <div className="min-height-100 z-2 center-content">
                <div>
                    <h3 className="brand-color font-bold cursive text-5xl">Utsav Residential</h3>
                    <h3 className="brand-color basic font-extrabold text-5xl">By Udaan Property</h3>
                    <button className="bg-white button-font mt-6 capitalise red-button">
                        Book an appointment
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Section1;