import {
 Flex,
} from '@chakra-ui/react';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
 return (
  <Flex
   justifyContent='center'
   mb='8'
  >
   <ul>
   {step1 ? (
    <li className='active'>1</li>
   ) : (<li>1</li>)
   }
   <span class="line"></span>
   {step2 ? (
    <li className='active'>2</li>
   ) : (<li>2</li>)
   }
   {step3 ? (
    <li className='active'>3</li>
   ) : (<li>3</li>)
   }
   {step4 ? (
    <li className='active'>4</li>
   ) : (<li>4</li>)
   }
</ul>
  </Flex>
 );
};

export default CheckoutSteps;
