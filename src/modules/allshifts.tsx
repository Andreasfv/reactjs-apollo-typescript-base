import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_SHIFTS, ShiftData } from "../util/queries/shifts";
import ShiftPresentation from "../components/ShiftPresentation";
interface Props {}

const AllShifts: React.FC<Props> = () => {
    const { loading, error, data } = useQuery<ShiftData>(GET_ALL_SHIFTS);

    if (loading) return <div>LOADING</div>;
    if (error) return <div>ERROR: {error.message}</div>;
    if (data) {
        if (data.allShifts && data.allShifts.length >= 1) {
            return (
                <div>
                    {data.allShifts.map((shift) => (
                        <ShiftPresentation shift={shift} />
                    ))}
                </div>
            );
        }

        <div>No shifts found</div>;
    }
    return <div>nani?</div>;
};

export default AllShifts;
