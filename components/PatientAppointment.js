import { Text } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import styled from 'styled-components';

function PatientAppointment({ navigation, route }) {
  const { dentNumber, diagnosis, time, price, date } = route.params;

  return (
    <AppointmentsItem>
      <Edit onPress={() => navigation.navigate('Edit appointment')}>
        <Svg
          width={4}
          height={18}
          viewBox="0 0 4 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G
            opacity={0.3}
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M2 10a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 100-2 1 1 0 000 2zM2 17a1 1 0 100-2 1 1 0 000 2z" />
          </G>
        </Svg>
      </Edit>
      <Tooth>
        <Svg
          width={13}
          height={15}
          viewBox="0 0 13 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            opacity={0.7}
            d="M6.447 7.724c1.281 0 1.875.81 2 1.962.029.275-.001.676-.044 1.142-.144 1.544-.31 3.442.924 3.442 1.043 0 1.579-1.669 1.888-3.571.299-1.883-.018-2.82.138-3.657.297-1.584 1.955-3.005 1.443-5.025C12.512.897 11.772.37 11.039.147 9.351-.365 8.26.622 6.447.622c-1.813 0-2.903-.987-4.592-.475C1.123.37.382.897.097 2.017c-.511 2.02 1.147 3.44 1.445 5.025.155.836-.16 1.774.138 3.657.309 1.902.845 3.571 1.888 3.571 1.232 0 1.067-1.898.924-3.442-.042-.466-.074-.867-.044-1.143.124-1.15.727-1.96 1.999-1.96z"
            fill="#A3A3A3"
          />
        </Svg>{' '}
        Зуб: <Text style={{ fontWeight: 700 }}>{dentNumber}</Text>
      </Tooth>
      <Diagnosis>
        <Svg
          width={14}
          height={15}
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            opacity={0.7}
            d="M10.77 6H3.076V4.5h7.692V6zm0 3H3.076V7.5h7.692V9zm-2.308 3H3.077v-1.5h5.385V12zM6.923 1.5c.423 0 .77.337.77.75s-.347.75-.77.75a.762.762 0 01-.77-.75c0-.413.347-.75.77-.75zm5.385 0H9.092A2.312 2.312 0 006.923 0c-1 0-1.846.63-2.17 1.5H1.539C.692 1.5 0 2.175 0 3v10.5c0 .825.692 1.5 1.538 1.5h10.77c.846 0 1.538-.675 1.538-1.5V3c0-.825-.692-1.5-1.538-1.5z"
            fill="#A3A3A3"
          />
        </Svg>{' '}
        Діагноз: <Text style={{ fontWeight: 700 }}>{diagnosis}</Text>
      </Diagnosis>
      <AppointmentsInfo>
        <Date>
          {date} - {time}
        </Date>
        <Price>{price} грн</Price>
      </AppointmentsInfo>
    </AppointmentsItem>
  );
}

const AppointmentsItem = styled.View`
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;
const Edit = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 100;
`;
const Tooth = styled.Text`
  font-size: 16px;
  margin-bottom: 15px;
`;
const Diagnosis = styled(Tooth)``;
const AppointmentsInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Date = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: #4294ff;
  border-radius: 18px;
  padding: 8px 15px;
`;
const Price = styled(Date)`
  color: #61bb42;
  background: rgba(132, 210, 105, 0.21);
`;

export default PatientAppointment;
