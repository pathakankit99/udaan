import GoogleMapReact from 'google-map-react';
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import {useState} from 'react'
function Section11() {
    const AnyReactComponent = ({ text }) => 
        <div style={{width:'200px',height:'200px'}} className="relative bg-white p-4 flex justify-center items-center">
            <div>
                <p className="cursive text-xl brand-color">Utsav Residential</p>
                <h3 className="brand-color basic font-extrabold text-xl uppercase">By Udaan Property</h3>
                <a rel="noreferrer" className="text-sm text-center underline" href="https://www.google.com/maps/place/Ranidanga,+West+Bengal/@26.6755338,88.3528552,15z/" target="_blank">View Direction</a>
            </div>
        </div>;
    const defaultProps = {
        center: {
          lat: 26.675285,
          lng: 88.362425
        },
        zoom: 10
      };
    return (
        <section id="contact" className="min-height-100 flex flex-wrap justify-center items-center">
            <div className="p-4 md:px-24 w-full md:w-6/12">
            <p className="cursive text-7xl brand-color pb-8 ">Get in Touch</p>
            
            <div className="pb-4">
                <h5 className="font-bold text-lg pb-4">Enquiry at:</h5>
                <p><a href="tel:+918967379419" className="flex items-center"><div  className="mr-2 mb-2 red-icons"><FaPhoneAlt/></div> (+91) 89673 79419</a></p>
                <p><a href="mailto:support@udaanproperty.com" className="flex items-center"><div  className="mr-2 mb-2 red-icons"><FaEnvelope/></div>support@udaanproperty.com</a></p>
            </div>
            <form>
                <div className="w-full md:w-10/12 lg:w-8/12 flex flex-wrap justify-between ">
                    <input className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="First Name*"/>
                    <input className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="Last Name*"/>
                </div>
                <div className="w-full md:w-10/12 lg:w-8/12 flex flex-wrap justify-between ">
                    <input className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="Email*"/>
                    <input className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="Phone Number*"/>
                </div>
                <textarea className="w-full md:w-10/12 lg:w-8/12 placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full mr-4" rows={5} placeholder="Message"></textarea>
                <input className="block red-button button-font pointer-on-hover" type="submit"/>
            </form>
            </div>
            <div id="map" className="w-full md:w-6/12 bg-red-500">
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA1dN3P6LD7ZO_GO3wpQzU4pLCO6u2DdAY' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
                    <AnyReactComponent
                        lat={26.7}
                        lng={88.3}
                        text="Utsav Residential"
                    />
                    </GoogleMapReact>
                </div>
            </div>
        </section>
    );
}

export default Section11;