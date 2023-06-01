import { Avatar } from '@react-native-material/core';
import { View } from 'react-native';
import styled from 'styled-components';

function Patient({ _id, fullname, phone, navigation }) {
  return (
    <PatientItem
      onPress={() => navigation.navigate('Add appointment', { _id })}
    >
      <Avatar style={{ marginRight: 15 }} label={fullname} autoColor />
      <View>
        <FullName>{fullname}</FullName>
        <Phone>{phone}</Phone>
      </View>
    </PatientItem>
  );
}

const PatientItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #f3f3f3;
  padding: 0 15px 20px;
  margin-bottom: 20px;
`;

const FullName = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 3px;
`;
const Phone = styled.Text``;

export default Patient;
