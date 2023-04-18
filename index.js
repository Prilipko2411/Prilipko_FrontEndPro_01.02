//№1

function solution(str) {
    return new Set(str.replace(/[^a-z]/g, '')).size === 26;
  }
  
  
  console.log(solution("wyyga")); 
  console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
  console.log(solution("ejuxggfsts")); 
  console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); 
  console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv")); 
  console.log(solution("0123456789abcdefghijklmnop")); 
  
  
  //№2
  
  String.prototype.solution = function() {
    const sentence = this.replace(/,/g, '');
    const words = sentence.split(' ');
    const averageLength = words.reduce((total, word) => total + word.length, 0) / words.length;
    const result = words.filter(word => word.length > averageLength);
  
    return result;
  }
  
  console.log("This is a sample string".solution());
  console.log("Some another sample".solution()); 
  console.log("Do, do, do, do... do it!".solution()); 
  
  // что-то с ду не выходит. Не могу понять что не так
  
  //№3
  
  function User(email) {
    this.email = email;
  }
  
  User.prototype.setEmail = function(email) {
    this.email = email;
  }
  
  function VerifiedUser(email) {
    User.call(this, email); 
    this.verified = true; 
  }
  
  VerifiedUser.prototype = Object.create(User.prototype);
  VerifiedUser.prototype.constructor = VerifiedUser;
  
  function Guest(email) {
    User.call(this, email); 
  }
  
  Guest.prototype = Object.create(User.prototype);
  Guest.prototype.constructor = Guest;
  
  const database = {
    users: [], 
    password: "1234", 
    getAdminEmail: function() { 
      return "admin@icloud.com";
    }
  }
  
  database.getUsers = function() { 
    return this.users;
  }
  
  database.addUser = function(user) { 
    this.users.push(user);
  }
  
  database.getPassword = function() { 
    return this.password;
  }
  
  const adminEmail = database.getAdminEmail(); 
  console.log(adminEmail);
  
  const password = database.getPassword(); 
  console.log(password); 
  
  const newUser = new Guest("g@icloud.com"); 
  database.addUser(newUser); 
  
  const users = database.getUsers(); 
  console.log(users);
  