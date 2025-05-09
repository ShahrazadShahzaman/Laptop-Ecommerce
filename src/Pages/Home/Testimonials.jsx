import { motion } from "framer-motion";
import avatar1 from "../../assets/testimonial1.png";
import avatar2 from "../../assets/testimonial2.png";
import avatar3 from "../../assets/testimonial3.png";
import avatar4 from "../../assets/testimonial4.png";
import avatar5 from "../../assets/testimonial5.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SwiperSlide,Swiper } from "swiper/react";
import { useRef } from "react";
import { fadeRight } from "../../Animations/Variants";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';



// Dummy Data
const TestimonialData=[
    {
        id: 1,
        logo: avatar1,
        name: "Emily Carter",
        role: "Project Manager at Softwave",
        quote: "This platform completely transformed our shopping experience! It's intuitive, fast, and reliable.",
      },
      {
        id: 2,
        logo: avatar2,
        name: "James Patterson",
        role: "CTO at Innovix",
        quote: "The product quality and customer support are unmatched. We highly recommend it.",
      },
      {
        id: 3,
        logo: avatar3,
        name: "Sarah Johnson",
        role: "Freelance Designer",
        quote: "A clean, seamless experience from browsing to checkout. Impressive responsiveness!",
      },
      {
        id: 4,
        logo: avatar4,
        name: "Daniel Lee",
        role: "Tech Blogger",
        quote: "Loved the UI/UX. Extremely professional and easy to navigate. 10/10.",
      },
      {
        id: 5,
        logo:avatar5,
        name: "Nina Taylor",
        role: "Entrepreneur",
        quote: "Fast loading, beautiful design, and perfect customer interaction. Keep it up!",
      },
    ];

const Testimonials =()=>{

    const swiperRef = useRef(null);

    return(
        <>
        <motion.section  initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-16 px-6 md:px-16 bg-gradient-to-r from-[#244D61] via-[#5689C0] to-[#75E2FF] rounded-t-3xl">
        <motion.h2 initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl md:text-4xl font-semibold text-center mb-12">
See What Our Customers Say
        </motion.h2>

        <div className="relative">

        <div className="relative">
  <button onClick={() => swiperRef.current?.slidePrev()}
    className="absolute -left-6 top-1/2 z-10 transform -translate-y-1/2 bg-[#5689C0] hover:bg-[#75E2FF] text-white p-2 rounded-full shadow-lg">
    <ChevronLeft size={24} />
  </button>

  <Swiper
    modules={[Navigation]}
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    onBeforeInit={(swiper) => (swiperRef.current = swiper)}
    className="pb-8"
  >
    {TestimonialData.map((Testimonial, i) => (
      <SwiperSlide key={Testimonial.id}>
        <motion.div
          custom={i}
          variants={fadeRight}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Testimonial.logo}
              alt={Testimonial.name}
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-[#244D61] font-semibold">
                {Testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{Testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            "{Testimonial.quote}"
          </p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>

  <button onClick={() => swiperRef.current?.slideNext()}
    className="absolute -right-6 top-1/2 z-10 transform -translate-y-1/2 bg-[#5689C0] hover:bg-[#75E2FF] text-white p-2 rounded-full shadow-lg">
    <ChevronRight size={24} />
  </button>
</div>
</div>
</motion.section>
        </>
    )
}
export default Testimonials;