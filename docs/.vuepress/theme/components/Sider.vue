<template>
    <div class="layout-sider">
        <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark" 
        >  
          <a-sub-menu key="sub1">
            <span slot="title" >
                <a-icon type="mail" /><span>web</span>
            </span>
            <a-menu-item key="5"> <a href="/web/web/node">node</a> </a-menu-item>
            <a-menu-item key="6"> <a href="/web/web/markdown">markdown</a> </a-menu-item>
            <a-menu-item key="7"> <a href="/web/web/vuepresshight">vuepresshight</a> </a-menu-item> 
          </a-sub-menu> 
        </a-menu>
    </div>
</template>
<script> 
export default {
    name: 'Sider',
    data:() => {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped>

</style>