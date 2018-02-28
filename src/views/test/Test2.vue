<template>
  <div class="test">
    <h3>test2</h3>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import test2 from "@/service/test/test2";
export default {
  name: "Test2",
  data() {
    return {
      msg: "test2 的内容"
    };
  },
  created() {
    test2().then(res => {
      // 数据操作
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
