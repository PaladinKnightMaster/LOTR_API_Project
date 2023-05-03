import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Lord of the Rings Movies</h1>
      <Link to="/movies">View All Movies</Link>
    </div>
  );
};

export default Home;
