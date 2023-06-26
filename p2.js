// solution to question 2 First Unique character in a string
function myChar(s) {
   
    const count = new Map();
  

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (count.has(char)) {
        count.set(char, count.get(char) + 1);
      } else {
        count.set(char, 1);
      }
    }
  
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (count.get(char) === 1) {
        return i;
      }
    }
  
    
    return -1;
}
  

//   const s = "loveleetcode";
//   const result = myChar(s);
//   console.log(result)
  