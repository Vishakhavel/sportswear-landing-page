import { shoe8 } from '../assets/images';
import { Button } from '../components';
const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold'>
          We Provide you
          <span className='text-coral-red'> super</span>
          <span className='text-coral-red'> quality</span> Shoes
          <br />
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style Ensuring premium comfort and style
          Ensuring premium comfort and style Ensuring premium comfort and style
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          ourdedicationdedicationdedicationdedicationdedicationdedication
          dedicationdedicationdedicationdedicationdedicationdedication
          dedication section
        </p>
        <div className='mt-11 '>
          <Button label='view details' />
        </div>
      </div>

      <div className='flex flex-1 justify-normal items-center'>
        <img
          className='object-contain'
          src={shoe8}
          alt='show8'
          height={522}
          width={570}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
