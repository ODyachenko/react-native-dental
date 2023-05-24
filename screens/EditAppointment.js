import { TextInput } from 'react-native';
import styled from 'styled-components';

function EditAppointment() {
  return (
    <Container>
      <Field placeholder="Номер зубу" keyboardType="numeric" />
      <Field placeholder="Діагноз" />
      <Field placeholder="Ціна" keyboardType="numeric" />
      <FieldDate>
        <Field placeholder="Дата" keyboardType="numeric" />
        <Field placeholder="Час" keyboardType="numeric" />
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
