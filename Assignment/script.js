function allLetter(text1,password){ 
      var letters = /^[A-Za-z]+$/;
      if(text1.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }

      
}