import Patient from './Patient';
import styled from 'styled-components';

function Group({ id, date, patients }) {
  return (
    <GroupWrapper>
      <GroupTitle>{date}</GroupTitle>
      {patients.map((patient) => {
        return <Patient key={date} {...patient} />;
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
