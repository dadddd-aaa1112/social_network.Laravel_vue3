<template>
    <button class="btn">

        <slot name="button"></slot>
    </button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style scoped lang="scss">
.btn {
    background-color: var(--color-primary-light);
    color: #fff;
    border-radius: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    padding: 1.8rem 3rem;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        background-color: var(--color-primary-dart);
    }
}
</style>
