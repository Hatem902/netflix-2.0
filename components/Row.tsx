import { Movie } from '../typings';

interface Props {
  title: string;
  category: Movie[];
}

const Row = ({ category, title }: Props) => {
  return (
    <>
      <div>{title}</div>
      <div>{category[0]?.backdrop_path}</div>
    </>
  );
};

export default Row;
