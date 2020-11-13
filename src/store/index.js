import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games: [],
    user: null,
    loading: false,
    error: null,
    basketItems: [],
  },
  mutations: {
    ADD_PRODUCT(state, payload) {
      state.games.push(payload)
    },
    REMOVE_PRODUCT(state, gameId) {
      let games = state.games.filter(g => g.id != gameId)
      state.games = games
    },
    UPDATE_DATA(state, payload) {
      const game = state.games.find(game => {
        return game.id === payload.id
      })
      if (payload.title) {
        game.title = payload.title
      }
      if (payload.description) {
        game.description = payload.description
      }
      if (payload.genre) {
        game.genre = payload.genre
      }
      if (payload.platform) {
        game.platform = payload.platform
      }
      if (payload.imageUrl) {
        game.imageUrl = payload.imageUrl
      }
      if (payload.videoUrl) {
        game.videoUrl = payload.videoUrl
      }
      if (payload.price) {
        game.price = payload.price
      }
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    },
    CLEAR_ERROR(state) {
      state.error = null
    },
    SET_LOADED_GAMES(state, payload) {
      state.games = payload
    },
    addBasketItems: (state, basketItems) => {
      if (basketItems instanceof Array) {
        basketItems.forEach(game => {
          if (state.basketItems.find(itemInArray => game.title === itemInArray.title)) {
            game = state.basketItems.find(itemInArray => game.title === itemInArray.title);
            game.quantity++;
            game.messages++;
          }
          else {
            state.basketItems.push({
              title: game.title,
              price: game.price,
              quantity: 1,
              messages: 1,
            });
          }
        });
      }
    },

  },
  actions: {
    loadProducts({ commit }) {
      commit('SET_LOADING', true)
      firebase.database().ref('games').once('value')
        .then((data) => {
          const games = []
          const obj = data.val()
          for (let key in obj) {
            games.push({
              id: key,
              title: obj[key].title,
              genre: obj[key].genre,
              platform: obj[key].platform,
              imageUrl: obj[key].imageUrl,
              videoUrl: obj[key].videoUrl,
              description: obj[key].description,
              price: obj[key].price,

            })
          }
          commit('SET_LOADED_GAMES', games)
          commit('SET_LOADING', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('SET_LOADING', false)
          }
        )
    },
    add_product({ commit }, payload) {
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
    removeProduct({ commit }, game) {
      commit('SET_LOADING', true)
      firebase.database().ref('games').child(game.id).remove()
        .then(() => {
          commit('SET_LOADING', false)
          commit('REMOVE_PRODUCT', game.id)
        })
    },
    updateData({ commit }, payload) {
      commit('SET_LOADING', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.genre) {
        updateObj.genre = payload.genre
      }
      if (payload.platform) {
        updateObj.platform = payload.platform
      }
      if (payload.imageUrl) {
        updateObj.imageUrl = payload.imageUrl
      }
      if (payload.videoUrl) {
        updateObj.videoUrl = payload.videoUrl
      }
      if (payload.price) {
        updateObj.price = payload.price
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
    /*  signUserUp({commit}, payload){
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
     },*/
    logUserIn({ commit }, payload) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
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
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid })
    },
    logout({ commit }) {
      firebase.auth().signOut()
      commit('SET_USER', null)
    },
    clearError({ commit }) {
      commit('CLEAR_ERROR')
    }
  },
  getters: {
    games(state) {
      return state.games
    },
    loadedGame(state) {
      return (gameId) => {
        return state.games.find((game) => {
          return game.id === gameId
        })
      }
    },
    slideShow(state) {
      return state.games.slice(0, 6)
    },
    user(state) {
      return state.user
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    },
    getBasketItems(state) {
      return state.basketItems
    }
  },


})

export default store;
