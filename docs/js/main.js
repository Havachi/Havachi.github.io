const articles = document.querySelectorAll("article");
const logo = document.querySelector("#navbar-logo-section > a > i");
const nb_articles = articles.length;
let current_article = 0;

document.addEventListener("DOMContentLoaded", () => {
	console.log("NB articles:", articles.length);

	articles[current_article].classList.add("current");
	logo.style.color = "rgb(255,255,255)";
	setInterval(()=>{
		logo.style.color = "rgb(255,255,255)";
	}, 10)
});
function pageNext(){
	articles[current_article].classList.remove("current");
	current_article = (current_article + 1) % nb_articles;
	articles[current_article].classList.add("current");
}

function pagePrev(){
	articles[current_article].classList.remove("current");
	console.log("current_article: ", current_article)
	if( current_article == 0)
		current_article = nb_articles-1;
	else
		current_article = (current_article - 1) % nb_articles;
	console.log("current_article: ", current_article)

	articles[current_article].classList.add("current");
}