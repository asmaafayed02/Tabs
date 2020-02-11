//define variable
let  jsBtn = document.getElementById('js'),
      phpBtn = document.getElementById('php'),
      rubyBtn = document.getElementById('ruby'),
      messageDiv = document.querySelector('.message');
 /*   
 //add event to js button     
jsBtn.onclick = function(){
    //the inner message
    messageDiv.innerHTML = 'javascript is great';
    //add class active to js button
    jsBtn.setAttribute('class','active');
    //remove class active from php and ruby button
    phpBtn.removeAttribute('class','active');
    rubyBtn.removeAttribute('class','active');
}
 //add event to php button     
phpBtn.onclick = function(){
    //the inner message
    messageDiv.innerHTML = 'php is great';
    //add class active to php button
    phpBtn.setAttribute('class','active');
    //remove class active from js and ruby button
    jsBtn.removeAttribute('class','active');
    rubyBtn.removeAttribute('class','active');
}
 //add event to ruby button     
rubyBtn.onclick = function(){
    messageDiv.innerHTML = 'ruby is great';
    //add class active to ruby button
    rubyBtn.setAttribute('class','active');
    //remove class active from js and php button
    jsBtn.removeAttribute('class','active');
    phpBtn.removeAttribute('class','active')
}*/
//anther logic
/*
function changeBtn(language){
    messageDiv.innerHTML = language + ' is great';
    if(language == 'javaScript'){
          //add class active to js button
    jsBtn.setAttribute('class','active');
    //remove class active from php and ruby button
    phpBtn.removeAttribute('class','active');
    rubyBtn.removeAttribute('class','active');
    } else if(language == 'php'){
        //add class active to php button
    phpBtn.setAttribute('class','active');
    //remove class active from js and ruby button
    jsBtn.removeAttribute('class','active');
    rubyBtn.removeAttribute('class','active');
    
    }if(language == 'ruby'){
         //add class active to ruby button
    rubyBtn.setAttribute('class','active');
    //remove class active from js and php button
    jsBtn.removeAttribute('class','active');
    phpBtn.removeAttribute('class','active')
    }
}



jsBtn.addEventListener('click',()=>{changeBtn('javaScript')})
phpBtn.addEventListener('click',()=>{changeBtn('php')})
rubyBtn.addEventListener('click',()=>{changeBtn('ruby')})*/

//anther logic
//function to add class to button and remove from anther
function changeBtn(nameBtn,language,firstBtn,secondBtn){
    messageDiv.innerHTML = language + ' is great'; //message inside div 
    nameBtn.setAttribute('class','active');//add class to button 
    firstBtn.removeAttribute('class','active');//remove class from anther button
    secondBtn.removeAttribute('class','active')

   }
   //add event to first button
jsBtn.addEventListener('click',()=>{changeBtn(jsBtn,'javascript',phpBtn,rubyBtn)})
   //add event to second button
phpBtn.addEventListener('click',()=>{changeBtn(phpBtn,'php',jsBtn,rubyBtn)})
   //add event to third button
rubyBtn.addEventListener('click',()=>{changeBtn(rubyBtn,'ruby',jsBtn,phpBtn)})

