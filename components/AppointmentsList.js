import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components';
import PatientAppointment from './PatientAppointment';

function AppointmentsList({ navigation, route }) {
  const { _id } = route.params;

  return (
    <>
      <Container>
        <Title>Призначення</Title>
        <PatientAppointment navigation={navigation} route={route} />
      </Container>
      <AddButton
        onPress={() => navigation.navigate('Add appointment', { _id: _id })}
      >
        <Entypo name="plus" size={30} color="white" />
      </AddButton>
    </>
  );
}

const Container = styled.ScrollView`
  background: #f8fafd;
  padding: 20px;
  margin-bottom: 30px;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: 700
  margin: 0 0 15px;
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

export default AppointmentsList;
