class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(null);
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((acc, curr) => acc + curr);
      return sum / this.grades.length;
    }
  
    present() {
      const index = this.attendance.findIndex(el => el === null);
      if (index === -1) {
        console.log("Ви не можете більше відзначати відвідуваність");
        return;
      }
      this.attendance[index] = true;
    }
  
    absent() {
      const index = this.attendance.findIndex(el => el === null);
      if (index === -1) {
        console.log("Ви не можете більше відзначати відвідуваність");
        return;
      }
      this.attendance[index] = false;
    }
  
    getAttendancePercentage() {
      const presentCount = this.attendance.filter(el => el === true).length;
      const totalClasses = this.attendance.length;
      return presentCount / totalClasses;
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendancePercentage = this.getAttendancePercentage();
      if (averageGrade > 90 && attendancePercentage > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendancePercentage > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  
  const student1 = new Student("Kate", "Turanova", 2003);
  const student2 = new Student("Petro", "Good", 2000);
  const student3 = new Student("Oksana", "Kedrova", 2002);
  
  
  student1.present();
  student1.absent();
  student1.present();
  
  student2.present();
  student2.absent();
  student2.present();
  
  student1.grades.push(80, 90, 85, 95);
  student2.grades.push(95, 90, 100, 95);
  
  
  console.log(`${student1.firstName} ${student1.lastName}`);
  console.log(`Вік: ${student1.getAge()}`);
  console.log(`Середній бал: ${student1.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student1.getAttendancePercentage()}`);
  console.log(`Резюме: ${student1.summary()}`);
  
  console.log(`${student2.firstName} ${student2.lastName}`);
  console.log(`Вік: ${student2.getAge()}`);
  console.log(`Середній бал: ${student2.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student2.getAttendancePercentage()}`);
  console.log(`Резюме: ${student2.summary()}`);