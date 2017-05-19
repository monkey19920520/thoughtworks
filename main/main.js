module.exports = function main(str) {
   var sum=0;
   for(var i=0;i<str.length;i++){
     sum+=parseInt(str.substring(i,i+1));
   }
    console.log(sum);
    return sum;
};