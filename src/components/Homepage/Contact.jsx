import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { LuMailPlus } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <section className="bg-linear-to-r from-[#0F172A] to-[#1E293B] text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Have any questions or need support? Feel free to contact us anytime.
            We are here to help you with your book journey.
          </p>

          <div className="space-y-3 text-gray-300 text-sm md:text-base">
            <p className="flex gap-2 items-center">
              {" "}
              <MdLocationPin className="text-2xl" /> Moulvibazar, Sylhet,
              Bangladesh
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <IoCallSharp className="text-2xl" /> +880 1308480206
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <LuMailPlus className="text-2xl" /> atikur.an638@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="group w-11 h-11 flex items-center justify-center rounded-full 
        bg-white/10 backdrop-blur-md border border-white/10 
        hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF className="text-white group-hover:text-white text-lg" />
            </a>

            <a
              href="#"
              className="group w-11 h-11 flex items-center justify-center rounded-full 
        bg-white/10 backdrop-blur-md border border-white/10 
        hover:bg-blue-700 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>

            <a
              href="#"
              className="group w-11 h-11 flex items-center justify-center rounded-full 
        bg-white/10 backdrop-blur-md border border-white/10 
        hover:bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 
        transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>

        <form className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
