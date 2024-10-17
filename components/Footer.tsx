import React from 'react'
import Image from 'next/image'
import assets from '../public/assets/assets'


const Footer = () => {
  return (
    <div className='content-div bg-[#000000] flex justify-center items-center 2xs:p-[20px] my-[70px]'>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-[24px] lg:p-[70px] xl:py-[70px] 2xs:p-[20px] rounded-[14px] border-2 border-[#890116] ">
         {/* column 1 */}
            <div className="col-span-1 flex flex-col gap-[12px] lg:p-[40px] 2xs:p-0 tablet:px-[70px] space-y-3 ">
                <div className="flex justify-center lg:justify-start ">
                    <Image className='' src={assets.navLogo} alt="" />
                </div>
                <div className="">
                    <p className='text-white'>Join our newsletter to stay up to date on features and releases.</p>
                </div>
                <div className="sm:flex">
                    <input type="text" placeholder='Enter your email' className='focus:outline-[#890116] focus:border-none placeholder:font-custom h-[37px] w-[75%] mr-[5px] xs:w-[58%] tablet:w-[75%] 2xs:w-full'/>
                    <button className="py-[7px] px-[13px] bg-[#890116] text-white">Subscribe</button>
                </div>
                <div className="text-white">
                    <p className='text-balance tablet:whitespace-normal 2xs:whitespace-normal'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
            </div>

            <div className="col-span-1 grid lg:grid-cols-3 tablet:grid-cols-3 xs:grid-cols-2 2xs:grid-cols-1 justify-items-center gap-[40px]  ">
                <div className="col-span-1 ">
                    <h3 className='text-white my-4'>Column One</h3>
                    <ul>
                        <li className='text-white my-2'><a href="">Link One</a></li>
                        <li className='text-white my-2'><a href="">Link Two</a></li>
                        <li className='text-white my-2'><a href="">Link Three</a></li>
                        <li className='text-white my-2'><a href="">Link Four</a></li>
                        <li className='text-white my-2'><a href="">Link Five</a></li>
                    </ul>
                </div>
                <div className="col-span-1 ">
                    <h3 className='text-white my-4'>Column Two</h3>
                    <ul>
                        <li className='text-white my-2'><a href="">Link Six</a></li>
                        <li className='text-white my-2'><a href="">Link Seven</a></li>
                        <li className='text-white my-2'><a href="">Link Eight</a></li>
                        <li className='text-white my-2'><a href="">Link Nine</a></li>
                        <li className='text-white my-2'><a href="">Link Ten</a></li>
                    </ul>
                </div>
             
                <div className="col-span-1 items-start flex-1">
                    <h3 className='text-white my-4'>Follow Us</h3>
                    <ul className=''>
                        <li className='my-2'>
                            <p><a href=""><Image className='inline mr-3' src={assets.footerFacebook} alt=''/> <span className='text-white'>Facebook</span></a></p>
                        </li>
                        <li className='my-2'>
                           <p> <a href=""><Image className='inline mr-3'  src={assets.footerInsta} alt=''/> <span className='text-white'>Instagram</span></a></p>
                        </li>
                        <li className='my-2'>
                           <p> <a href=""><Image className='inline mr-3' src={assets.footerTwitter} alt=''/> <span className='text-white'>&nbsp;&nbsp;Twitter</span></a></p>
                        </li>
                        <li className='my-2'>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer