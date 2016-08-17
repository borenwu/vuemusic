<template>
    <link rel="stylesheet" href="static/js/src/components/player/meplayer.min.css">
    <div id="player1" class="music"></div>
</template>
<style>

</style>

<script>
    import meplayer from 'E:\\python\\web\\flask\\music\\static\\js\\src\\components\\player\\meplayer.min.js'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },

        ready (){
            mePlayer({
                music: {
                    src: 'static/music/haohao.mp3',
                    title: '好好',
                    author: 'MAY DAY',
                    cover: 'static/img/haohao.jpg',
                },
                target: '.music'
            });

        }

    }
</script>
