import Link from "next/link"
import {FaInstagram, FaFacebookF, FaYoutube} from "react-icons/fa"
function Footer() {
    return (
        <footer className="p-4 md:px-24">
            <div className="flex flex-wrap justify-center pb-4 md:justify-between items-center brand-color ">
                <div className="w-full md:w-3/12">
                    <ul className="flex justify-center md:justify-start w-full">
                        <li>
                            <Link passHref href="/">
                                <p className="pr-4 archer-light hover:underline pointer-on-hover py-4">HOME</p>
                            </Link>
                        </li>
                        <li>
                            <Link passHref href="/about-us">
                                <p className="pr-4 archer-light hover:underline pointer-on-hover py-4">ABOUT US</p>
                            </Link>
                        </li>
                        <li>
                            <Link passHref href="/gallery">
                                <p className="pr-4 archer-light hover:underline pointer-on-hover py-4">GALLERY</p>
                            </Link>
                        </li>
                        <li>
                            <Link passHref href="/#contact">
                                <p className="pr-4 archer-light hover:underline pointer-on-hover py-4">CONTACT US</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex">
                        <li className="icons">
                            <a href="https://www.instagram.com/udaanproperty/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        </li>
                        <li className="icons">
                            <a href="https://www.facebook.com/profile.php?id=100071358764903" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                        </li>
                        <li className="icons">
                            <a href="https://www.youtube.com/channel/UC13aI041cKwujKXYIauUD1g" target="_blank" rel="noreferrer"><FaYoutube/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="text-center md:text-left brand-color default py-4 text-sm">@2021 Created By <a className="cursive underline" rel="noreferrer" href="https://www.pathakankit.com" target="_blank">Ankit Pathak</a></div>
        </footer>
    );
}

export default Footer;