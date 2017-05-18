<template>
  <div id="app" :class="[getTheme]">
    <nHeader @tools="changePages"></nHeader>
    <section class="container" :class="{'hide': table}">
      <nAdd></nAdd>
      <nList></nList>
      <nSidebar :is-show="tools"
                @cleardialog="clearData"
                @opentable="table = true; tools = false"
                @opentheme="theme = true; tools = false"
      ></nSidebar>
      <!--这里子组件通过$emit分发事件cleardialog执行clearData方法-->
    </section>
    <transition name="dialog">
      <nDialog v-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></nDialog>
    </transition>
    <nTable @deldialog="delData" :is-show="table" @close="table = false"></nTable>
    <nTheme :is-show="theme" @close="theme = false"></nTheme>
  </div>
</template>

<script>
  import nHeader from './components/header.vue'
  import nAdd from './components/event_add.vue'
  import nList from './components/event_list.vue'
  import nSidebar from './components/sidebar.vue' // 此时，nSidebar是App的子组件
  import nDialog from './components/dialog.vue'
  import nTable from './components/event_table.vue'
  import nTheme from './components/theme.vue'

  export default {
    name: 'app',
    data () {
      return {
        tools: false,
        dialog: false, // 默认不显示弹窗
        table: false,
        theme: false,
        dialog_type: '',
        tips: '',
        del_info: {
          index: 0,
          id: 0
        }
      }
    },
    computed: {
      getTheme () {
        return this.$store.getters.getTheme
      }
    },
    components: {
      nHeader,
      nAdd,
      nList,
      nSidebar,
      nDialog,
      nTable,
      nTheme
    },
    methods: {
      changePages () { // 在点左上角时，显示窗体功能。
        if (this.table) {
          this.table = !this.table
        } else if (this.theme) {
          this.theme = !this.theme
        } else {
          this.tools = !this.tools
        }
      },
      clearData () {
        this.tools = false
        this.dialog = true
        this.dialog_type = 'clear'
        this.tips = '清空后无法恢复，确认清空吗？'
      },
      delData (index, id) {
        console.log(id)
        this.dialog = true
        this.dialog_type = 'del'
        this.tips = '删除后无法恢复，确认删除吗？'
        this.del_info = {
          index: index,
          id: id
        }
      },
      sureDialog () {
        const self = this
        switch (self.dialog_type) {
          case 'clear': // 如果是清除数据
            self.$store.dispatch('clearevent') // 使用store分发action
            break
          case 'del':
            self.$store.dispatch('delevent', self.del_info) // 拿本组件自身data里的属性
            break
        }
        this.dialog = false // 最后隐藏窗口
      }
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
