import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games:[
      { 
        id: 'ahbf123',
        imageUrl:'https://www.pdvg.it/wp-content/uploads/2020/07/Ghost-of-Tsushima-1.jpg',
        videoUrl:'https://www.youtube.com/embed/b_iU_gnn28U',
        title:'Ghost of Tshushima',
        genre:'Action-Adventure',
        platform:'PS4',
        description:'Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Featuring an open world, it follows Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan (1274). The game was released on July 17, 2020 for the PlayStation 4. Ghost of Tsushima received praise for its visuals and combat but was criticized for its open world activities.',
        price:'425',
      },
      { 
        id: 'ahrfe259',
        imageUrl:'https://www.ps4home.com/wp-content/uploads/2015/03/bloodborne-PS4-.jpg',
        videoUrl:'https://www.youtube.com/embed/fDELdR97OkU',
        title:'Bloodborne',
        genre:'Action/RPG',
        platform:'PS4',
        description:"Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4. It was released worldwide in March 2015. Bloodborne follows the player's character, a Hunter, through the decrepit Gothic, Victorian era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player's character unravels the city's mysteries while fighting beasts and cosmic beings. The game is played from a third-person perspective. Players control a customizable protagonist and the gameplay is focused on strategic weapons-based combat and exploration. Players battle varied enemies while using items such as swords and firearms, exploring different locations, interacting with non-player characters, and unraveling the city's mysteries. Bloodborne began development in 2012 under the working title of Project Beast. Bearing many similarities to the Souls series of games by the same developer and director, Bloodborne was inspired by the literary works of authors H. P. Lovecraft and Bram Stoker, as well as the architectural design of real world locations in places such as Romania and the Czech Republic. The decision by game director Hidetaka Miyazaki to create a new intellectual property (IP) and not another Souls game was made because he wanted to create something different. At the same time, Sony wanted a new IP to be made exclusively for the PlayStation 4. Bloodborne received critical acclaim, with praise being directed at its gameplay, particularly its high level of difficulty, sound design, Lovecraftian themes, and interconnected world design. Some criticism was directed at its technical performance at launch, which was improved with post-release updates. An expansion adding additional content, The Old Hunters, was released in November 2015. By the end of 2015, the game had sold over two million copies worldwide. Bloodborne was nominated for and won several awards, and has been cited as one of the greatest video games of all time. Some related media and adaptations have also been released, including a card game and comic book series.",
        price:'180',
      }
    ],
    user: null
  },
  mutations: {
    ADD_PRODUCT(state, payload){
      state.games.push(payload)
    },
    REMOVE_PRODUCT(state, game){
      state.games.splice(game, 1)
    },
    SET_USER(state, payload){
      state.user = payload
    }
  },
  actions: {
    add_product({commit}, payload){
      const game = {
        title: payload.title,
        genre: payload.genre,
        platform: payload.platform,
        imageUrl: payload.imageUrl,
        videoUrl: payload.videoUrl,
        description: payload.description,
        price: payload.price,
        id: 'rvrvrv888'
      }
      //reach out to firebase and store it
      commit('ADD_PRODUCT', game)
    },
    remove_product({commit},game){
      commit('REMOVE_PRODUCT',game)
    },
    signUserUp({commit}, payload){
      firebase.auth().createUserwithEmailandPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid
            }
            commit('SET_USER', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    logUserIn({commit}, payload){
      firebase.auth().signInUserwithEmailandPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
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
  
})

export default store;
