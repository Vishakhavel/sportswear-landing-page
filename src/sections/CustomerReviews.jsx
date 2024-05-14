import { reviews } from '../constants';
import { ReviewCard } from '../components';
const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What our
        <span className='text-coral-red '> Customers</span> say?
      </h3>
      <p className='info-text m-auto mt04 max-w-lg text-center'>
        {' '}
        Hear genuine stories from our satisfied customers
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            rating={review.rating}
            customerName={review.customerName}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
