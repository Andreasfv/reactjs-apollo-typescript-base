import Shift from "./Shift";

interface User {
    id?: number | string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    shifts: [Shift];
}

export default User;
