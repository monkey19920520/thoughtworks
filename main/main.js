module.exports = function main(number) {
    var numberList = [
                   //number 0-9
                   {
                     up: '._.',
                     middle: '|.|',
                     down: '|_|',
                   },
                   {
                     up: '...',
                     middle: '..|',
                     down: '..|',
                   },
                   {
                     up: '._.',
                     middle: '._|',
                     down: '|_.',
                   },
                   {
                     up: '._.',
                     middle: '._|',
                     down: '._|',
                   },
                   {
                     up: '...',
                     middle: '|_|',
                     down: '..|',
                   },
                   {
                     up: '._.',
                     middle: '|_.',
                     down: '._|',
                   },
                   {
                     up: '._.',
                     middle: '|_.',
                     down: '|_|',
                   },
                   { //7
                     up: '._.',
                     middle: '..|',
                     down: '..|',
                   },
                   {
                     up: '._.',
                     middle: '|_|',
                     down: '|_|',
                   },
                   {
                     up: '._.',
                     middle: '|_|',
                     down: '..|',
                   }
                    ];

    var numbers = number.split("");
    var first = parseInt(numbers[0]);
    var up = numberList[first].up;
    var middle = numberList[first].middle;
    var down = numberList[first].down;
 
    for(var i = 1; i < numbers.length; i++){
        var index = parseInt(numbers[i]);
        up += " "+ numberList[index].up;
        middle += " "+ numberList[index].middle;
        down += " "+ numberList[index].down;
    }
    var list  = up + "\n" + middle + "\n" + down + "\n";
    console.log(list);
    return list;
};