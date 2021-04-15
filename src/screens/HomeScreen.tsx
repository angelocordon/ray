import * as React from 'react';
import { Text } from 'react-native';
import { Container } from 'components';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.lightYellow};
  color: white;
  margin: 24px;
  padding: 12px 24px;
`;

const Title = styled.Text`
  color: white;
`;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Hello World</Title>
      <ButtonContainer
        onPress={() => {
          navigation.navigate('Authenticated Navigation');
        }}
      >
        <Text>Sign In</Text>
      </ButtonContainer>
    </Container>
  );
};

export default HomeScreen;
