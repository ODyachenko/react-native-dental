import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from '@react-native-material/core';
import axios from 'axios';
import styled from 'styled-components';

function EditAppointment({ route }) {
  const { dentNumber, diagnosis, price, date, time } = route.params;

  const [dentNumberValue, setDentNumberValue] = useState(String(dentNumber));
  const [diagnosisValue, setDiagnosisValue] = useState(diagnosis);
  const [priceValue, setPriceValue] = useState(String(price));
  const [dateValue, setDateValue] = useState(date);
  const [timeValue, setTimeValue] = useState(time);

  function onPressSave() {
    const data = {
      dentNumber: Number(dentNumberValue),
      diagnosis: diagnosisValue,
      price: Number(priceValue),
      date: dateValue,
      time: timeValue,
    };
  }

  return (
    <Container>
      <TextInput
        style={styles.TextInput}
        value={dentNumberValue}
        onChangeText={(text) => setDentNumberValue(text)}
        variant="standard"
        label="Номер зубу"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.TextInput}
        value={diagnosisValue}
        onChangeText={(text) => setDiagnosisValue(text)}
        variant="standard"
        label="Діагноз"
      />
      <TextInput
        style={styles.TextInput}
        value={priceValue}
        onChangeText={(text) => setPriceValue(text)}
        variant="standard"
        label="Ціна"
        keyboardType="numeric"
      />
      <FieldDate>
        <TextInput
          style={styles.TextInput}
          value={dateValue}
          onChangeText={(text) => setDateValue(text)}
          variant="standard"
          label="Дата"
        />
        <TextInput
          style={styles.TextInput}
          value={timeValue}
          onChangeText={(text) => setTimeValue(text)}
          variant="standard"
          label="Час"
        />
      </FieldDate>
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

export default EditAppointment;
