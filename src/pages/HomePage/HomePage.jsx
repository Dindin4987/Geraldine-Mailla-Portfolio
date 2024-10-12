import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Home } from '../../components/Home/Home';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Geraldine Mailla</title>
      </Helmet>

      {/* Home Component */}
      <Home />
    </HelmetProvider>
  );
};

export default HomePage;
