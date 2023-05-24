import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components';
import axios from 'axios';
import Group from '../components/Group';

function HomeScreen({ navigation }) {
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    try {
      axios('https://646cd8787b42c06c3b2c20b0.mockapi.io/Avatars').then((res) =>
        setPatientsList(res.data)
      );
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <>
      <Container>
        {patientsList.map((patient) => {
          return (
            <Group key={patient.id} {...patient} navigation={navigation} />
          );
        })}
      </Container>
      <AddButton>
        <Entypo name="plus" size={30} color="white" />
      </AddButton>
    </>
  );
}

const Container = styled.ScrollView`
  background-color: #fff;
  padding: 20px 15px 0;
  margin: 0 0 20px;
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
  right: 25px;
`;

export default HomeScreen;
