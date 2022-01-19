import { gql, useQuery } from "@apollo/client";
import Shift from "../../types/Shift";
//All shifts
export const GET_ALL_SHIFTS = gql`
    query {
        allShifts {
            id
            name
            date
            users {
                id
                username
                email
                firstName
                lastName
            }
            shiftType {
                id
                name
                start
                end
            }
        }
    }
`;

export interface ShiftData {
    allShifts: [Shift];
}

const shiftGql = {
    GET_ALL_SHIFTS,
};

export default shiftGql;
