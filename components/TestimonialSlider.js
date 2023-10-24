// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sonali Thakur',
    position: 'Customer',
    message:
      'I was looking for a Web professional who would create and evolve my website. Keshav delivers exactly what I want. It’s always a pleasure working and seeing him. I enjoy meeting him as he lives locally and I always leave his place with a spring in my step and a smile on my face. I know he will keep improving my website and advising me in the best ways forward for years to come, with SEO and new features. I look forward to a great working relationship and friendship with him.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Tejasya Mishra',
    position: 'Customer',
    message:
      'Always available to help, incredibly proficient, hits deadlines without fail, hard working and trustworthy. In my experience, no project is too much trouble, and with Keshav you really get a rare entity – someone that can simplify what can be a very complex industry at times.   I can recommend his services without hesitation.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Pavan Gupta',
    position: 'Customer',
    message:
      'We hired Keshav to undertake some search engine optimisation work to boost Google rankings for our UK car hire arm. The results were nothing less than sensational and within six months we were ranked highly on Google, but more importantly the phone has not stopped ringing. I can not recommend Keshav’s services enough. He’s really one of a kind.',
  },
];


// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Navigation,Pagination } from "swiper";

//icons
import {FaQuoteLeft} from 'react-icons/fa';

//next image
import Image from 'next/image';


const TestimonialSlider = () => {
  return (
    <Swiper
    navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation,Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar*/}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/* quote & message  */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon  */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"  />
                </div>
                {/* message  */}
                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

