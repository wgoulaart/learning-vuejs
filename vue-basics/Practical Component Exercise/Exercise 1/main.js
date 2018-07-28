Vue.component('message', {
  template: `
    <article class="message">
      <div class="message-header">
        <p> {{ title }} </p>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,
  data() {
    return {}
  },
  props: {
    title: '',
    body: ''
  }
})

new Vue({
  el: "#root"
})
