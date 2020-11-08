import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games:[],
    user: null,
    loading: false,
    error: null,
  },
  mutations: {
    ADD_PRODUCT(state, payload){
      state.games.push(payload)
    },
    REMOVE_PRODUCT(state, game){
      state.games.splice(game, 1)
    },
    UPDATE_DATA(state, payload){
      const game = state.games.find(game => {
        return game.id === payload.id
      })
      if (payload.title){
        game.title= payload.title
      }
      if (payload.description){
        game.description= payload.description
      }
    },
    SET_USER(state, payload){
      state.user = payload
    },
    SET_LOADING (state, payload){
      state.loading = payload
    },
    SET_ERROR (state, payload){
      state.error = payload
    },
    CLEAR_ERROR (state){
      state.error = null
    },
    SET_LOADED_GAMES(state, payload){
      state.games = payload
    }

  },
  actions: {
    loadProducts({commit}) {
      commit('setLoading', true)
      firebase.database().ref('games').once('value')
        .then((data) => {
          const games = []
          const obj = data.val()
          for (let key in obj) {
            games.push({
              id:key,
              title:obj[key].title,
              genre:obj[key].genre,
              platform:obj[key].platform,
              imageUrl:obj[key].imageUrl,
              videoUrl:obj[key].videoUrl,
              description:obj[key].description,
              price:obj[key].price,

            })
          }
          commit('SET_LOADED_GAMES', games)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', true)
          }
        )
    },
    add_product({commit}, payload){
      const game = {
        title: payload.title,
        genre: payload.genre,
        platform: payload.platform,
        imageUrl: payload.imageUrl,
        videoUrl: payload.videoUrl,
        description: payload.description,
        price: payload.price,
      }
      let key
      firebase.database().ref('games').push(game)
        .then((data) => {
          key = data.key
          return key
        })
        .then(() => {
          commit('ADD_PRODUCT', {
            ...game,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      //reach out to firebase and store it
      
    },
    remove_product({commit},game){
      commit('REMOVE_PRODUCT',game)
    },
    updateData({commit}, payload){
      commit('SET_LOADING', true)
      const updateObj = {}
      if (payload.title){
        updateObj.title = payload.title
      }
      if (payload.description){
        updateObj.description = payload.description
      }
      firebase.database().ref('games').child(payload.id).update(updateObj)
        .then(() => {
          commit('SET_LOADING', false)
          commit('UPDATE_DATA', payload)
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADING', false)
        })
    },
    signUserUp({commit}, payload){
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      firebase.auth().createUserwithEmailandPassword(payload.email, payload.password)
        .then(
          user => {
            commit('SET_LOADING', false)
            const newUser = {
              id: user.uid
            }
            commit('SET_USER', newUser)
          }
        )
        .catch(
          error => {
            commit('SET_LOADING', false)
            commit('SET_ERROR', error)
            console.log(error)
          }
        )
    },
    logUserIn({commit}, payload){
      commit('SET_LOADING', false)
      commit('CLEAR_ERROR')
      firebase.auth().signInUserwithEmailandPassword(payload.email, payload.password)
      .then(
        user => {
          commit('SET_LOADING', false)
          const newUser = {
            id: user.uid
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          commit('SET_LOADING', false)
          commit('SET_ERROR', error)
          console.log(error)
        }
      )
    },
    autoSignIn({commit}, payload){
      commit('setUser', {id: payload.uid})
    },
    logout ({commit}){
      firebase.auth().signOut()
      commit('SET_USER', null)
    },
    clearError({commit}){
      commit('CLEAR_ERROR')
    }
  },
  getters: {
    games(state){
      return state.games
    },
    loadedGame(state){
      return(gameId) => {
        return state.games.find((game) => {
          return game.id === gameId
        })
      }
    },
    user(state){
      return state.user
    }
  },
  loading(state){
    return state.loading
  },
  error(state){
    return state.error
  }
  
})

export default store;
