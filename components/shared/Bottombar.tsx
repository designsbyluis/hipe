"use client"

import { sidebarLinks } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Bottombar() {
    const pathname = usePathname();
    const bottombarLinks = sidebarLinks.filter(link => link.label !== "Activity" && link.label !== "Messages");

    const { userId } = useAuth();
    if (!userId) return null;

    return (
      <section className='bottombar'>
        <div className='bottombar_container'>
          {bottombarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`bottombar_link ${isActive && 'bg-primary-500'}`}>
                                <Image 
                                    src={isActive ? `${link.imgURL.replace('.svg', '-white.svg')}` : link.imgURL}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                />
                            <p className={`text-subtle-medium text-dark-1 max-sm:hidden ${isActive ? 'text-white' : ''}`}>{link.label.split(/\s+./)[0]}</p>
                        </Link>
                    )}
                 )}
            </div>
        </section>
    )
}

export default Bottombar;