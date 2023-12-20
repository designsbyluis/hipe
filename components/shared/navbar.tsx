"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 border-b px-3 py-2 bg-white z-50">
      <div className="wrapper flex items-center justify-between mx-auto max-w-screen-xl">
      <Link href="/" className="flex items-center gap-4">
                <Image
                    src="assets/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                />
                <p className="text-heading3-bold text-dark-1 max-xs:hidden">HIPE</p>
            </Link>
        <Button asChild className="rounded-full ml-4" size="lg">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;


