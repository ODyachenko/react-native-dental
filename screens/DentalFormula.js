import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

function DentalFormula() {
  return (
    <Container>
      <DentalImage source={require('../assets/dental_formula.png')} />
    </Container>
  );
}

const Container = styled.View`
  background: #fff;
  padding: 15px;
`;
const DentalImage = styled.Image`
  width: 100%;
  object-fit: contain;
`;

export default DentalFormula;
