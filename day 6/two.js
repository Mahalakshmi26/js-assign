    class User {
        constructor(name, age,email) {
          this.name = name;
          this.age = age;
          this.email = email;
        }
    
        static greet(){
            console.log("Hello There");
        }
    
        login(){
            console.log(`${this.name} has logged in`);
            return this;
        }
        logout(){
            console.log(`${this.name} has logged out`);
            return this;
        }
        
        getDetails(){
            console.log(`Name is ${this.name}, email is ${this.email}`);
            return this;
        }
    
    }
    class Moderator extends User{
        constructor(name,age,email){
            super(name,age,email);
            this.luCoins = 0;
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        removeCoins(){
            this.luCoins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
       }
    class Admin extends Moderator{
        addCourse(user,course){
            user.course.push(course);
            console.log(user);
        }
     }
     let user1 = new User('xxx',23,'xxx@gmail.com')
let user2 = new User('Kkk',24,'kkk@gmai.com')
let mod = new Moderator('Bbb',24,'bbb@gmail.com','Moderator');
let admin = new Admin('Rrr',25,'rrr@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});
