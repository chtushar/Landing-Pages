// new Vue({
//   el: '#app',
//   data: {

//     cubes: [
//       {title: red, id: 1, hex: '#F80F0F' },
//       {title: green, id: 2, hex:'#F1FA00' },
//       {title: yellow, id: 3, hex: '#003CFF' },
//       {title: blue, id: 4, hex: '#09FF00' }
//     ]
//   }
// })

new Vue({
  el: '#app', //To select element on which operations will be performed
  data: {
    title: 'Becoming a Vue Ninja',
    cubes: [
    {title: 'red', id: 1, hex: '#F80F0F' },
    {title: 'yellow', id: 2, hex:'#F1FA00'},
    {title: 'blue', id: 3, hex: '#003CFF'},
    {title: 'green', id: 4, hex: '#09FF00'}
  ],
    sides: ['front','top','bottom','back','left','right'],
  },
  methods: {
    //To add all the functions use methods object
  },
});
