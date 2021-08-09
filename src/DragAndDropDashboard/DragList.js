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
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="column"
                    >
                        <div className="orderCount">{list.title}</div>
                        <Droppable droppableId={list.id}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    className="cardWrap"
                                    {...provided.droppableProps}
                                >
                                    <div ref={provided.innerRef} className="cardList" {...provided.droppableProps}>
                                        {list.cards.length > 0 ? list.cards.map((data, index) => (
                                            <CardDetails cardData={data} key={data.id} index={index} />
                                        )) : <div className="noResult">No Results Found</div>}
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )
                }
            </Draggable>
        );
    }
}
export default DragList;
