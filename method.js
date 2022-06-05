const student = {
    id: 101,
    money: 5000,
    name: 'Rj Kibriya',
    major: 'Math',
    isRich: 'false',
    subjects: ['english', 'economics', 'math 101', 'calculas'],
    bestFriend: {
        name: 'kundu',
        major: 'Math'
    },
    takeExam: function(){
        console.log(this.name, 'taking Exam');
    },
    treatDe: function(expanse, boksis){
        this.money = this.money - expanse - boksis;
        return this.money;
    },
}

student.takeExam();
const remaining1 = student.treatDe(900,100);
const remaining2 = student.treatDe(500,50);
console.log(remaining2);