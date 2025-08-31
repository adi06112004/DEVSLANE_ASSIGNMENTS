import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {

    const sadCount = useSelector(sadCountSelector);

    return (
        <div className="bg-blue-700 px-8 py-4">
            You were Sad {sadCount} times
        </div>
    );
}

SadTracker.defaultProps = {};

export default memo(SadTracker);