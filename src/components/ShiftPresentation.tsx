import React from "react";
import Shift from "../types/Shift";
import User from "../types/User";
import styled from "styled-components";
interface Props {
    shift: Shift;
}

const ShiftWrapper = styled.div`
    display: block;
    margin: 1em;
    border: 1px solid black;
    background-color: lightgray;
    padding: 1em;
`;

const TextDivs = styled.div`
    font-family: "Trebuchet MS", sans-serif;
    font-size: 14px;
`;
const ShiftPresentation: React.FC<Props> = ({ shift }) => {
    const name = (user: User) => {
        const name =
            user.firstName.length > 1 && user.lastName.length > 1
                ? `${user.firstName} ${user.lastName}`
                : user.username;
        return name;
    };

    return (
        <ShiftWrapper>
            <TextDivs>
                {shift.name} - {shift.shiftType.name} - {shift.date}
            </TextDivs>
            <div></div>
            <TextDivs>{`Skiftet varer fra ${shift.shiftType.start} til ${shift.shiftType.end}.`}</TextDivs>
            <TextDivs>De som jobber: </TextDivs>
            <hr></hr>
            {shift.users.length >= 1 ? (
                shift.users.map((user) => <TextDivs>{name(user)}</TextDivs>)
            ) : (
                <div>No Assigned users </div>
            )}
        </ShiftWrapper>
    );
};

export default ShiftPresentation;
