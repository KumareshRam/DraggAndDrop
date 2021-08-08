import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import CardDetails from './CardDetails';
import './dragLayout.css';

class DragList extends React.Component {
    render() {
        const { list, index } = this.props;
        return (
            <Draggable draggableId={list.id} index={index}>
                {(provided) => (
                    <div {...provided.draggableProps} ref={provided.innerRef} className="orders">
                        <div
                            {...provided.dragHandleProps}
                        >
                            <div className="column">
                                <div className="orderCount">{list.title}</div>
                                <Droppable droppableId={list.id}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            className="cardWrap"
                                            {...provided.droppableProps}
                                        >
                                            <div ref={provided.innerRef} className="cardList" {...provided.droppableProps}>
                                                <CardDetails cardData={list.cards}
                                                />
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
}
export default DragList;
