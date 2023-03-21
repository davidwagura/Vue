new Vue({
  el: '#app',
  data: {
    newItem: '',
    items: []
  },
  methods: {
  	changeMessage(){
      this.items.push(this.newItem)
      this.newItem = '';
  	}
  }
})