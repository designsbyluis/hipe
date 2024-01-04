import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import Navbar from "../shared/navbar"
import Footer from "../Footer/Footer"
import Services from "../Services/Services"


const LandingPage = () => {
  return (
    <>
      <Navbar />
  
      <section className="bg-primary-50 flexbg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Learn, Connect & Find Opportunities!</h1>
            <p className="p-regular-20 md:p-regular-24">Get exclusive mentorship, internships, and research opportunities you won't find anywhere else.</p>
            <Button size="lg" asChild className="button bg-primary-500 w-full sm:w-fit">
        <Link href="#services">
         Learn More
         </Link>
        </Button>
          </div>

          <Image 
            src="/assets/hero.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Schools</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
        <Services />
        </div>
        <div>
         
        </div>

        
      </section> <Footer />
    </>
  )
}

export default LandingPage;
