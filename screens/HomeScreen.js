import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components';
import Group from '../components/Group';
import { appointmentsApi } from '../utils';

function HomeScreen({ navigation }) {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAppointments = () => {
    setIsLoading(true);
    appointmentsApi
      .get()
      .then(({ data }) => {
        setAppointmentsList(data.data);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchAppointments}
          />
        }
      >
        {appointmentsList.map((patient, index) => {
          return (
            <Group
              key={index}
              {...patient}
              navigation={navigation}
              fetchAppointments={fetchAppointments}
            />
          );
        })}
      </Container>
      <AddButton onPress={() => navigation.navigate('Patients list')}>
        <Entypo name="plus" size={30} color="white" />
      </AddButton>
    </>
  );
}

const Container = styled.ScrollView`
  background-color: #fff;
  padding: 20px 0 0;
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
