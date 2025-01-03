import VideoThumb from "@/public/images/statica/Statica Logo Black Background.png";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";
import FeaturesImage from "@/public/images/statica/Statica Logo White Cropped.png";

export default function HeroHome() {
  return (
    <section>
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-20"> */}
      <div className="-mt-4 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 md:py-16">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-16">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Welcome to Statica: Spark Your Vision
            </h1>
            <div className="mt-4 flex justify-center items-center">
              <ModalVideo
                thumb={VideoThumb}
                thumbWidth={500}
                thumbHeight={500}
                thumbAlt="Modal video thumbnail"
                video="videos//Statica Launch Promo Video.mp4"
                videoWidth={500}
                videoHeight={800}
              />
            </div>
            <div className="mx-auto max-w-4xl mt-10">
              <p
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                At Statica, we transform ideas into captivating realities. For the past four years, we’ve been dedicated to creating high-quality,
                custom graphic designs that leave lasting impressions. From logos that define brands to promotional flyers that demand attention,
                Statica’s creative touch is second to none. We pride ourselves on delivering designs that bring your vision to life with clarity,
                originality, and an unmistakable spark of creativity.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/portfolios/graphic-design"
                  >
                    <span className="relative inline-flex items-center">
                      See Our Work
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="/request-services/request-quote"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
