<template>
  <body>
    <router-link to="/home">
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
      <div class="flowerpad">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
      </div>
    </router-link>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  margin: 300px auto;
  text-align: center;
}

$size: 150px;

$d: $size * 0.5;
$ang: 0.7071;
$a: $d * $ang;

.flowerpad {
  width: $size * 2;
  height: $size * 2;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.circ {
  position: absolute;
  width: $size;
  height: $size;
  border-radius: 50%;
  border: 10px solid map-get($Colorscheme, textaccent);
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // transform-origin: 50% 50%;
}

.flowerpad .circ {
  &:nth-child(1) {
    transform: translate($d, 0);
  }
  &:nth-child(2) {
    transform: translate(0, $d);
  }
  &:nth-child(3) {
    transform: translate($d * -1, 0);
  }
  &:nth-child(4) {
    transform: translate(0, $d * -1);
  }
  &:nth-child(5) {
    transform: translate($a, $a);
  }
  &:nth-child(6) {
    transform: translate($a, -$a);
  }
  &:nth-child(7) {
    transform: translate(-$a, $a);
  }
  &:nth-child(8) {
    transform: translate(-$a, -$a);
  }
}
.flowerpad:nth-child(2) {
  transform: rotate(0.1turn);
}

@for $i from 2 through 8 {
  .flowerpad:nth-child(#{$i}) {
    transform: rotate($i * 0.1turn);
    animation: turn-#{$i} 6s ease-in-out infinite alternate;
    animation-duration: 1.5s * $i;
    @keyframes turn-#{$i} {
      to {
        transform: rotate($i * (1 / 8) * 1urn);
      }
      from {
        transform: rotate(0);
      }
    }

    .circ {
      background: rgba(#000, 0.05);
    }
  }
}
</style>