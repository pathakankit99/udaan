import {useState, useEffect} from "react"
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import Link from 'next/link'
function Navbar() {
    const [count, setCount] = useState(1)
    const [open, setOpen] = useState(false)
    
    const [open2, setOpen2] = useState(false)
    const visible = { true: "100%", false: "0%" };
    var style2 = {
        opacity: visible[open2],
        height: "100px"
      };
    // console.log(open, count)
    const sidemenu = { true: "translateX(0%)", false: "translateX(-100%)" };
    var style = {
        transform: sidemenu[open],
        minHeight: "100vh"
      };
      useEffect(() => {
        setTimeout(()=>setOpen2(true), 7000)
        if(count%2==0)
        {
            setOpen(true)
        }
        else
        {
            setOpen(false)
        }
    }, [count])
    return (
        <>
            <nav style={style2} className="hidden fixed z-20 w-full brand-background text-white lg:flex justify-between items-center px-24 py-6">
                <div className="flex ">
                    <h1 className="text-3xl uppercase font-bold basic">Udaan Property</h1>
                    <img className="mx-4" width="30px" src="/images/logo/logo.png"/>
                </div>
                <div>
                    <ul className="flex">
                        <li>
                            <Link passHref href="/">
                                <p className="px-4 archer-light pointer-on-hover text-hover py-4">HOME</p>
                            </Link>
                        </li>
                        <li>
                            <Link passHref href="/about-us">
                                <p className="px-4 archer-light pointer-on-hover text-hover py-4">ABOUT US</p>
                            </Link>
                        </li>
                        <li>
                            <Link passHref href="/#contact">
                                <p className="px-4 archer-light pointer-on-hover text-hover py-4">CONTACT US</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav style={style2} className="lg:hidden z-20 text-white px-4 fixed right-0 left-0 top-0 flex items-center justify-between brand-background">
                <div className="flex ">
                    <h1 className="text-3xl uppercase font-bold basic">Udaan Property</h1>
                    <img className="mx-4" width="30px" src="/images/logo/logo.png"/>
                </div>
                <div className="text-white text-4xl z-3 pointer-on-hover"   onClick={()=>{setCount(count+1)  }}>
                    {
                        count%2!==0?(<FaBars/> ):(<MdClose/>)
                    }
                </div>
                <div style={style} className="fixed flex justify-center items-center menu brand-background text-white top-0 bottom-0 right-0 left-0">
                    <ul>
                        <li className="text-3xl archer-light text-hover py-4">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-3xl archer-light text-hover py-4">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="text-3xl archer-light text-hover py-4">
                            <Link href="/#contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;