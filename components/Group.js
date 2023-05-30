import Swipeable from 'react-native-swipeable';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';
import Patient from './Patient';

function Group({ title, data, navigation }) {
  const rightButtons = [
    <Edit onPress={() => navigation.navigate('Edit appointment')}>
      <MaterialIcons name="edit" size={27} color="white" />
    </Edit>,
    <Delete>
      <Entypo name="cross" size={30} color="white" />
    </Delete>,
  ];

  return (
    <GroupWrapper>
      <GroupTitle>{title}</GroupTitle>
      {data.map((patient) => {
        return (
          <Swipeable key={patient.patient_id} rightButtons={rightButtons}>
            <Patient {...patient} navigation={navigation} />
          </Swipeable>
        );
      })}
    </GroupWrapper>
  );
}

const GroupWrapper = styled.View`
  margin-bottom: 5px;
`;
const GroupTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
  padding: 0 15px;
  margin-bottom: 20px;
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

export default Group;
