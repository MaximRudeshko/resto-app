import React, {Component} from 'react';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import MenuListItem from '../menu-list-item';
import {menuLoaded, menuRequested, onItemAdded} from '../../actions'

import './menu-list.scss';
import Spinner from '../spinner';

class MenuList extends Component {

    componentDidMount(){
        const {restoService, menuLoaded, menuRequested} = this.props;

        menuRequested();
        restoService.getMenuItems()
            .then(res => menuLoaded(res))
    }

    render() {

        const {menuItems, loading, onItemAdded} = this.props;

        if(loading){
            return <Spinner/>
        }

        
        return (
            <ul className="menu__list">
                {
                    menuItems.map(item => {
                        return <MenuListItem 
                            key = {item.id} 
                            menuItem = {item}
                            onItemAdded = {onItemAdded}
                        />
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispacthToProps =  {
    menuLoaded,
    menuRequested,
    onItemAdded
    /* return {
        menuLoaded: (newMenu) => {
            dispatch({
                type: 'DATA_LOADED',
                payload: newMenu
            })
        },
        menuRequested: () => {
            dispatch({
                type: 'DATA_REQUSTED'
            })
        }
    } */
}


export default WithRestoService()(connect(mapStateToProps, mapDispacthToProps)(MenuList))