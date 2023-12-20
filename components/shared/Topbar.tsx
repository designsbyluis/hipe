import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

async function Topbar() {
    const user = await currentUser();
  
    // Check if the user is not logged in
    if (!user) {
      return null;
    }
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image
                    src="assets/logo.svg"
                    alt="logo"
                    width={34}
                    height={34}
                />
                <p className="text-heading3-bold text-dark-1 max-xs:hidden">HIPE</p>
            </Link>
            <div className='flex items-center gap-1 mx-2'></div>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">                       
                </div>
                <div className='flex items-center gap-1'>
                    <div className='block md:hidden mx-2'>
                        <Link href="/activity">
                         <div className='flex cursor-pointer'>
                            <Image
                                src='/assets/activity.svg'
                                alt='activity'
                                width={24}
                                height={24}
                                />
                        </div>
                        </Link>
                        </div>

                <div className='flex items-center gap-1 mx-2'>
                <div className='block md:hidden'>
                <Link href="/messages">
                    <div className='flex cursor-pointer'>
                        <Image
                        src='/assets/messages.svg'
                        alt='messages'
                        width={24}
                        height={24}
                        />
                    </div></Link>
                </div>
                </div>
                <OrganizationSwitcher
                    appearance={{
                        elements: {
                            organizationSwitcherTrigger:
                            "py-2 px-4"
                        }
                    }}
                /><UserButton />
            </div>
            </div>
        </nav>
        )
}

export default Topbar;