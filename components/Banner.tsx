import { Movie } from '../typings';

interface props {
  movie: Movie;
}

const Banner = ({ movie }: props) => {
  return (
    <section className='absolute'>
      <h3>TEST {movie.backdrop_path} </h3>
    </section>
  );
};

export default Banner;
