// // // // var length=15;
// // // // var width=10;
// // // //
// // // // function area(length,width) {
// // // //   return length*width;
// // // // }
// // // // var area1=area(23,21);
// // // // console.log(area1);
// // // var student={
// // //   firstName:"john",
// // //   lastName:"doe",
// // //   age:23
// // //
// // // };
// // // console.log(student);
// //
// // var stu0 = new Object();
// // stu0.firstName="ali";
// // stu0.age=23;
// // stu0.lastName="As";
// //
// //  var stu1 = new Object();
// // stu1.firstName="abbas";
// //  stu1.age=24;
// //  stu1.lastName="Asad";
//
// // var student2={
// //  firstName:"john",
// //   lastName:"doe",
// //   age:23,
// //   greeting: function() {
// // return "Hi"+this.firstName+this.lastName;
// //   }
// // };
//
// //  console.log(student2.greeing());
// //  student2.firstName="Daniyal";
// // console.log(student2.firstName);
// // // var student=[];
// // student.push(stu0);
// // student.push(stu1);
// // student.push(student2);
// // console.log(student);
// var arr=[];
// function student(first,last,age){
//   this.firstName=first;
//   this.lastName=last;
//   this.age=age;
//   this.greeting=function() {
//     return "Hi"+this.firstName+this.lastName+age;
//   };
// }
// var s1=new student("Ali","ahmad",23);
// var s2=new student("Abbas","ahmad",23);
// var s3=new student("Ahsan","ahmad",23);
// arr.push(s1,s2,s3);
// // arr.push(s2);
// // arr.push(s3);
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i].greeting());
//  }
// // console.log(arr);
// // console.log(s1.greeting());
