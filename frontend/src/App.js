import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstStep from './components/FirstStep';
import FourthStep from './components/FourthStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div style={{ padding: '10px', height: '100vh' }}  >
        <Flex borderRadius='lg' h='100%' bgColor='gray.200'>
          <Routes>
            <Route path='/' element={<FirstStep />} />
            <Route path='/second' element={<SecondStep />} />
            <Route path='/third' element={<ThirdStep />} />
            <Route path='/fourth' element={<FourthStep />} />
          </Routes>
        </Flex>
      </div>
    </BrowserRouter>
  );
}

export default App;
