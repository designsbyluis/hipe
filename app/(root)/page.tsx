import LandingPage from "@/components/LandingPage/LandingPage";
import PostCard from "@/components/cards/PostCard";
import { fetchPosts } from "@/lib/actions/post.actions";
import { currentUser } from '@clerk/nextjs';


export default async function Home() {
  const user = await currentUser();
  const result = await fetchPosts(1, 30);

  // Check if the user is not logged in
  if (!user) {
    return <LandingPage />;
  }

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No posts found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}


