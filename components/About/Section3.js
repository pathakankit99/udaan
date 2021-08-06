import {FaClipboardCheck,} from 'react-icons/fa'
import {RiAccountPinCircleFill} from 'react-icons/ri'
import {HiUserGroup,HiLightBulb,HiCubeTransparent} from 'react-icons/hi'
function Section3() {
    return (
        <section className="about p-4 md:py-16 md:px-24 bg-yellow-100 flex justify-around items-start flex-wrap">
            <div className="w-full md:w-1/3 pb-16 pr-4">
                <div className="icons"><FaClipboardCheck/></div>
                <p className="brand-color text-4xl archer-light pb-4">Quality</p>
                <p className="md:pr-12">Focus on achieving the best results by following set processes and constantly improving upon them.</p>
            </div>
            <div className="w-full md:w-1/3 pb-16 pr-4">
                <div className="icons"><RiAccountPinCircleFill/></div>
                <p className="brand-color text-4xl archer-light pb-4">Customer Centricity</p>
                <p className="md:pr-12">Position the customer at the center of all that we do by cmmitting to enhance their quality of life.</p>
            </div>
            <div className="w-full md:w-1/3 pb-16 pr-4">
                <div className="icons"><HiUserGroup/></div>
                <p className="brand-color text-4xl archer-light pb-4">Teamwork</p>
                <p className="md:pr-12">A diverse, diligent and qualified workforce, driven by team spirit, represents our abiding strength to co-create a positive, bright and forward-looking future.</p>
            </div>
            <div className="w-full md:w-1/3 pb-16 pr-4">
                <div className="icons"><HiLightBulb/></div>
                <p className="brand-color text-4xl archer-light pb-4">Passion for innovation</p>
                <p className="md:pr-12">Inculcate a drive to constantly improve existing standards to achieve excellence.</p>
            </div>
            <div className="w-full md:w-1/3 pb-16 pr-4">
                <div className="icons"><HiCubeTransparent/></div>
                <p className="brand-color text-4xl archer-light pb-4">Integrity and Transparency</p>
                <p className="md:pr-12">Constantly act with honesty, fairness, forthrightness and accountability.</p>
            </div>
        </section>
    );
}

export default Section3;