<template>
  <div class="component1">
    {{message}}
  </div>
</template>

<script>
export default {
    beforeCreate: [
      function() {
        console.log(1)
      },
      function() {
        console.log(2)
      }
    ],
    created() {
      console.log('component1 created !');
    },
    data() {
      return {
        message: "component1 is created!"
      }
    }
}
</script>

<style scoped>
.component1 {
    color: red; background: linear-gradient(to left, #000, #ccc);
}
.component1:before {
  content: ""; display: block; width: 288px; height: 163px; background: url(../img/1.png);
}
</style>
