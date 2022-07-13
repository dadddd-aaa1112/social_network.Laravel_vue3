<template>
    <div class="container">
        <p>vue word</p>
    </div>
    <my-button>
        <template v-slot:button>Регистрация</template>
    </my-button>

    <my-input></my-input>
</template>

<script>

export default {
    name: "Container.vue",

};
</script>

<style scoped lang="scss">
.container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: var(--color-gray-light);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;

    @media only screen and (max-width: 75rem) {
        margin: 0;
        max-width: 100%;
        width: 100%;
    }
}
</style>
