import {FaAmbulance, FaHospitalAlt, FaPlane, FaShoppingCart, FaTrain} from 'react-icons/fa'
import {ImBooks} from "react-icons/im"
function Section10() {
    return (
        <section className="section10  pt-16">
            <p className=" p-4 md:px-24 cursive text-6xl brand-color">Utsav Residential</p>
            <p className=" p-4 md:px-24 basic text-7xl uppercase brand-color">Plan</p>
            <img className=" p-4 md:px-24 w-full py-4" src="/images/utsav/utsav2.jpg"/>
            <div className=" p-4 md:px-24  bg-red-100 flex flex-wrap justify-around items-start">
                <div className="w-full md:w-3/12 p-4 pb-16">
                    <div   className="icons mb-4">
                        <FaTrain/>
                    </div>
                    <p className="pb-2 brand-color text-3xl uppercase archer-bold">Railway Station </p>
                    <p className="text-lg plantin-light">
                    Utsav Residential is located just <b>7Km</b> from New Jalpaiguri Station.
                    New Jalpaiguri Junction Railway Station is a railway station under the Katihar railway division of Northeast Frontier Railway. It is the largest and busiest Railway station of Northeast India.
                    <br/><br/>
                    The NJP Railway Station serves as the entry point to Sikkim, Nepal, Bhutan, Bangladesh and the seven Northeastern States of Assam, Arunachal Pradesh, Nagaland, Manipur, Tripura and Meghalaya).
                    </p>
                </div>
                <div className="w-full md:w-3/12 p-4 pb-16">
                    <div   className="icons mb-4">
                        <FaPlane/>
                    </div>
                    <p className="pb-2 brand-color text-3xl uppercase archer-bold">Airport</p>
                    <p className="text-lg plantin-light">
                    Utsav Residential is located just <b>5Km</b> from Bagdogra Airport
                    Bagdogra Airport is an international airport located at the western part of the city of siliguri.
                    It is operated as a civil enclave at AFS Bagdogra of the Indian Air Force. 
                    <br/><br/>
                    It is also the gateway airport to the hill stations of Darjeeling, Gangtok, Kurseong, Kalimpong, Mirik and other parts of North Bengal.
                    </p>
                </div>
                <div className="w-full md:w-3/12 p-4 pb-16">
                    <div   className="icons mb-4">
                        <ImBooks/>
                    </div>
                    <p className="pb-2 brand-color text-3xl uppercase archer-bold">NBU</p>
                    <p className="text-lg plantin-light">
                    Utsav Residential is located just <b>3Km</b> from North Bengal University.
                    North Bengal University (NBU) is a public research university in Siliguri, Darjeeling District.
                     NBU offers degrees in undergraduate, post-graduate, M. Phil and doctorate programs.
                    </p>
                </div>
                <div className="w-full md:w-3/12 p-4 pb-16">
                    <div   className="icons mb-4">
                        <FaAmbulance/>
                    </div>
                    <p className="pb-2 brand-color text-3xl uppercase archer-bold">Medical College</p>
                    <p className="text-lg plantin-light">
                    Utsav Residential is located just <b>4Km</b> from North Bengal Medical College & University.
                    North Bengal Medical College & University (NBMC&H) is the largest and the sole healthcare facility in North Bengal region of the West Bengal. 
                    <br/><br/>
                    It is one of the twelve govt medical colleges in West Bengal and the largest in terms of area and patient influx. 
                    The hospital has a bed strength of 862 and caters to a large population of 15 Million in North Bengal.
                    </p>
                </div>
                <div className="w-full md:w-3/12 p-4 pb-16">
                    <div   className="icons mb-4">
                        <FaShoppingCart/>
                    </div>
                    <p className="pb-2 brand-color text-3xl uppercase archer-bold">City Center Mall </p>
                    <p className="text-lg plantin-light">
                    Utsav Residential is located just <b>5Km</b> from City Center Mall.
                    City Center Mall is one of the primary entertainment and shopping center of North Bengal. With a pleothra of entertainment options from 
                    Various shopping outlets like shopper's stop, reliance digital, turtle, being human, louis philipe etc to 
                    cinema house like INOX to restaurant and dining options like KFC, Subway, Pizza Hut, domios to bars and children play area, City center has it all.
                    </p>
                </div>
                <div className="w-full md:w-3/12 p-4 pb-16">
                    <div   className="icons mb-4">
                        <FaHospitalAlt/>
                    </div>
                    <p className="pb-2 brand-color text-3xl uppercase archer-bold">Neotia Hospital</p>
                    <p className="text-lg plantin-light">
                    Neotia is one of the most prominent super speciality hospital in all of North Bengal.
                    With great infrastructure and superior healthcare facilities as its hallmark, It offers a comprehensive medical care at a competent price.
                    </p>
                </div>
            </div>
            
        </section>
    );
}

export default Section10;