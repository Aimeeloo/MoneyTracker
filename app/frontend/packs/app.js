import Vue from 'vue/dist/vue.esm.js'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      expand_type: '-',
      title: '',
      amount: '',
      description: '',
      items: [
        {id: 1, expand_type: '-', title: '買手機', amount: 20000, description: "Hello"},
        {id: 2, expand_type: '-', title: '買書', amount: 1000, description: "World"}
      ]
    },
    methods: {
      clear() {
        this.expand_type = '-'
        this.title = ''
        this.amount = ''
        this.description = ''
      },
      addItem(evt) {
        evt.preventDefault()
        let cc = {
          id: 3, 
          expand_type: this.expand_type, 
          title: this.title, 
          amount: this.amount, 
          description: this.description
        }
        this.items.unshift(cc)
        this.clear()
      }
    },
    computed: {
      total(){
        return this.items.reduce(
            function(iccu,item){
              if(item.expand_type == '-')
                {
                 return iccu - item.amount
                 }
              else{
                return iccu + item.amount
              }
              
        },0)
      }
    }
  })
})