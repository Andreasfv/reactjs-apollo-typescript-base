import Shift from "./Shift";

interface User {
    id?: number | string;
    username: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    shifts: [Shift];
    groups: [string];
}

export default User;
