import {useEffect, useState} from 'react'
import Link from 'next/link'
function Section1() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const visible = { true: "100%", false: "0%" };
    var style = {
        opacity: visible[open],
      };
    var style2 = {
        opacity: visible[open2],
    };
    var style3 = {
        opacity: visible[open3],
    };
    var style4 = {
        opacity: visible[open4],
    };
    var style5 = {
        opacity: visible[open5],
    };
      useEffect(() => {
        setTimeout(()=>setOpen(true), 1000)
        setTimeout(()=>setOpen2(true), 3000)
        setTimeout(()=>setOpen3(true), 4000)
        setTimeout(()=>setOpen4(true), 5000)
        setTimeout(()=>setOpen5(true), 6000)
    }, [])
    return (
        <section className="homepage relative min-height-100 text-center">
            <div className="absolute -z-1  min-height-100 flex flex-col justify-between left-0 right-0">
                <div className="mt-24 flex justify-between">
                    <img style={style2} className="w-4/12 lg:w-3/12 xl:w-2/12" src="/images/design/park1.jpg"/>
                    <img style={style4} className="w-4/12 lg:w-3/12 xl:w-2/12 mt-6 md:p-6 md:mr-36" src="/images/design/kids1.jpg"/>
                </div>
                <div className="flex justify-between">
                    <img style={style3} className="w-4/12 lg:w-3/12 xl:w-2/12 md:p-6 md:ml-36 mb-12" src="/images/design/road1.jpg"/>
                    <img style={style5} className="w-4/12 lg:w-3/12 xl:w-2/12" src="/images/design/park2.jpg"/>
                </div>
            </div>
            <div style={style} className="min-height-100 z-2 center-content">
                <div>
                    <h3 className="brand-color font-bold cursive text-5xl">Utsav Residential</h3>
                    <h3 className="brand-color basic font-extrabold text-5xl uppercase">By Udaan Property</h3>
                    <Link href="/#contact" passHref>
                    <button className="bg-white button-font mt-6 capitalise red-button">
                        Book an appointment
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Section1;