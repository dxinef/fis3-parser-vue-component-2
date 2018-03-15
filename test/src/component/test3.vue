<template>
  <div class="component1">
    <span>{{message}}</span>
  </div>
</template>

<script>
module.exports = {
    created() {
        console.log('component3 created !');
    },
    data: function() {
        return {
            message: "component3 is created!"
        }
    }
}
</script>

<style lang="less">
.component1 {
    color: orange; transform: scale(1.1);
    span {
        font-style: italic;
    }
}
</style>
