// pages/index.tsx
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '../components'; // Adjust the path if necessary

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
