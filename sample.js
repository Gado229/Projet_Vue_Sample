new Vue({
  el: '#app',
  data: {
    name: 'A Mountain B Lang',
    course: 'Web Engineer coursee',
    acceptancePeriod: 'January 2019 Issue',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Hiroyoshi Noro', course: 'Machine study course', acceptancePeriod: 'January 2019 Issue' },
      { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer coursee', acceptancePeriod: 'November 2017 Issue' },
      { id: 3, name: 'Saito together', course: 'Web Engineer coursee', acceptancePeriod: 'November 2017 Issue' }
    ]
  },
  methods: {
    addStudent: function() {
      this.students.push({
        id: this.defaultLastId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod,

      });

      this.name = '';
      this.course = '';
      this.acceptancePeriod ='';
    }
  }
})
