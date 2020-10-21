module.exports = function check(str, bracketsConfig) {
  // your solution
  let count = 0;
  for (let i = 0; i < bracketsConfig.length; i++){
    for (let j = 0; j < str.length; j++){
      if (str[j] === bracketsConfig[i][0])
      {
          for (let n = j + 1; n < str.length; n++){
            if (str[n] === bracketsConfig[i][1] && count === 0){
              if ((n - j) % 2 == 0) return false;
              str = str.slice(0,j) + str.slice(j + 1 , str.length);
              str = str.slice(0,n-1) + str.slice(n , str.length);
              n = str.length;
              j--;
              if (str === '') return true;
            } else if (str[n] === bracketsConfig[i][0]) 
            {
              count++;
            } else if (str[n] === bracketsConfig[i][1]) 
            {
            count--;
            } 
          }
      }
    }
  }
  return false;
}