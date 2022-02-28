import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { List, Avatar } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typograhy/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const TransparentSafeArea = styled(SafeArea)`
background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
padding: ${(props) => props.theme.space[3]};
background-color: rgba(255, 255, 255, 0.4)
`
const AvatarContainer = styled.View`
align-items: center;
margin-top: 40px;
`;

export const SettingsScreen = () => {
    return (
        <TransparentSafeArea>
            <AvatarContainer>
                <Avatar.Icon size={100} icon="human" backgrounColor={colors.brand.primary} />
                <Spacer position="top" size="large">
                    <Text variant="label">Name</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color={colors.ui.error} icon="heart" />}
                    onPress={() => null}
                />
                <Spacer />
                <SettingsItem
                    title="Payment"
                    left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="cart" />}
                    onPress={() => null}
                />
                <Spacer />
                <SettingsItem
                    title="Past Orders"
                    left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="history" />}
                    onPress={() => null}
                />
                <Spacer />
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="door" />}
                    onPress={() => null}
                />
            </List.Section>
        </TransparentSafeArea>
    );
}