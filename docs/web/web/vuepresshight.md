## vuepress 高阶用法

### 1.组件
```bash 
<cardsList-CardsList :param="list" />
```
<cardsList-CardsList :param="list" />

<a-button type="primary">Primary Button</a-button>


<script>
export default {
    data() {
        return {
            list: [
                {
                name: "温馨一眼",
                desc: "更好的生活", 
                },
                {
                name: "温馨二眼",
                desc: "更好的生活2"
                }
            ]
        }
    }
}
</script>
