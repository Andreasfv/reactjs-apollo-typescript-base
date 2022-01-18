import ShiftTemplate from "./ShiftTemplate";
import User from "./User";

interface Shift {
    id?: number;
    name: string;
    date: Date;
    users: [User];
    shiftType: ShiftTemplate;
}

export default Shift;
