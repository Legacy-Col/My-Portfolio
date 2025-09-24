import { motion } from 'framer-motion'
import moviesImg from '../assets/images/Entertainment.jpg'
import fitnessImg from '../assets/images/Fitness.jpg'
import moneyImg from '../assets/images/Expenses.jpg'
import ubaImg from '../assets/images/Chauffer.jpg'

const Projects = () => {

  const data = [
    {
      description: 'This is an Education App that aids the user in learning skills and keeping track of the skills they have learnt, throught the use of Ai and through the use of third Party API from Youtube',
      image: moviesImg,
      title: 'SkillMatch Ai',
      stacks: 'Next.js, Framer-Motion, NextAuth, MongoDB',
      links: 'https://skillmatch-ai-chi.vercel.app'
      /**The app also provides recommendations based on people choices and amount of rates of view for the movies/songs. It fetches its data from well known  sites like IMDb, Netflix. Showmax, Prime and the rest. It also provides options for watching matches online from champions league to premier leagues to all local and international leagues too.*/
    },
    {
      description: 'This is an app that was designed with the purpose of helping the user keep track of their health and fitness. The app provides services that ranges from providing healthy workout routine for the user and providing daily options of providing reminders to the user. Itr also has side options of keeping record of the users data (i.e weight, height and gender). the data is used to provide a tailor made fitness plan for the user.',
      image: fitnessImg,
      title: 'Fitness Tracker',
      stacks: '', 
      /**The app also provides options for learning self defence and also provides  tutorial videos for each category of the users choice.*/
    },

  ]
  return (
    <div className="pb-4 text-1xl">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl">Projects
      </motion.h1>
      <div className="my-10 lg:">
        <ul>
          {data.map((item, index) => (
            <li
              key={index}
              className="rounded-full mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{duration: 1}}
                className='w-full lg:w-1/3'>
                  <img src={item.image} alt="projects" className="rounded-lg mr-10" width={'400px'}/>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{duration:0.5}}
                className="flex flex-col justify-center lg:w-1/2 my-8">
                  <a href={item.links}><h3 className="mb-2 font-semibold text-4xl">{ item.title}</h3></a>
                  <p className="mb-4">Description: {item.description}</p>
                  <span className="mr-2 rounded text-sm font-medium text-stone-300">{item.stacks}</span>
                </motion.div>
            </li>
          ))} 
        </ul>
      </div>
    </div>
  )
}

export default Projects