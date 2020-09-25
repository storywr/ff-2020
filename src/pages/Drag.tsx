import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'

import Banner from '@/widgets/Banner'
import Content from '@/widgets/Content'
import RailItem from '@/widgets/RailItem'

const getItems = (count: number) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `Item #${k}`
  }));

const reorder = (list: any[], fromIndex: number, toIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);

  return result;
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 0.75rem;

  > * {
    margin-bottom: 0.375rem;
  }
`

const Item = styled.div`
  padding: 1rem;

  background-color: palevioletred;
  color: white;

  font-weight: bold;
`

const Drag = () => {
  const [items, setItems] = useState(getItems(10))

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    setItems(reorder(items, result.source.index, result.destination.index))
  }

  const handleInsert = (index: number) => {
    setItems([...items.slice(0, index), { id: `new-item-${Math.random()}`, content: 'New item' }, ...items.slice(index)])
  }

  return (
    <>
      <Banner titleText='Drag example' />
      <Content maxWidth={48}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='test'>
            {(droppable, droppableSnapshot) => (
              <List ref={droppable.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggable) => (
                      <RailItem
                        ref={draggable.innerRef}
                        {...draggable.draggableProps}
                        hideToolbar={droppableSnapshot.isDraggingOver && droppableSnapshot.draggingOverWith !== item.id}
                        toolbar={
                          <Flex align='flex-end' direction='column' gutter={0.125}>
                            <Flex gutter={0.125}>
                              <IconButton padding={1}>
                                <Icon icon={{ iconName: 'pen', prefix: 'far' }} />
                              </IconButton>
                              <IconButton padding={1} {...draggable.dragHandleProps}>
                                <Icon icon={{ iconName: 'arrows-v', prefix: 'far' }} />
                              </IconButton>
                            </Flex>
                            <Flex gutter={0.125}>
                              <IconButton padding={1} onClick={() => handleInsert(index + 1)}>
                                <Icon icon={{ iconName: 'plus', prefix: 'far' }} />
                              </IconButton>
                              <IconButton padding={1}>
                                <Icon icon={{ iconName: 'ellipsis-h', prefix: 'far' }} />
                              </IconButton>
                            </Flex>
                          </Flex>
                        }
                      >
                        <Item>
                          {item.content}
                        </Item>
                      </RailItem>
                    )}
                  </Draggable>
                ))}
                {droppable.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Content>
    </>
  )
}

export default Drag
