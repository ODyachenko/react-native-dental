import { useState } from 'react';
import { TextInput } from 'react-native';
import axios from 'axios';
import styled from 'styled-components';

function EditAppointment() {
  const [tooth, setTooth] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  async function editData() {
    await axios.put();
  }

  return (
    <Container>
      <Field
        value={tooth}
        onChange={(event) => setTooth(event.target.value)}
        placeholder="Номер зубу"
        keyboardType="numeric"
      />
      <Field
        value={diagnosis}
        onChange={(event) => setDiagnosis(event.target.value)}
        placeholder="Діагноз"
      />
      <Field
        value={cost}
        onChange={(event) => setCost(event.target.value)}
        placeholder="Ціна"
        keyboardType="numeric"
      />
      <FieldDate>
        <Field
          value={date}
          onChange={(event) => setDate(event.target.value)}
          placeholder="Дата"
          keyboardType="numeric"
        />
        <Field
          value={time}
          onChange={(event) => setTime(event.target.value)}
          placeholder="Час"
          keyboardType="numeric"
        />
      </FieldDate>
      <SaveBtn>
        <SaveBtnText>Зберегти</SaveBtnText>
      </SaveBtn>
    </Container>
  );
}

const Container = styled.ScrollView`
  background: #fff;
  padding: 20px 15px;
`;
const Field = styled.TextInput`
  min-width: 160px
  font-size: 16px;
  /* font-weight: 700; */
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  margin-bottom: 20px;
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

export default EditAppointment;
