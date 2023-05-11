<template> 
    <div class="layout-wrapper">
    <a-layout>
      <a-layout-header> <Hearder /></a-layout-header>
      <a-layout>
        <a-layout-sider><Sider /></a-layout-sider>
        <a-layout-content> <Content/></a-layout-content>
      </a-layout>
    </a-layout>
   
  </div>
</template>
<script>
// import Page from "@theme/components/Page.vue";
import Hearder from "@theme/components/Hearder.vue";
import Sider from "@theme/components/Sider.vue"; 
export default {
  name: "Layout",
  components: {
    // Page,
    Hearder,
    Sider 
  },
  data: () => {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="less">
.layout-wrapper { 
    >.ant-layout {
        display: flex;
        height: 100vh;
        min-height: 100vh; 
    }
    .ant-layout-content {
      max-width: 960px;
      margin: 0 auto;
    }
}
</style>
