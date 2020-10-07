const menuLoaded = (newData) => {
    return {
        type: 'DATA_LOADED',
        payload: newData
    }
}

const menuRequested = () => {
    return {
        type: 'DATA_REQUESTED'
    }
}

const onItemAdded = (id) => {
    return {
        type: 'ADDED_ITEM',
        payload: id
    }
}

const onDeleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    onItemAdded,
    onDeleteItem
}