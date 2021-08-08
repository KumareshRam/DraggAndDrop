import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './dragLayout.css';

class CardDetails extends React.Component {
    render() {
        const { cardData } = this.props;
        return (
            <>
                {cardData.length > 0 ? cardData.map((data, index) => (
                    <Draggable draggableId={data.id} index={index}>
                        {(provided) => (
                            <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                < div className={`${data.isActive === true ? 'activeCard' : ''} card`} key={data.orderNo}
                                >
                                    <div className="response">
                                        <span>{data.orderId}</span>
                                        <span>Response due</span>
                                    </div>
                                    <div className="orderNo">
                                        Order No: {data.orderNo}
                                    </div>
                                    <div className="items">
                                        {data.items}
                                    </div>
                                    <div className="baseLayer">
                                        <div className="leftSegment">
                                            <span>DUE:</span>
                                            <span><b>{data.dueDate}</b></span>
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
                ))
                    : <div className="noResult">No Results Found</div>}
            </>
        );
    }
}
export default CardDetails;
