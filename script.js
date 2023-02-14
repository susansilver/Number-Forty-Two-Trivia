
// Setup an array with trivia about 42

const numberTrivia = [
  '42 is the angle in degrees for which a rainbow appears or the critical angle.',
  '42 is the number of gallons that one barrel of petroleum holds.',
  '42 is the number of kilometers in a marathon.',
  '42 is the number of spots (or pips, circular patches or pits) on a pair of standard six-sided dice.',
  '42 is the number of museums in Amsterdam (Netherlands has the highest concentration of museums in the world).',
  '42 is the sum of the codes of the letters in the words "BIG BANG" using the encoding A=1, B=2, C=3, etc.',
  '42 is the result given by the web search engines Google, Wolfram Alpha and Bing when the query "the answer to life the universe and everything" is entered as a search.',
  '42 is the answer to the Ultimate Question of Life, the Universe, and Everything.',
  '42 is the number of laws of cricket.',
  '42 is the number of US gallons in a barrel of oil.',
  '42 is the number of partitions for 10.',
  '42 is the sum of the first six positive even numbers.',
  '42 was the last natural number below 100 whose representation as a sum of three cubes was found (in 2019).',
  '42 is also ten factorial divided by the number of seconds in a day (i.e. 86400).',
  '42 is the ASCII code for the asterisk symbol, being a wildcard for everything.',
  '42 is a sphenic number. This is a number that is the product of three distinct prime numbers.',
  '42 in binary is 101010.',
  '42 is the atomic number of molybdenum, which is also the 42nd most abundant element.',
  '42 is a pronic number and is the product of two consecutive numbers.',
  '42 is an abundant number meaning it is smaller than the sum of its proper divisors.'

];

//When a button is clicked it prints a random fact in an empty div

document.getElementById("new-fact").addEventListener("click", function() {
  let randomFact = numberTrivia[Math.floor(Math.random() * numberTrivia.length)];
  document.getElementById("random-fact").innerHTML = randomFact;
});

// When a button is cliced with ic Twitte a Tweet is sent that Tweets the random fact

document.getElementById("twitter").addEventListener("click", function() {
  let shareText = document.getElementById("random-fact").innerHTML;
  let shareUrl = "https://beautyofmathematics.com/hitchhikers-guide-to-the-galaxy/";
  window.open(`http://twitter.com/share?text=${shareText}&url=${shareUrl}`);
});

//Share to Pinterest

document.getElementById("pinterest").addEventListener("click", function() {
  let shareTitle = document.getElementById("random-fact").innerHTML;
  let shareUrl = "https://beautyofmathematics.com/hitchhikers-guide-to-the-galaxy/";
  window.open(`http://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`);
});

//Share to Mastodon by prompting person to add url to their instance

function MastodonShare(e) {
  let domain = prompt("Enter your Mastodon domain", "mastodon.social");
  if (!domain) return;

  let src = document.getElementById("random-fact").innerText || document.getElementById("random-fact").textContent;
  let encodedSrc = encodeURIComponent(src);
  let currentUrl = encodeURIComponent(window.location.href);
  let url = `https://${domain}/share?text=${encodedSrc}&url=${currentUrl}`;
  window.open(url, "_blank");
}






















//When a button is clicked it prints a random fact in an empty div

document.getElementById("new-fact").addEventListener("click", function() {
  let randomFact = numberTrivia[Math.floor(Math.random() * numberTrivia.length)];
  document.getElementById("random-fact").innerHTML = randomFact;
});

// When a button is cliced with ic Twitte a Tweet is sent that Tweets the random fact

document.getElementById("twitter").addEventListener("click", function() {
  let shareText = document.getElementById("random-fact").innerHTML;
  let shareUrl = "https://beautyofmathematics.com/hitchhikers-guide-to-the-galaxy/";
  window.open(`http://twitter.com/share?text=${shareText}&url=${shareUrl}`);
});

//Share to Pinterest

document.getElementById("pinterest").addEventListener("click", function() {
  let shareTitle = document.getElementById("random-fact").innerHTML;
  let shareUrl = "https://beautyofmathematics.com/hitchhikers-guide-to-the-galaxy/";
  window.open(`http://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`);
});

//Share to Mastodon by prompting person to add url to their instance

function MastodonShare(e) {
  let domain = prompt("Enter your Mastodon domain", "mastodon.social");
  if (!domain) return;

  let src = document.getElementById("random-fact").innerText || document.getElementById("random-fact").textContent;
  let encodedSrc = encodeURIComponent(src);
  let currentUrl = encodeURIComponent(window.location.href);
  let url = `https://${domain}/share?text=${encodedSrc}&url=${currentUrl}`;
  window.open(url, "_blank");
}




















































