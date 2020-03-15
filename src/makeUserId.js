export const assignID = (arrayOfUsers) => { // create a unique 5 digit user ID number
    const randomDigit = () =>{
        return Math.floor(Math.random()*10);
      }
      
      const randomNumString = ()=> {
        let string = "";
        for (let i = 0; i<5;i++){
          string = string + randomDigit();
        }
        return string;
      }
      
      const noDupes = (arr)=>{ //didn't account for maxmizing length of array
        let value;
        let duplicates
        do{
          duplicates = false;
            value = randomNumString();
            
          if(arr.includes(value)){
            duplicates = true;
          }
        }while(duplicates === true);
        return value
    }
    return noDupes(arrayOfUsers);
}