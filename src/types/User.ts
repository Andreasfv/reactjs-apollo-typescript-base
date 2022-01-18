import Shift from "./Shift";

interface User {
    id?: number;
    username: string;
    firstName: string;
    lastName: string;
    enmail: string;
    shifts: [Shift];
}

export default User;
