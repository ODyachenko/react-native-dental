import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import styled from 'styled-components';
import { patientsApi } from '../utils';
import Patient from '../components/Patient';
import Swipeable from 'react-native-swipeable';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

function PatientsList({ navigation }) {
  const [patientsList, setPatientsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPatients = () => {
    setIsLoading(true);
    patientsApi
      .get()
      .then(({ data }) => {
        setPatientsList(data.data);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  function deletePatient(id) {
    patientsApi
      .remove(id)
      .then(() => {
        setIsLoading(true);
        fetchPatients();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Container
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPatients} />
        }
      >
        {patientsList.map((patient) => {
          return (
            <Swipeable
              key={patient.id}
              rightButtons={[
                <Edit
                  onPress={() =>
                    navigation.navigate('Edit patient', { ...patient })
                  }
                >
                  <MaterialIcons name="edit" size={27} color="white" />
                </Edit>,
                <Delete onPress={() => deletePatient(patient._id)}>
                  <Entypo name="cross" size={30} color="white" />
                </Delete>,
              ]}
            >
              <Patient {...patient} navigation={navigation} />
            </Swipeable>
          );
        })}
      </Container>
      <AddButton onPress={() => navigation.navigate('Add patient')}>
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
const Edit = styled.TouchableOpacity`
  weight: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background: #b4c1cb;
`;
const Delete = styled.TouchableOpacity`
  weight: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background: #f85a5a;
`;

export default PatientsList;
