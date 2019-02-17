class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticleHTML(article) {
        const template = NewsUI.generateArticleTemplate(article);
        this.newsContainer.insertAdjacentHTML("afterbegin", template);
    }
    
    /**
     *
     * @param {Object} article
     */
    addArticleElement(article) {
        const templateElement = NewsUI.generateArticleTemplateElement(article);
        this.newsContainer.insertAdjacentElement("afterbegin", templateElement);
    }
    
    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }
    
    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${article.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${article.title || ''}</span>

                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }
    
    /**
     *
     * @param {Object} article
     * @returns {HTMLElement}
     */
    static generateArticleTemplateElement(article) {
    
        const divCol = document.createElement("div");
        const divCard = document.createElement("div");
        const divCardImage = document.createElement("div");
        const divCardContent = document.createElement("div");
        const divCardAction = document.createElement("div");
        const imgCardImg = document.createElement("img");
        const spanCardTitle = document.createElement("span");
        const pCardContent = document.createElement("p");
        const aCardAction = document.createElement("a");
    
        divCol.classList.add("col", "s12", "m6");
        divCard.classList.add("card");
        divCardImage.classList.add("card-image");
        divCardContent.classList.add("card-content");
        divCardAction.classList.add("card-action");
        imgCardImg.src = article.urlToImage;
        spanCardTitle.classList.add("card-title");
        spanCardTitle.innerText = article.title || '';
        pCardContent.innerText = article.description || '';
        aCardAction.innerText = "Read more";
        aCardAction.target = "_blank";
        aCardAction.href = article.url;
    
        divCardImage.appendChild(imgCardImg);
        divCardContent.appendChild(spanCardTitle);
        divCardContent.appendChild(pCardContent);
        divCardAction.appendChild(aCardAction);
        divCard.appendChild(divCardImage);
        divCard.appendChild(divCardContent);
        divCard.appendChild(divCardAction);
        divCol.appendChild(divCard);
        
        return divCol;
    }
}