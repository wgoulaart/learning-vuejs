Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks" :key="task.id"> {{ task.message }} </task>
    </div>
  `,

  data() {
    return {
      tasks: [
        { message: 'Go to the store' },
        { message: 'Go to the bank' },
        { message: 'Go to the park '}
      ]
    }
  }

})

Vue.component('task', {
  template: '<li> <slot></slot> </li>'
})

new Vue({
  el: '#root'
})
