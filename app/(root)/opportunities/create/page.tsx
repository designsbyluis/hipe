import OpportunitiesForm from "@/components/shared/OpportunitiesForm";
import { auth } from "@clerk/nextjs";

const CreateOpportunity = () => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;
  return (
    <>
    <section className="bg-gray-50 bg-dotted-pattern bg-cover bg-center">
        <h3 className="wrapper head-text text-center sm:text-left">Create Opportunity</h3>
    </section>

    <div className="wrapper my-8">
        <OpportunitiesForm userId={userId} type="Create"/>
    </div>
    </>
  )
}

export default CreateOpportunity;