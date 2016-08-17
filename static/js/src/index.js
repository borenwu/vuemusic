/**
 * Created by Administrator on 2016/8/17.
 */
var Vue = require('vue')
var App = require('./components/app.vue')
var Player = require('./components/player/player.vue')

var main = new Vue({
    el: '#example',
    components: {
        app: App,
        player:Player
    }
})
