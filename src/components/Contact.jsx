import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
          <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -100 }}
              transition={{duration: 0.5}}
              className="my-10 text-center tracking-tighter text-4xl font-semibold">Contact Us
          </motion.h2>
          <div className="text-center tracking-tighter">
              <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{duration: 1}}
                  className="my-4">Abba Father Street Umugumma Owerri Imo State. NG
              </motion.p>
              <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{duration: 1}}
                  className="my-4" typeof="tel">
                  (+234) 08169947010
              </motion.p>
              <motion.a
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{duration: 1}}
                  href="https://gmail.com/nwosucollins35@gmail.com" type="email">nwosucollins35@gmail.com
              </motion.a>
          </div>  
    </div>
  )
}

export default Contact