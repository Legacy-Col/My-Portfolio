import { motion } from 'framer-motion'

const Projects = () => {

  const data = [
    {
      description: 'This is an app that was developed to provide the user with a large range of entertainment options which ranges  from watching, downloading, streaming, movies both off and online. It also provides the same options for listening to music.',
      image: 'images/Entertainment.jpg',
      title: 'Entertainment App',
      stacks: '',
      /**The app also provides recommendations based on people choices and amount of rates of view for the movies/songs. It fetches its data from well known  sites like IMDb, Netflix. Showmax, Prime and the rest. It also provides options for watching matches online from champions league to premier leagues to all local and international leagues too.*/
    },
    {
      description: 'This is an app that was designed with the purpose of helping the user keep track of their health and fitness. The app provides services that ranges from providing healthy workout routine for the user and providing daily options of providing reminders to the user. Itr also has side options of keeping record of the users data (i.e weight, height and gender). the data is used to provide a tailor made fitness plan for the user.',
      image: 'images/Fitness.jpg',
      title: 'Fitness Tracker',
      stacks: '', 
      /**The app also provides options for learning self defence and also provides  tutorial videos for each category of the users choice.*/
    },
    {
      description: 'The expense tracker provides the user with an update on the regular expenses made by the user. It tells how much has been spent and also provides a guide for those that want to start a savings plan.',
      image: 'images/Expenses.jpg',
      title: 'Expense Tracker',
      stacks: '',
    },
    {
      description: "Its a transportion app that provides the user with information on available drivers and transport means available for them. It links them with qualified drivers who own cars and are ready to act as drivers while also linking people who are in need of drivers or who can drive and don't have a means of providing their services. It provides a mode of verification for both the Driver and User so as to provide adequate security to them both. The appp also serves as a tour guide providing a guide for tourist and visitors in need of a guide.",
      image: 'images/Chauffer.jpg',
      title: 'Chauffer',
      stacks: '',
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
                  <h3 className="mb-2 font-semibold text-4xl">{ item.title}</h3>
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