import React from "react";
import useMedia from "../util/hooks/media";

interface Props {}

const FrontPage: React.FunctionComponent<Props> = () => {
    const [mobile, desktop] = useMedia();
    console.log(mobile, desktop);
    console.log("frontpage was initiated");
    return <div>FRONTPAGE WOOP</div>;
};

export default FrontPage;
