import { useState } from 'react';
import { TextInput } from '@react-native-material/core';
import { appointmentsApi } from '../utils';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

function AddAppointment({ route, navigation }) {
  const [dentNumber, setDentNumber] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { _id } = route.params;

  function onPressSave() {
    const values = {
      dentNumber: Number(dentNumber),
      diagnosis,
      price: Number(price),
      date,
      time,
      _id,
    };
    appointmentsApi
      .add(values)
      .then((res) => console.log(res))
      .catch((error) => console.error(error.message));
    // navigation.goBack();
  }

  return (
    <Container>
      <TextInput
        style={styles.TextInput}
        value={dentNumber}
        onChangeText={(text) => setDentNumber(text)}
        variant="standard"
        label="Номер зубу"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.TextInput}
        value={diagnosis}
        onChangeText={(text) => setDiagnosis(text)}
        variant="standard"
        label="Діагноз"
      />
      <TextInput
        style={styles.TextInput}
        value={price}
        onChangeText={(text) => setPrice(text)}
        variant="standard"
        label="Ціна"
        keyboardType="numeric"
      />
      <FieldDate>
        <TextInput
          style={styles.TextInput}
          value={date}
          onChangeText={(text) => setDate(text)}
          variant="standard"
          label="Дата"
        />
        <TextInput
          style={styles.TextInput}
          value={time}
          onChangeText={(text) => setTime(text)}
          variant="standard"
          label="Час"
        />
      </FieldDate>
      <SaveBtn onPress={onPressSave}>
        <SaveBtnText>Додати</SaveBtnText>
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
  background: #7bc950;
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

export default AddAppointment;
