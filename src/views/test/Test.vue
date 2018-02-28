<template>
  <div class="test">
    <h3>test1</h3>
    <div>{{msg}}</div>
    <div>{{level | prizeLevel}}</div>
  </div>
</template>

<script>
import { test } from "@/service/test/test";
import { prizeLevel } from "@/filters/index";
export default {
  name: "Test1",
  data() {
    return {
      msg: "test1 的内容",
      level: 2
    };
  },
  created() {
    test().then(
      res => {
        // 数据操作
        console.log(res);
      },
      err => {
        if (err.status === 404) {
          // 异常处理
        }
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
