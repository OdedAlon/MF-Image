import {storageService} from './storage.service.js'
// window.storageService = storageService 

const STORAGE_KEY = 'img'

export default {
    query,
    save,
    remove
}

function query(filterBy = { } ) {
    return storageService.query(STORAGE_KEY)
}

function remove(imgId) {
    return storageService.remove(STORAGE_KEY, imgId)
}

function save(img) {
        return storageService.post(STORAGE_KEY, img)
}

// TEST DATA
// storageService.post(STORAGE_KEY, { "id": "123", "imgUrl": '', "user": "Funny" }).then(x => console.log(x))


