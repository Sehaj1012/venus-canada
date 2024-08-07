import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div>
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14 absolute top-5 left-5"
        />
        <Link href="/">
          <img
            src="/name.png"
            alt="Electrical Consulting"
            className="h-8 absolute top-9 left-20"
          />
        </Link>
      </div>
      <div className="text-center justify-center align-middle items-center mt-40 w-3/4 mx-auto font-bold text-4xl ">
        About Us
      </div>
      <div className="text-center justify-center align-middle items-center mt-4 w-3/4 mx-auto">
        Our consulting team leverages our diverse expertise to tackle various
        engineering challenges. With a robust portfolio of projects spread
        across Calgary, Edmonton, and other Alberta locations, as well as
        several projects in British Columbia and Saskatchewan, we have
        established a track record of success. Our client base spans across
        multiple sectors including healthcare and treatment centers, residential
        complexes, commercial businesses, retail outlets, and industrial sites.
        At the heart of our practice is the belief that integrating cutting-edge
        materials and technologies with established engineering principles is
        crucial for developing sustainable and cost-effective solutions tailored
        for today’s built environment.
      </div>
    </div>
  );
}

export default page;
