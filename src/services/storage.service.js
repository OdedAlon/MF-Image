export const storageService = {
    query,
    save,
    get,
    post,
    put,
    remove
}

function query(key) {
    var entities = _load(key)
    return Promise.resolve(entities)
}

function save(key, entities) {
    _save(key, entities)
    return Promise.resolve(entities)
}

function get(key, entityId) {
    return query(key)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(key, newEntity) {
    // newEntity._id = _makeId()
    return query(key)
        .then(entities => {
            entities.push(newEntity)
            _save(key, entities)
            return newEntity
        })
}

function put(key, updatedEntity) {
    return query(key)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(key, entities)
            return updatedEntity
        })
}

function remove(key, entityId) {
    return query(key)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(key, entities)
        })
}


function _load(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : [] 
}

function _save(key, val) {
    localStorage[key] = JSON.stringify(val) 
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
