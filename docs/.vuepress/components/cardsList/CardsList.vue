<template>
  <nav class="cards-list">
    <div class="card" v-for="o in param" :key="o.name"  >
      <p class="title">{{o.name}}</p>
      <div class="desc">{{o.desc}}</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CardsList',
  props: {
    param: {
      type: Array,
      default: () => []
    }
  },
}
</script>
<style lang="less" scoped>
.cards-list {
  margin: 30px 0 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  .card {
    height: 160px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #000;
    background: #eee;
    background-image: linear-gradient(135deg, #92FFC0 10%, #002661 100%);
    border: solid 5px transparent;
    box-shadow: inset -3px -4px 20px 6px #000, 2px 5px 6px 0px #000;
    opacity: 0.9;
    cursor: pointer;
    transform: rotate3d(0, 1, 0.3, 10deg);
    transition: 0.4s;
    text-decoration: none;
    &:hover {
      transform: rotate3d(0, 1, -0.2, 20deg);
      text-decoration: none;
    }
    .title {
      color: #fff;
      background: linear-gradient(250deg, orangered, gold, lightgreen, cyan, dodgerblue, mediumpurple, hotpink);
      background-size: 10vw;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      padding: 0;
    }
    .desc {
      color: #333;
    }
  }
}
</style>

