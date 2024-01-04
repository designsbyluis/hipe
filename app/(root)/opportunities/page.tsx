import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
    return (
      <section>
        <h1 className="head-text mb-10">Opportunities</h1>
        <Link href="/opportunities/create">
            <Button>Create Opportunity</Button> 
        </Link>
      </section>
    );
  };
  
  export default Page;
