<template>
  <div :class="$style.component1">
    {{message}}
  </div>
</template>

<script>
export default {
    beforeCreate() {
        console.log('component2 beforeCreate !')
    },
    created() {
        console.log('component2 created !');
    },
    data() {
        return {
            message: "component2 is created!"
        }
    }
}
</script>

<style lang="less" module>
:local(.component1) {
    color: blue;
}
</style>
