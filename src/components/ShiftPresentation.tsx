import React from "react";
import Shift from "../types/Shift";
import User from "../types/User";
import styled from "styled-components";
interface Props {
    shift: Shift;
}

const ShiftContainer = styled.div`
    display: block;
    margin: 1em;
    border: 1px solid black;
    background-color: lightgray;
    padding: 1em;
`;

const TextDiv = styled.div`
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
    console.log(shift.id);
    return (
        <ShiftContainer key={shift.id}>
            <TextDiv>
                {shift.name} - {shift.shiftType.name} - {shift.date}
            </TextDiv>
            <div></div>
            <TextDiv>{`Skiftet varer fra ${shift.shiftType.start} til ${shift.shiftType.end}.`}</TextDiv>
            <TextDiv>De som jobber: </TextDiv>
            <hr></hr>
            <ul>
                {shift.users.length >= 1 ? (
                    shift.users.map((user) => (
                        <li key={user.id}>{name(user)}</li>
                    ))
                ) : (
                    <div>No Assigned users </div>
                )}
            </ul>
        </ShiftContainer>
    );
};

export default ShiftPresentation;
