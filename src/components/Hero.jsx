import Background from '../assets/Background.jpg'
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren:0.5,
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    } 
  }
}


const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 text-2xl">
          <div className="flex flex-wrap lg:flex-row-reverse">
              <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                  <motion.img
                    src={Background}
                    alt="profilepic"
                    className="border border-stone-900 rounded-3xl" width={'400px'}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{duration: 1, delay: 1.5}}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                      className="flex flex-col items-center lg:items-start mt-10">
                      <motion.h2
                          variants={childVariants}
                          className="pb-2xl text-4xl tracking-tighter lg:text-8xl">Legacy Collins
                      </motion.h2>
                      <motion.span
                          variants={childVariants}
                          className="bg-gradient-to-r from-stone-300 to stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Front-End Web Developer
                      </motion.span>
                      <motion.p
                        variants={childVariants}
                        className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">Hi, I’m Collins Uchechukwu — a Front-End Web Developer, Surveyor, and Designer with a growing interest in Cybersecurity. My work spans both the digital and physical world: from creating responsive, user-friendly web experiences with modern tools, to producing precise survey plans and technical drawings.

                        I’m skilled in front-end development (responsive design, clean interfaces), designing with Figma, and applying my background in surveying to deliver accurate and reliable results. My multidisciplinary background gives me a unique perspective on problem-solving — blending creativity, precision, and technical expertise.

                        I’m currently seeking job opportunities, freelance work, contracts, or internships, where I can contribute my skills, grow professionally, and collaborate with teams to build impactful solutions.
                      </motion.p>
                      <motion.a
                        variants={childVariants}                  
                        href="" target="_blank" rel="noopenner noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume
                      </motion.a>  
                    </motion.div>
              </div>
          </div>
    </div>
  )
}

export default Hero