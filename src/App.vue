<template>
  <div id="app" class="blue">

  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" src="../static/theme.scss"></style>
<style lang="scss" rel="stylesheet/scss">
  html, body, ul, li, input {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
  }

  input, button {
    -webkit-tap-highlight-color: transparent;
  }

  input[type=text] {
    -webkit-appearance: none;
  }

  button {
    padding: 7px 0;
    outline: none;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
    font: {
      size: inherit;
      family: inherit;
    }
    cursor: pointer;
  }

  body, #app {
    width: 100%;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 100%;
    padding: 0 10px;
    max-width: 800px;
    margin: auto;
    box-sizing: border-box;
    &.hide {
      display: none;
    }
  }

  .dialog-enter-active, .dialog-leave-active {
    transition: opacity .3s;
  }

  .dialog-enter, .dialog-leave-to {
    opacity: 0;
  }
</style>
