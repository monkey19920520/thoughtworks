module.exports = function main(email, suffixes) {
  var suffix = email.split("@");
  var flag=false;
  if(suffix[1]==suffixes){
    flag=true;
  }
  console.log(flag)
  return flag;
};
