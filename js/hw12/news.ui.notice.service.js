class NewsUINotice {
    /**
     *
     * @param {String} containerClass
     */
    constructor(containerClass) {
        this.containerClass = containerClass;
        this.noticeContainer = document.querySelector(`.${containerClass}`);
    }
    
    removeNotice() {
        const currentNotice = document.querySelector(`.${this.containerClass} .card-panel`);
        if (currentNotice) {
            this.noticeContainer.removeChild(currentNotice);
            this.noticeContainer.classList.add("hide");
        }
    }
    
    /**
     *
     * @param {String} bgColorClassName
     * @param {String} foreColorClassName
     * @param {String} message
     */
    generateNotice(bgColorClassName = "yellow", foreColorClassName = "black", message = "По Вашему запросу ничего не найдено") {
        this.removeNotice();
        
        const templateNotice = NewsUINotice.noticeTemplate(bgColorClassName, foreColorClassName, message);
    
        this.noticeContainer.insertAdjacentHTML("afterbegin", templateNotice);
    
        this.noticeContainer.classList.remove("hide");
    }
    
    /**
     *
     * @param {String} bgColorClassName
     * @param {String} foreColorClassName
     * @param {String} message
     * @returns {string}
     */
    static noticeTemplate(bgColorClassName, foreColorClassName, message) {
        return `
            <div class="card-panel center-align ${bgColorClassName}">
                <span class="${foreColorClassName}-text">${message}</span>
            </div>
        `;
    }
}