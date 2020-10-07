import React from 'react';
import {connect} from 'react-redux';
import {onDeleteItem} from '../../actions'
import './cart-table.scss';

const CartTable = ({items, onDeleteItem}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {id, title, price, url, category} = item
                        return(
                            <div key = {id} className="cart__item">
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick = {() => onDeleteItem(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {items}
}

const mapDispatchToProps = {
    
        onDeleteItem
    
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);