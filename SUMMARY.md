##  项目总结

- Vuex。主要由`state`、`mutations`、`actions`和`getters`构成（`modules`为模块化）。
    - `state`好比数据库的具体实现，要存什么东西就它管了；
    - `getters`好比可编程获取器，项目读取有些数据要排序过滤什么的，用它妥妥的;
    - `mutations`，字面意思“突变”，“更改 Vuex 的 store 中的状态的唯一方法是提交 mutation”，可以看出要commit提交才能改变store的状态。`mutations`定义的是状态改变的方法，但我们不能直接调用`mutations`，我们需要用commit提交或者转交给`actions`来处理。`mutations`方法中第一个参数是state状态对象，而第二个参数是一个payload负载，负载可以是变量或者对象。`mutations`的方法必须是同步事务！
    - `actions`，字面意思就是“动作”，但怎么动法请问`mutations`去，使用时需用`dispatch`调用`actions`。其有两个特点，只commit提交mutations方法，不能直接去修改store状态；可以提交**异步**操作。

----------

Vuex的运行流程

-  ` self.$store.dispatch('addevent', params) `：在Store对象中，通过dispatch派遣一个actions动作，动作的名称叫'addevent'；
- actions中，`addevent: ({ commit }, payload) => commit('ADDEVENT', {items: payload})`，找到明教'addevent'的动作，它带一个负载对象一并commit提交到`mutations`中；
- mutations中，`ADDEVENT (states, payload) { states.list = payload.items}`，找到名叫'ADDEVENT'的方法名，操作states状态的改变；
- views中，Vue框架根据state的改变自动更新视图views。
- 这样，一次完美的单向数据流执行完毕！

![action-w150](http://vuex.vuejs.org/zh-cn/images/flow.png)

----------

- 如果项目复杂，选择模块化的使用store管理。例如event是一个store，而theme又是一个sotre。最后在定义中使用`module`关键字载入这些store;

- 父子组件通讯。在父组件的template中`<nDialog :msg="tips"></nDialog>`；子组件中，`props: ['msg']`。这样就在子组件中就可以使用由父组件传递进来`msg`变量。原则就是，父组件定义子组件时，在标签里提前预留一个标签，然后在子组件中定义一个属性数组接收，但要用引号引起属性名！

- 子组件调用父组件事件。在子组件的`methods`里定义方法，执行`this.$emit('cancel')`。此时子组件就会冒泡发散`cancel`这个动作；我们又得现在父组件定义子组件写`v-on:sure="sureDialog"`，提前监听sure事件。这样子组件就可以调用到父组件的方法。

- Vuex中，可以把sates的状态封装读写放到一个数据访问接口中。

- localStore，话说这个HTML5 API真的很给力嘛。简单几个`getItem`，`setItem`和`removeItem`方法就搞定，其他真没什么说的。
