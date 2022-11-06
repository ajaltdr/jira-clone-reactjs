import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { getItems, save, read } from "../../api";

const DragDropContextContainer = styled.div`
  //   border: 4px solid indianred;
`;
const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["todo", "inProgress", "done"];

const DragDrop = () => {
  const [elements, setElements] = React.useState(getItems());

  useEffect(() => {
    setElements(getItems());
  }, [elements]);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
    const data = read();
    data?.[0]?.tickets.splice(0, data?.[0]?.tickets?.length, ...listCopy?.todo);
    data?.[1]?.tickets.splice(
      0,
      data?.[1]?.tickets?.length,
      ...listCopy.inProgress
    );
    data?.[2]?.tickets.splice(0, data?.[2]?.tickets?.length, ...listCopy?.done);

    save(data);
  };
  // console.log(elements)
  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
};

export default DragDrop;
