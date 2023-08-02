import React from "react";
import { useDrag } from "react-dnd";

type DraggableItemProps = {
  id: string;
  name: any;
  planet?: any;
};

const DraggableItem: React.FC<DraggableItemProps> = ({ id, name, planet }) => {
  const [, dragRef] = useDrag({
    type: "item",
    item: { id, name },
  });

  return (
    <div
      className={`${
        (planet && "col-6 text-white f26 text-center letterspace") || ""
      }`}
      ref={dragRef}
      style={{ padding: "8px", cursor: "grab" }}
    >
      {name}
    </div>
  );
};

export default DraggableItem;
