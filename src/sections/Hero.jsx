import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';
const Hero = () => {
  return (
    <section
      id='home'
      //   min-h-screen is full screen
      className='w-full flex xl:flex-grow flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p>Our Sumer collections</p>
        <h1>
          <span>The new arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>Discover stylish Nike arrivals, and oombu da sunni</p>
        <Button label='shop now' iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
