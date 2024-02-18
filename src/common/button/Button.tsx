import React, { ReactElement } from "react";
import { ButtonElement } from "./Button.styles";

type Props = {
    onClickHandle?: () => void;
    children?: string | ReactElement | ReactElement[];
};

export const Button = ({ onClickHandle, children }: Props) => (
    <ButtonElement onClick={onClickHandle}>{children}</ButtonElement>
);
