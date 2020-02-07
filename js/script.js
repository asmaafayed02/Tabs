//define variable
const jsBtn = document.getElementById('js'),
      phpBtn = document.getElementById('php'),
      rubyBtn = document.getElementById('ruby'),
      messageDiv = document.querySelector('.message');
    
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
}