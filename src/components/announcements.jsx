import React from "react";
import Link from "next/link";
const NationalOlympiad = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, heading, desc1, desc2 } = cardData;
  return (
    <div className="flex flex-col font-poppins font-semibold">
      <div>ANNOUNCEMENTS</div>
      <div>
        <div class="box mx-auto sm:mx-0 w-[310px] sm:w-[600px] md:w-[660px] lg:w-[975px] xl:w-[660px] h-[500px] sm:h-[267px] rounded-lg">
          <div className="mx-12 my-6 py-6">
            <div className="text-3xl font-semibold font-inter w-5/6 text-white">
              {heading}
            </div>
            <div className="flex flex-col my-6">
              <div className="text-2xl font-bold font-poppins w-full text-white justify-end">
                {desc1}
              </div>
              <div className="text-[14px] font-extralight w-1/2 my-1 text-white">
                {desc2}
              </div>
            </div>
            <Link href="/#contact">
              <button class="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalOlympiad;
