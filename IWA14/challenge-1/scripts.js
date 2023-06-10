firstName = 'John';
age = 35;
hobby = 'Coding';


function logTwice  () {
   return `Hello, ${firstName} (${age}). I love ${hobby}!`
  }

const activity = () => {
   console.log(logTwice())  
   console.log(logTwice()) 
}

activity()


