const stringas = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
const stringas2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
function CountTheString(str) {
    let x = str.length;
    // console.log("X is " + x)
    let t = 0;
    // console.log("T is " + t)
    let num = 0;
    // console.log("num is " + num)
    for (let i = 0; i < x; i++) {
        // console.log("I is " + i)
        // console.log("T is " + t + " and " + "num is " + num);
        if (str[i] == "'") {
            // console.log(str[i]);
            t++;
            continue;
        }
        else {
            if (str[i] != " " & i + 1 != x) {
                // console.log(str[i] + " letter");
                t++;
                continue;

            }
            else if (t <= 5) {
                // console.log(str.substring(i - t, i+1));
                num++;
                t = 0;
            }
            else {
                t = 0;
            }
        }


    }
    return num;
}

function Count5Letter(str){
    let string = str.split(' ');
    let strarray = string.filter(function(word){
        return word.length <= 5;
    });
    return strarray.length;
}

console.log("Result is " + CountTheString(stringas));
console.log("Result is " + CountTheString(stringas2));

console.log("Result is " + Count5Letter(stringas));
console.log("Result is " + Count5Letter(stringas2));
let a = 0;
for (let i = 0; i < 10; i++) {
    console.log(a);
    a+=2;
}
