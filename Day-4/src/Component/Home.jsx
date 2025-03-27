import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialItems = [
  { id: "1", color: "bg-red-400" },
  { id: "2", color: "bg-blue-400" },
  { id: "3", color: "bg-green-400" },
  { id: "4", color: "bg-yellow-400" },
];

// Sortable Item Component
const SortableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`w-[200px] h-[200px] ${item.color} flex items-center justify-center text-white font-bold text-2xl rounded-lg shadow-lg cursor-grab`}
    >
      {item.id}
    </div>
  );
};

// Main Drag & Drop Component
const DragDropComponent = () => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    setItems(arrayMove(items, oldIndex, newIndex)); // Reorder items
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        <div className="flex gap-4 items-center justify-center h-screen">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DragDropComponent;
