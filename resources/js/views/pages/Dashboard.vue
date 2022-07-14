<template>
    <nav>
        <ul class="navigation">
            <li><a href="">Profile</a></li>
            <li><a href="">Settings</a></li>
            <li><a href="">My book</a></li>
        </ul>
        <div >
            <my-button  class="button" @click="logout">Logout</my-button>
        </div>
    </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Dashboard",
    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn'
        })
    },
    methods: {
        ...mapActions({
            logout: 'auth/logout'
        })
    }
}
</script>

<style lang="scss">
nav {
    margin: 30px;
    background-color: var(--color-gray-dark);
}

.navigation {
    list-style: none;
    float: left;

    li {
        display: inline-block;
        margin-left: 30px;

        &:first-child {
            margin: 0;
        }
    }
}

.buttons {
    float: right;
}
</style>

