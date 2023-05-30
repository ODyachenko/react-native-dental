import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import AppointmentsList from '../components/AppointmentsList';

function PatientScreen({ route, navigation }) {
  const { fullname, phone } = route.params.patient;

  return (
    <>
      <PatientInfo>
        <PatientName>{fullname}</PatientName>
        <PatientPhone>{phone}</PatientPhone>
        <PatientAction>
          <Button onPress={() => navigation.navigate('Dental formula')}>
            <ButtonText>Формула зубів</ButtonText>
          </Button>
          <CallBtn>
            <FontAwesome name="phone" size={24} color="white" />
          </CallBtn>
        </PatientAction>
      </PatientInfo>
      <AppointmentsList navigation={navigation} route={route} />
    </>
  );
}

const PatientInfo = styled.View`
  background: #fff;
  padding: 30px 15px;
`;
const PatientName = styled.Text`
  font-size: 28px
  font-weight: 700;
  margin-bottom: 5px 
`;
const PatientPhone = styled.Text`
  font-size: 16px;
  color: #8b979f;
  margin-bottom: 20px;
`;
const PatientAction = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.TouchableOpacity`
  width: 280px;
  background: #2a86ff;
  border-radius: 40px;
  padding: 15px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;
const CallBtn = styled.TouchableOpacity`
  max-width: 50px;
  height: 50px;
  flex: 1;

  align-items: center;
  justify-content: center;
  background: #84d269;
  border-radius: 25px;
`;

export default PatientScreen;
