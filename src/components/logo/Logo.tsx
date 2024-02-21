import React from "react";
import {
    Container,
    Header,
    LogoWrapper,
    SubTitle,
    Text,
    TimerIcon,
} from "./Logo.styles";

export const Logo = (): JSX.Element => (
    <LogoWrapper>
        <Container>
            <TimerIcon />
            <Text>
                <Header>Timę</Header>
                <SubTitle>Count time like a pro</SubTitle>
            </Text>
        </Container>
    </LogoWrapper>
);
