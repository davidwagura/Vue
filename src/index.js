new Vue({
  el: '#app',
  data: {
    first_name: '',
    second_name: '',
    subject_math: 0,
    subject_english: 0,
    subject_kiswahili: 0,
    students: [],
    student:''
  },
  computed: {
   average() {
     let avg = 0;
     let sum = parseInt(this.subject_math) + parseInt(this.subject_english) + parseInt(this.subject_kiswahili);
     avg = Math.ceil(sum/3);
     return avg;
   }
  },
  methods: {
  	addtext(){
      const student = {
        firstname: this.first_name,
        secondname: this.second_name,
        mathematics: this.subject_math,
        english: this.subject_english,
        kiswahili: this.subject_kiswahili,
        average: this.average
      }
      this.students.push(student)

      // reset data
      this.resetData();


  	},

    resetData(){
      console.log('resetting')
      this.first_name = ''
      this.second_name = ''
      this.subject_math = ''
      this.subject_english = ''
      this.subject_kiswahili = ''
    }
  }
})
