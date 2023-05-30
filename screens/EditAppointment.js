import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from '@react-native-material/core';
import axios from 'axios';
import styled from 'styled-components';

function EditAppointment() {
  const [tooth, setTooth] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function onPressSave() {
    const data = {
      tooth,
      diagnosis,
      cost,
      date,
      time,
    };

    console.log(data);
  }

  return (
    <Container>
      <TextInput
        style={styles.TextInput}
        value={tooth}
        onChangeText={(text) => setTooth(text)}
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
        value={cost}
        onChangeText={(text) => setCost(text)}
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
