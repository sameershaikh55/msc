import React from "react";
import { useDrop } from "react-dnd";

type DropTargetProps = {
  onDrop: (id: string, index: number | undefined) => void;
  children: React.ReactNode;
  index?: number;
};

const DropTarget: React.FC<DropTargetProps> = ({ onDrop, children, index }) => {
  const [, dropRef] = useDrop({
    accept: "item",
    drop: (item: { id: string; index: number }) => onDrop(item.id, index),
  });

  return (
    <div style={{ height: "60px" }} ref={dropRef}>
      {children}
    </div>
  );
};

export default DropTarget;
