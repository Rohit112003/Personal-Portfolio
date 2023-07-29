import { content } from "../Content";
import study from "../assets/images/Testimonials/study.png"
const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-10">
        <h2 className="md:text-3xl text-2xl" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="text-gray" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <div className="flex justify-center items-center">
        <img  src={study} alt=""  />
          
        </div>
        <br />
        <div className="flex gap-3 justify-between flex-col md:flex-row">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[10rem] cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 
              "
            >
              <img src={content.logo} alt="..." className="mx-auto w-[40px] " />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;