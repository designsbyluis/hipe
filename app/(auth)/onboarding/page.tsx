import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    school: userInfo ? userInfo?.school: "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 lg:px-20 py-10">
            <h1 className="head-text text-light-1">Getting started with your HIPE account</h1>
            <p className="mt-3 text-base-regular text-light-2">
                With a personal account on HIPE, you can create posts, find opportunities and create or join available communities.
            </p>

            <section className="mt-9 rounded-md border border-gray-300 bg-light-1 p-10">
                <AccountProfile 
                    user={userData}
                    btnTitle="Continue"   
                />    
            </section>

        </main>
    )
}

export default Page;