import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

const HomeScreen: React.FC = () => (
  <Container>
    <Text>Hello World</Text>
  </Container>
);

export default HomeScreen;
