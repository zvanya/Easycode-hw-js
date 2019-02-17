const newsService = new NewsService();
const uiService = new NewsUI();
const queryResultNotice = new NewsUINotice("notice-query-result");

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const queryFilter = form['search'];

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticleHTML(article));
        // console.timeEnd();
    });
}

/**
 *
 * @param event
 */
function onFilterChange(event) {
    const query = queryFilter.value;
    
    if (query.length === 0) {
        queryResultNotice.removeNotice();
        uiService.clearContainer();
    } else if (query.length < 3) {
        uiService.clearContainer();
        queryResultNotice.generateNotice("light-green", "black", "Введите запрос более 2х символов");
    } else {
        queryResultNotice.removeNotice();
        
        newsService.getQueryFilteredNews(query, (response) => {
            const {totalResults, articles} = response;
    
            uiService.clearContainer();

            if (totalResults === 0) {
                queryResultNotice.generateNotice("orange");
            } else {
                queryResultNotice.removeNotice();
                articles.forEach((article) => uiService.addArticleElement(article));
            }
        });
    }
}

countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
queryFilter.addEventListener('keyup', onFilterChange);
