import Link from "next/link";
import Image from "next/image";
import { MdSchool } from "react-icons/md";
import { Button } from "../ui/button";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  school: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  school,
  imgUrl,
  bio,
  type,
}: Props) {
    const isOwnProfile = accountId === authUserId;
    const isCommunityType = type === 'communities';
    const isCommunity = type === 'Community'
  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='relative h-20 w-20 object-cover'>
            <Image
              src={imgUrl}
              alt='logo'
              fill
              className='rounded-full object-cover shadow-2xl'
            />
          </div>

          <div className='flex-1'>
            <h2 className='text-left text-heading3-bold text-dark-1'>
              {name}
            </h2>
            <p className='text-base-medium text-gray-1'>@{username}</p>
            {!isCommunity && (
            <p className="text-base-medium text-dark-3 flex items-center">
              <MdSchool className="mr-2" />
              {school}
            </p>
          )}
          </div>
        </div>
        {accountId === authUserId && type !== "Community" && (
          <Link href='/profile/edit'>
            <div className='flex cursor-pointer gap-3 rounded-lg bg-light-2 px-4 py-2'>
              <Image
                src='/assets/edit.svg'
                alt='logout'
                width={16}
                height={16}
              />

              <p className='text-dark-2 max-sm:hidden'>Edit</p>
            </div>
          </Link>
        )}
      </div>
      <div className='mt-5'>
        {!isOwnProfile && isCommunityType && (
          <Button className='h-auto min-w-[74px] rounded-lg bg-primary-500 text-[12px] text-light-1 !important'>
            <Image
              src='/assets/send.svg'
              alt="Send"
              width={20}
              height={20}
              className='mr-2' // Add any additional styling as needed
            />
            Message
         </Button>
         )}

      <p className='mt-6 max-w-lg text-base-regular text-dark-2'>{bio}</p>

      <div className='mt-12 h-0.5 w-full bg-gray-200' />
    </div>
    </div>
  );
}

export default ProfileHeader;