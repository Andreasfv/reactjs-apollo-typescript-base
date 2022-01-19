import ShiftType from "./ShiftType";
import User from "./User";

export default interface Shift {
    id?: number;
    name: string;
    date: Date;
    users: [User];
    shiftType: ShiftType;
}
