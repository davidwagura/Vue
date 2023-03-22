new Vue({
  el: '#app',
  data: {
    first_name: '',
    second_name: '',
    subject_math: 0,
    subject_english: 0,
    subject_kiswahili: 0,
    items: []
  },
  computed: {
   average() {
     let avg = 0;
     // let sum = v1+v2+v3
     let sum = parseInt(this.subject_math) + parseInt(this.subject_english) + parseInt(this.subject_kiswahili);
     avg = Math.ceil(sum/3);
     return avg;
   }
  },
  methods: {
  	addtext(){
      // console.log(this.first_name);
      // console.log(this.second_name);
      console.log(this.subject_math);
      console.log(this.subject_english);
      console.log(this.subject_kiswahili);
      console.log(this.average);
  	}
  }
})
