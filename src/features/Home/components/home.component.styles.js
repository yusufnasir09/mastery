import { Image, View } from 'react-native';
import styled from 'styled-components/native'
import { Card } from 'react-native-paper';
import { SafeArea } from '../../../components/utility/safe-area.component';

export const TransparentSafeArea = styled(SafeArea)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const HomeCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.secondary};
width: 95%;
padding: 40px;
align-items: center;
align-self: center;
`;
export const HomeCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.secondary};
`;
export const Section = styled(View)`
align-items: center;
`;
export const CardContainer = styled(View)`
flex: 1;
justify-content: center;
`;
export const Icon = styled(Image)`
width: 15px;
height: 15px;
`;