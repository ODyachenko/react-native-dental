import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SectionList,
} from 'react-native';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';
import Group from './components/Group';
import { patientList } from './data/patientsList';

export default function App() {
  return (
    <Container>
      {patientList.map((patient) => {
        return <Group key={patient.id} {...patient} />;
      })}
      <AddButton>
        <Entypo name="plus" size={30} color="white" />
      </AddButton>
    </Container>
  );
}

const Container = styled.ScrollView`
  background-color: #fff;
  padding: 0 15px;
  margin: 60px 0 20px;
`;
const AddButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #2a86ff;
  border-radius: 32px;
  box-shadow: 0px 4px 10px rgba(42, 134, 255, 0.4);

  position: absolute;
  bottom: 25px;
  right: 0;
`;
