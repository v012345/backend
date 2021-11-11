<template>
  <div class="hello">
    <div class="transform2D">
      <div class="box1">给大家转一个</div>
      <div class="box2">圆了</div>
      <div class="box3">阴影</div>
      <div class="box4">我有图片边框</div>
      <div class="box5">我也有图片边框</div>
      <div class="box6">我平移了</div>
      <div class="box7">我缩放了</div>
      <div class="box8">我弯了</div>
      <div class="box9">我玩花活呢</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  .transform2D {
    width: 100px;
    height: 75px;
    background-color: red;
    border: 1px solid black;

    .box1 {
      transform: rotate(30deg);
    }
    .box2 {
      border: 2px solid;
      border-radius: 25px;
    }
    .box3 {
      box-shadow: 10px 10px 5px #888888;
    }
    .box4 {
      border-width: 20px;
      border-image: url(assets/border.png) 30 30 round;
    }
    .box5 {
      border-width: 20px;
      border-image: repeating-linear-gradient(
          30deg,
          #4d9f0c,
          #9198e5,
          #4d9f0c 20px
        )
        60;
    }
    .box6 {
      transform: translate(50px, 100px);
    }
    .box7 {
      transform: scale(2, 3);
    }
    .box8 {
      transform: skew(30deg, 20deg);
    }
    .box9 {
      transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
    }
  }
}
</style>
