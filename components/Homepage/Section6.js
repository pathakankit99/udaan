import {GiElectric, GiShield, GiTap, GiTennisRacket,GiDefensiveWall} from "react-icons/gi"
import {ImRoad} from "react-icons/im"
function Section6() {
    return (
        <section className="homepage min-height-100 flex flex-wrap justify-between items-center p-4 md:px-24">
            <div className="w-full md:w-4/12 order-2">
                    <p className="cursive text-3xl brand-color">Live in comfort</p>
                    <p className="basic text-6xl pb-8 uppercase brand-color">Amenities</p>
                    <p className="w-full md:w-9/12 pb-8 text-xl">
                        At Utsav Residential, We want our clients to have access to all possible essential amenities, so we took it upon ourselves to provide you with these set of amenities:
                    </p>
                    <div className="my-3 flex items-center">
                        <span className="icons"><GiElectric/></span>
                        <p>Electricity</p>
                    </div>
                    <hr/>
                    <div className="my-3 flex items-center">
                        <span className="icons"><GiShield/></span>
                        <p>Security</p>
                    </div>
                    <hr/>
                    <div className="my-3 flex items-center">
                        <span className="icons"><GiTap/></span>
                        <p>Water</p>
                    </div>
                    <hr/>
                    <div className="my-3 flex items-center">
                        <span className="icons"><GiTennisRacket/></span>
                        <p>Kids Playground</p>
                    </div>
                    <hr/>
                    <div className="my-3 flex items-center">
                        <span className="icons"><GiDefensiveWall/></span>
                        <p>Boundary</p>
                    </div>
                    <hr/>
                    <div className="my-3 flex items-center">
                        <span className="icons"><ImRoad/></span>
                        <p>Roads</p>
                    </div>
                    <hr/>
                    <button className="mt-6 red-button button-font">Book An Appointment</button>
            </div>
            <div className="w-full md:w-6/12 order-1">
                <img className="md:w-11/12 md:my-6" src="/images/design/road2.jpg"/>
                <div className="w-full  flex">
                    <div className="py-4 md:p-4 md:pl-0">
                    <img src="/images/design/electricity.jpg"/>
                    </div>
                    <div className="py-4 pl-4 md:p-16">
                    <img src="/images/design/water.jpg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section6;