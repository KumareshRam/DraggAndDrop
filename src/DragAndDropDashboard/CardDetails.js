import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './dragLayout.css';

class CardDetails extends React.Component {
    render() {
        const { cardData, index } = this.props;
        return (
            <>
                <Draggable draggableId={cardData.id} index={index}>
                    {(provided) => (
                        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                            < div className={`${cardData.isActive === true ? 'activeCard' : ''} card`} key={cardData.orderNo}
                            >
                                <div className="response">
                                    <span>{cardData.orderId}</span>
                                    <span>Response due</span>
                                </div>
                                <div className="orderNo">
                                    Order No: {cardData.orderNo}
                                </div>
                                <div className="items">
                                    {cardData.items}
                                </div>
                                <div className="baseLayer">
                                    <div className="leftSegment">
                                        <span>DUE:</span>
                                        <span><b>{cardData.dueDate}</b></span>
                                    </div>
                                    <div className="rightSegment">
                                        <div>ASSIGNED TO</div>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    )}

                </Draggable>
            </>
        );
    }
}
export default CardDetails;
