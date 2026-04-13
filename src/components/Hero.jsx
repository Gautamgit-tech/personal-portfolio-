import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload } from 'react-icons/fa';
import profileImage from './profile.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          HEY, I'M GAUTAM 👋
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
          <Typewriter
            words={[
              'A Passionate Full Stack Developer 🚀',
              'Crafting Modern Web Experiences ✨',
              'React | Node.js | MongoDB | Tailwind ⚙️',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-8">
          With a strong foundation in coding and problem-solving, I build responsive, interactive,
          and beautifully crafted web applications. Currently focused on MERN stack development,
          I'm always eager to learn and collaborate on exciting tech projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Resume.pdf"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg flex items-center gap-2"
            download
          >
            <FaDownload /> Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold text-white text-center"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Section (Profile Image or Animation) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={profileImage}
            alt="Gautam Profile"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition duration-300" />
        </div>
      </motion.div>
    </section>
  );
}
