import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <div className="flex items-center gap-4">
            <Image 
              src="/assets/logo.svg"
              alt="logo"
              width={45}
              height={45}
            />
            <p className="text-heading3-bold text-dark-1 max-xs:hidden">HIPE</p>
          </div>
        </Link>

        <p className='text-sm text-gray-400'>© 2023 All Rights Reserved | 
        <Link href="/terms">
          <span className="text-sm cursor-pointer hover:text-gray-600">Terms</span>
        </Link>
      </p>
      </div>
    </footer>
  )
}

export default Footer