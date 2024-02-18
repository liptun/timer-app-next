import React, { ReactElement } from "react";
import { ButtonElement } from "./Button.styles";

type Props = {
    onClickHandle?: () => void;
    children?: string | ReactElement | ReactElement[];
    disabled?: boolean;
};

export const Button = ({
    onClickHandle,
    children,
    disabled = false,
}: Props) => (
    <ButtonElement onClick={onClickHandle} disabled={disabled}>
        {children}
    </ButtonElement>
);
