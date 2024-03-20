import React from "react";

const StoryCard = ({
  main_image,
  name_sub,
  story_number,
  storytitle,
  star_image,
  name,
  detail,
}) => {
  return (
    <>
      <div class="">
        <div class="flex justify-center items-center h-screen">
          <div class="md:border md:border-black md:bg-[#00000057] md:rounded-[7px] md:flex md:flex-row md:w-[1056px] md:h-[304px] md:shadow-md bg-white border border-white flex flex-col-reverse">
            <div class="md:bg-[#00000057] md:rounded-[7px] md:w-[430px] md:h-[264px] md:mt-[16px] md:ml-[12px] md:pt-3 md:pl-4 bg-black w-[343px] h-[188px] pl-2 rounded-[7px] z-10">
              <div className="flex items-center gap-[4px]">
                <p class="text-white text-[16px] font-[700]">{story_number}</p>
                <img className="w-[8px] h-[8px]" src={star_image} alt="" />
                <p class="text-white text-[16px] font-[700] uppercase">
                  {storytitle}
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <p class="text-white text-[60px] font-[700] uppercase">
                  {name}
                </p>
                <p class="text-[#FFFFFF66] text-[16px] font-[400] pt-9">
                  {name_sub}
                </p>
              </div>
              <p class="text-white md:text-[24px] font-[400] md:pt-14 text-[16px] pt-4">
                {detail}
              </p>
            </div>
            <div class="md:w-[604px] md:h-[516px] md:mt-[-213px] w-[343px] h-[294px] md:relative absolute mb-[135px] z-0 ">
              <img src={main_image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
