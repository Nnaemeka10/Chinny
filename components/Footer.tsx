import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import { Children } from 'react'

const Footer = () => {
  return (
    <footer  id = 'footer' className='flexCenter mb-24 bg-blue-100 pt-10 rounded-lg absolute w-full'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className="flex flex-col items-start justify-center md:flex-row gap-[10%]">
          <Link href="#nav" className = "mb-10">
            <Image src="/logo.png" alt='logo' width={74} height={29}/>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index)=>(
              <FooterColumn title={columns.title} key={index}>
                  <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                    {columns.links.map((link) => (
                      <Link href={link.href} key = {link.key}>{link.label}</Link> 
                    ))}
                  </ul>
              </FooterColumn>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link)=>(
                    <Link href='/'
                    key={link.label}
                    className='flex gap-4 md:flex-col lg:flex-row'
                    >
                      <p className='whitespace-nowrap'>
                        {link.label}:
                      </p>
                      <p className="medium-14 whitespace-nowrap text-blue-10">
                        {link.value}
                      </p>
                    </Link>   
                  ))}
                </FooterColumn>

              </div>

              <div className='flex flex-col gap-5'>

                   <FooterColumn title={SOCIALS.title}>
                    <ul className='regular-14 flex gap-4 text-gray-30'>
                      {SOCIALS.links.map((link)=> (
                        <Link href='/' key={link}>
                          <Image src={link} alt='logo' width={24} height={24} />
                        </Link>
                      ))}
                    </ul>
                   </FooterColumn>
              </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="w-full text-center text-gray-30 text-sm font-semibold"> &copy; 2025 ChiniPhotos | All rights reserved</p>
      </div>

    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='bold-18 whitespace-nowrap'>{title}</h3>
      {children}
    </div>
  )
}

export default Footer