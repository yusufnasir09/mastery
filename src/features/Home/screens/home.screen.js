import React from "react";
import { HomeCard, Section, TransparentSafeArea } from "../components/home.component.styles";
import { ScrollView } from "react-native";
import { Text } from '../../../components/typograhy/text.component'
import { Spacer } from "../../../components/spacer/spacer.component";
import { Avatar, Divider } from 'react-native-paper';
import { CardContainer } from "../components/home.component.styles";


export const HomeScreen = () => {
    return (
        <TransparentSafeArea>
            <CardContainer>
                <ScrollView>
                    <Spacer size='large' />
                    <HomeCard elevation={3}>
                        <Avatar.Icon style={{ alignSelf: "center" }} size={70} icon="laptop" />
                        <Spacer size='large' />
                        <Section>
                            <Text variant='label'>Pratice CBT</Text>
                            <Divider />
                            <Text variant='caption'>Solve question and get mastery</Text>
                        </Section>
                    </HomeCard>
                    <Spacer size='medium' />
                    <HomeCard elevation={3}>
                        <Avatar.Icon style={{ alignSelf: "center" }} size={70} icon="book" />
                        <Spacer size='large' />
                        <Section>
                            <Text variant='label'>Pratice Problem sets</Text>
                            <Divider />
                            <Text variant='caption'>Solve question and get mastery</Text>
                        </Section>
                    </HomeCard>
                    <Spacer size='medium' />
                    <HomeCard elevation={3}>
                        <Avatar.Icon style={{ alignSelf: "center" }} size={70} icon="brain" />
                        <Spacer size='large' />
                        <Section>
                            <Text variant='label'>What to Study?</Text>
                            <Divider />
                            <Text variant='caption'>Check your mastery levels</Text>
                        </Section>
                    </HomeCard>
                    <Spacer size='medium' />
                    <HomeCard elevation={3}>
                        <Avatar.Icon style={{ alignSelf: "center" }} size={70} icon="tools" />
                        <Spacer size='large' />
                        <Section>
                            <Text variant='label'>Explore</Text>
                            <Divider />
                            <Text variant='caption'>Solve question and get mastery</Text>
                        </Section>
                    </HomeCard>
                    <Spacer />
                </ScrollView>
            </CardContainer>
        </TransparentSafeArea>
    );
}