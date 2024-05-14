import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';

const SpecialOffer = () => {
  return (
    // reverse cos text will come on top in mobile devices, before the pics on the left
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
          alt=''
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold'>
          <span className='text-coral-red'> Special</span> Offer
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
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='shop now' iconURL={arrowRight} />
          <Button
            label='learn more'
            backGroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
