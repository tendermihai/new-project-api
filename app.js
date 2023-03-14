document.addEventListener("DOMContentLoaded", () => {
  async function getNews() {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e326a7691d074b07977628df1515053c"
    );
    let conv = await data.json();
    console.log(conv);
    attachCards(conv.articles);
  }

  let container = document.querySelector(".container");
  let articles = document.querySelectorAll(".articles");

  function createCard(article) {
    let section = document.createElement("section");
    section.classList.add("articles");

    let img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = "";
    img.classList.add("urlToImage");

    let info = document.createElement("section");
    info.classList.add("info");

    let author = document.createElement("p");
    author.classList.add("author");
    author.textContent = article.author;

    let title = document.createElement("p");
    title.classList.add("title");
    title.textContent = article.title;

    let description = document.createElement("p");
    description.classList.add("description");
    description.textContent = article.description;

    let url = document.createElement("p");
    url.classList.add("url");
    url.textContent = article.url;

    let published = document.createElement("p");
    published.classList.add("published");
    published.textContent = article.publishedAt;

    let content = document.createElement("p");
    content.classList.add("content");
    content.textContent = article.content;

    info.appendChild(author);
    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(url);
    info.appendChild(published);
    info.appendChild(content);

    section.appendChild(img);
    section.appendChild(info);

    return section;
  }

  function attachCards(articles) {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    Array.from(articles).forEach((article) => {
      container.appendChild(createCard(article));
    });
  }
  getNews();
});
