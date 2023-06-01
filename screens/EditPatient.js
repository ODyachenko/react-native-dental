import { useState } from 'react';
import { TextInput } from '@react-native-material/core';
import { patientsApi } from '../utils';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

function EditPatient({ navigation, route }) {
  const { _id, fullname, phone } = route.params;
  const [name, setName] = useState(fullname);
  const [number, setNumber] = useState(phone);

  function onPressSave() {
    const values = {
      fullname: name,
      phone: number,
    };

    patientsApi
      .patch(_id, values)
      .then((res) => console.log(res))
      .catch((error) => console.error(error.message));
    navigation.goBack();
  }

  return (
    <Container>
      <TextInput
        style={styles.TextInput}
        value={name}
        onChangeText={(text) => setName(text)}
        variant="standard"
        label="ім'я"
      />
      <TextInput
        style={styles.TextInput}
        value={number}
        onChangeText={(text) => setNumber(text)}
        variant="standard"
        label="телефон"
        keyboardType="numeric"
      />
      <SaveBtn onPress={onPressSave}>
        <SaveBtnText>Зберегти</SaveBtnText>
      </SaveBtn>
    </Container>
  );
}

const Container = styled.ScrollView`
  background: #fff;
  padding: 20px 15px;
`;
const FieldDate = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const SaveBtn = styled.TouchableOpacity`
  background: #2a86ff;
  border-radius: 40px;
  padding: 12px;
`;
const SaveBtnText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;
const styles = StyleSheet.create({
  TextInput: {
    minWidth: 160,
    marginBottom: 20,
  },
});

export default EditPatient;
