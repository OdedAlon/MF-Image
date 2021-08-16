import imgService from '@/services/img.service' 
import axios from "axios" 

export default {
    state: {
        imgs: null,
        savedImgs: null,
        searchBy: '',
    },
    getters: {
        imgs(state) {
            return state.imgs
        },
        savedImgs(state) {
            return state.savedImgs
        },
        searchBy(state) {
            return state.searchBy
        },
    },
    mutations: {
        setSavedImgs(state, { savedImgs }) {
            state.savedImgs = savedImgs
        },
        setImgs(state, { imgsData }) {
            state.imgs = imgsData
        },
        setSearch(state, { searchBy }) {
            state.searchBy = searchBy.name
        },
        saveImg(state, { img }) {
            console.log(img) 
            state.savedImgs.push(img)
        },
        removeImg(state, { id }) {
            const idx = state.savedImgs.findIndex(img => img.id === id) 
            state.savedImgs.splice(idx, 1) 
        },
    },
    actions: {
        async loadSavedImgs(context) {
            try {
                const savedImgs = await imgService.query() 
                context.commit({ type: 'setSavedImgs', savedImgs }) 
            } catch (err) {
                console.log(err) 
                throw err 
            }
        },
        async loadImgs(context, { currPage = 1}) {
            if (!context.state.searchBy) return null
            try {
                let searchBy = context.state.searchBy
                let API_KEY = '22934537-ab943f09e48b063de94cc2f15'
                let imgs = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchBy}&image_type=photo&page=${currPage}&per_page=30`)
                imgs = imgs.data.hits
                let imgsData = []
                for (let i = 0; i < imgs.length; i++) {
                    imgsData.push({id:imgs[i].id, imgUrl: imgs[i].webformatURL, user: imgs[i].user})
                }
                context.commit({ type: 'setImgs', imgsData }) 
            } catch (err) {
                console.log(err) 
            }
        },
        async saveImg({ commit }, { img }) {
            try {
                const savedImg = await imgService.save(img) 
                commit({ type: 'saveImg', img: savedImg }) 
            } catch (err) {
                console.log(err) 
                throw err 
            }
        },
        async removeImg(context, { id }) {
            try {
                await imgService.remove(id) 
                context.commit({ type: 'removeImg', id }) 
            } catch (err) {
                console.log(err) 
                throw err 
            }
        },       
    },
} 