import Patient from './Patient';
import styled from 'styled-components';

function Group({ date, patients, navigation }) {
  return (
    <GroupWrapper>
      <GroupTitle>{date}</GroupTitle>
      {patients.map((patient) => {
        return (
          <Patient
            key={date}
            date={date}
            {...patient}
            navigation={navigation}
          />
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
  margin-bottom: 20px;
`;

export default Group;
