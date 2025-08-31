import type { FC } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./action";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = () => {
  const dispatch = useDispatch();

  function increment() {
    // Dispatch the action correctly
    dispatch(happyButtonClicked);
  }

  return (
    <div>
      <h3>Are you happy?</h3>
      <button
        onClick={increment}
        className="bg-orange-700 hover:cursor-pointer px-3 py-1 rounded"
      >
        Yes
      </button>
    </div>
  );
};

<<<<<<< HEAD
=======
    return (
        <div>
            <h3>Are you happy?</h3>
            <button onClick={increment} className="bg-orange-700 hover:cursor-pointer px-3 py-1 rounded">Yes</button>
        </div>
    );
}

HappyIncrementor.defaultProps = {};

>>>>>>> d8cda2d7b45e722a99a286d8d152aed7bffcd71f
export default memo(HappyIncrementor);
