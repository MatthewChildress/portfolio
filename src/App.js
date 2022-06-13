import Navbar from './Navbar/Navbar';
import Wrapper from './Wrapper/Wrapper';
import { GlobalStyle } from './Global.styled';

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Navbar />
      <Wrapper />
    </>

  );
}

export default App;
