import { View } from 'react-native';
import styled from 'styled-components';

function Patient({ avatar, name, diagnosis, time }) {
  return (
    <GroupItem>
      <Avatar source={avatar} />
      <View>
        <FullName>{name}</FullName>
        <Diagnosis>{diagnosis}</Diagnosis>
      </View>
      <Time>{time}</Time>
    </GroupItem>
  );
}

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #f3f3f3
  padding-bottom: 20px;
  margin-bottom: 20px;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 20px;
  margin-right: 15px;
`;
const FullName = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 3px;
`;
const Diagnosis = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;
const Time = styled.Text`
  ${(props) =>
    props.active
      ? 'background-color: #2A86FF; color: #fff'
      : 'background-color: #e9f5ff; color: #4294ff'}

  width: 70px;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  border-radius: 18px;
  padding: 8px;
  margin-left: auto;
`;

export default Patient;
