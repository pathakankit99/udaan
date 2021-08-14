import GoogleMapReact from 'google-map-react';
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import {useState} from 'react'
import axios from 'axios';

function Section11() {

    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(null)
    
    // Config variables
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
    const CLIENT_EMAIL = process.env.NEXT_PUBLIC_SHEET_MAIL;
    const PRIVATE_KEY = process.env.NEXT_PUBLIC_SHEET_KEY;


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
      const handleSubmit=(e)=>{
        e.preventDefault()
        var name = fname + " " + lname
        
    //   console.log(name)
        
        if(name && email && contact)
        {
          const data = {
              phone:contact,
              name,
              email,
              message
         };
          axios.post('/api/contact', data)
              .then(res => {
                setStatus(true)
                setfname("")
                setlname("")
                setMessage("")
                setEmail("")
              })
              .catch( err => {  
                setStatus(false)
              });
        }
    }
    return (
        <section id="contact" className="min-height-100 flex flex-wrap justify-center items-center">
            <div className="p-4 md:px-24 w-full md:w-6/12">
            <p className="cursive text-7xl brand-color pb-8 ">Get in Touch</p>
            
            <div className="pb-4">
                <h5 className="font-bold text-lg pb-4">For Investors</h5>
                <p className="pb-8">Undoubtedly we are expanding. We definitely would require a huge wings to fly high. It would be appropiate if you join us in our journey.
                We promise your expertise will be well greeted. </p>
                <h5 className="font-bold text-lg pb-4">Enquiry at:</h5>
                <div><a href="tel:+918967379419" className="flex items-center"><span  className="mr-2 mb-2 red-icons"><FaPhoneAlt/></span> (+91) 89673 79419, (+91) 93302 73310</a></div>
                <div><a href="mailto:support@udaanproperty.com" className="flex items-center"><span  className="mr-2 mb-2 red-icons"><FaEnvelope/></span>support@udaanproperty.com</a></div>
            </div>
            {/* <button onClick={(e)=>console.log("1")} className="red-button">Add Row</button> */}
            {
                status?(
                    <div className="px-4 py-2 bg-green-200 text-green-700">Message successfully sent!</div>
                ):(<></>)
            }
            {
                status===false?(
                    <div className="px-4 py-2 bg-red-200 text-red-700">Some error occurred!</div>
                ):(<></>)
            }
            <div>
                <div className="w-full md:w-10/12 lg:w-8/12 flex flex-wrap justify-between ">
                    <input required type="text" value={fname} onChange={(e)=>setfname(e.target.value)} className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="First Name*"/>
                    <input required type="text" value={lname} onChange={(e)=>setlname(e.target.value)} className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="Last Name*"/>
                </div>
                <div className="w-full md:w-10/12 lg:w-8/12 flex flex-wrap justify-between ">
                    <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="Email*"/>
                    <input required type="number" value={contact} onChange={(e)=>setContact(e.target.value)} className="placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full md:w-5/12 mr-4" placeholder="Phone Number*"/>
                </div>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full md:w-10/12 lg:w-8/12 placeholder-gray-500 text-black my-4 focus:outline-none pt-4 border-b-2 border-black pr-2 w-full mr-4" rows={5} placeholder="Message"></textarea>
                <button onClick={(e)=>handleSubmit(e)} className="block red-button button-font pointer-on-hover">SUBMIT</button>
            </div>
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