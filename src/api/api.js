export let getPostsAPI = (page) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200101&end_date=20200102&facet=true&facet_fields=day_of_week&facet" +
        "filter=false&page=${page}&api-key=SaGOhDvuEsmE9hpMo07piX2XXbJMoz5A`;
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    };
     return fetch(url, options)
};

