<template>

    <div class="login-page">
        <h1>Login</h1>
        <form class="form">
            <my-input type="text" placeholder="email address" v-model="user.email"/>
            <my-input type="password" placeholder="password" v-model="user.password"/>
            <my-button type="submit" @click.prevent="login" >login</my-button>

            <router-link to="/register"> <p class="message">Not registered? <a href="#">Create an account</a></p> </router-link>
            <router-link to="/forgot-password" > <p class="message">Forgot your password? <a href="#">Reset password</a></p> </router-link>
        </form>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    created() {
        this.checkUserState()
    },
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user)
        },
        checkUserState() {
            this.$store.dispatch('auth/setLoggedInstate', this.user)
        }
    }

}
</script>

<style lang="scss">
.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    display:flex;
}
/* The alert message box */
.alert {
    padding: 20px;
    background-color: #f44336; /* Red */
    color: white;
    margin-bottom: 15px;
}
/* The close button */
.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}
/* When moving the mouse over the close button */
.closebtn:hover {
    color: black;
}
</style>
