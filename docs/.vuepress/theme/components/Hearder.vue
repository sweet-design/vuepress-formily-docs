<template>
  <div class="layout-hearder">
    <a-row>
      <a-col :span="12"> </a-col>
      <a-col :span="12">
        <a-button type="link">
          <a href="/">Home</a>
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "Hearder",
  data: () => {
    return {
      current: "",
    };
  },
  methods: {
    handleClick() {
      // this.$router.push({path: '/a'})
    },
  },
};
</script>
<style scoped  lang="less">
.layout-hearder {
  height: 64px;
  line-height: 64px;
  .ant-col {
    height: 64px;
    line-height: 64px;
    .ant-menu {
      height: 64px;
      line-height: 64px;
    }
  }
}
</style>