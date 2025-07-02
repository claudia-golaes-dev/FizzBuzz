/*
PART 1
for (let index = 1; index <= 100; index++) {
    if(index % 5 == 0 && index % 3 == 0){
        console.log("FizzBuzz");
    } else if(index % 5 == 0 && index % 3 == 0){
        console.log("Buzz");
    } else if(index % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(index);
    }
}
*/

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// var array = ['apple', 'tree'];
// var ans = array.join('');

// console.log(ans);

let ans: string[] = [];

rl.question('What is the maximum number? ', (number) => {
    for (let index = 1; index <= Number(number); index++) {
        let verify: boolean = index % 3 == 0 || index % 5 == 0 || index % 7 == 0 || index % 11 == 0 || index % 13 == 0 || index % 17 == 0;
        if(verify){
            ans = [];
            if(index % 3 == 0){
                ans.push('Fizz');
            }
            if(index % 5 == 0){
                ans.push('Buzz');
            }
            if(index % 7 == 0){
                ans.push('Bang');
            }
            if(index % 11 == 0){
                ans = [];
                ans.push('Bong');
            }
            if(index % 13 == 0){
                const insertIndex: number = ans.findIndex(
                    (value:string) => value[0] == 'B'
                );
                ans.splice(insertIndex, 0, 'Fezz');
            }
            if(index % 17 == 0){
                if(ans.length != 0){
                    ans.reverse();
                } else {
                    console.log(index);
                }
            }
            var final = ans.join('');
            console.log(final);
        } else {
            console.log(index);
        }
    };
    rl.close();
});
