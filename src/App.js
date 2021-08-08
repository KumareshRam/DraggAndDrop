import './App.css';
import Header from './DragAndDropDashboard/Header';
import list from './DragAndDropDashboard/List.json';
import React from 'react';
import '../src/DragAndDropDashboard/dragLayout.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DragList from './DragAndDropDashboard/DragList';

const listItems = [
  "list-1",
  "list-2",
  "list-3",
  "list-4"
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: '1',
      activeList: list,
    }
  }


  onDragEnd = (result) => {
    const { activeList } = this.state;
    const { destination, source, draggableId, type } = result;
    console.log('', destination, '', source, draggableId);

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = listItems;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = activeList[source.droppableId];
    const destinationList = activeList[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
          ...activeList,
          [sourceList.id]: destinationList,
      };
      this.setState({ activeList: newState });
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
          ...activeList,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
      };
      this.setState({ activeList: newState });
    }
  };

  hanleTabChange = (isActive) => {
    const { totalCount, all, onlyMyTickets, recentlyUpdated } = list;
    console.log(all, 'list.all', isActive)
    if (isActive === '1') {
      this.setState({ activeList: all });
    } else if (isActive === '2') {
      this.setState({ activeList: [] });
    } else {
      this.setState({ activeList: [] });
    }
    this.setState({ isActive });
  }
  render() {
    const { isActive, activeList } = this.state;
    console.log(activeList, 'dragListLayout', listItems.map((data) => (data + 1)))
    return (
      <div className="dragListLayout">
        <Header isActive={isActive} hanleTabChange={this.hanleTabChange} />
        <div>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="layout" type="list" direction="horizontal">
              {(provided) => (
                <div
                  // style={{ display: 'flex' }}
                  className="dragList"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {listItems.map((listId, index) => (
                    <DragList list={activeList[listId]} key={listId} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default App;
