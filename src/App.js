import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Help from './Components/Help/Help';
import Navbar from './Components/Navbar/Navbar';
import Parts from './Components/Parts/Parts';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';
import Special from './Components/Special/Special';
import logo from './logo.svg';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
        <Navbar />
        <Slider />
        <Parts />
        <Products />
        <Banner />
        <Special />
        <Help />
        <Footer />
    </Box>
  );
}

export default App;
