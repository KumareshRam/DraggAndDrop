import React from 'react';
import arrow from '../images/arrow.png';
import search from '../images/search.png';
import setting from '../images/setting.png';
import filter from '../images/filter.png';
import refresh from '../images/refresh.png';


class Header extends React.Component {
    render() {
        const { isActive, hanleTabChange } = this.props;
        return (
            <div className="headerLayout">
                <div className="leftLayer">
                    <div className="ticket">Tickets</div>
                    <button onClick={() => { hanleTabChange('1'); }} className={`${isActive === '1' ? 'activeBtn' : ''} button`}>ALL</button>
                    <button onClick={() => { hanleTabChange('2'); }} className={`${isActive === '2' ? 'activeBtn' : ''} button`}>ONLY MY TICKETS</button>
                    <button onClick={() => { hanleTabChange('3'); }} className={`${isActive === '3' ? 'activeBtn' : ''} button`}>RECENTLY UPDATED</button>
                    <div className="filter button">
                        <img className="filterIcon" src={filter} alt="filter" />
                    </div>
                    <div className="refresh button">
                        <img className="refreshIcon" src={refresh} alt="refresh" />
                    </div>
                </div>
                <div className="rightLayer">
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                        <img className="searchIcon" src={search} alt="search" />
                    </div>
                    <div className="config">
                        <img className="settingIcon" src={setting} alt="setting" />
                        <span>Configurations</span>
                    </div>
                    <div className="count">(0 - 30)</div>
                    <div className="button">
                        <img className="arrowLeft" src={arrow} alt="arrow" />
                    </div>
                    <div className="button">
                        <img className="arrowRight" src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
