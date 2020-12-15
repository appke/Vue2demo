const app = new Vue({
  el: '#app',
  data: {
    books: [{
      id: 1,
      name: '《算法导论》',
      date: '2006-09',
      price: 85.00,
      count: 1
    },
    {
      id: 2,
      name: '《UNIX编程艺术》',
      date: '2006-02',
      price: 59.00,
      count: 1
    },
    {
      id: 3,
      name: '《编程珠玑》',
      date: '2008-10',
      price: 39.00,
      count: 1
    },
    {
      id: 4,
      name: '《代码大全》',
      date: '2006-03',
      price: 128.00,
      count: 1
    },
    {
      id:5,
      name: '《动手深度学习》',
      date: '2019-07',
      price: 148.00,
      count: 1
    },
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '¥' + price.toFixed(2)
    },

    decrement(index) {
      this.books[index].count--
    },

    increment(index) {
      this.books[index].count++
    },

    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0.0
      for (let i=0; i< this.books.length; i++) {
        const book = this.books[i]
        totalPrice += book.price * book.count
      }
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }

})
