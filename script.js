// get facts from api and post them to div when button is clicked
  document.getElementById('new-fact').addEventListener('click', function() {
  fetch("http://numbersapi.com/42")
    .then(response => response.text())
    .then((response) => {
      document.getElementById('fact').innerHTML = response;
      let shareText = encodeURIComponent(response);
      let shareUrl = encodeURIComponent("http://example.com");
      let shareHashtags = encodeURIComponent("trivia,numbers");
      document.getElementById('twitter').href = `http://twitter.com/share?text=${shareText}&url=${shareUrl}&hashtags=${shareHashtags}`;
    })
    .catch(err => console.log(err))
});

//Post Response to Twitter

document.getElementById('twitter').addEventListener('click', function() {
  window.open(this.href, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
});
  
