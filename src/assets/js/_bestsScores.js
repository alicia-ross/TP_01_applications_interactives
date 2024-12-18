import '../css/style.css';
/**
 * @type {HTMLElement}
 */
let scoreListElement = document.querySelector('.listHtml');

function displayScoresList() {
    let bestRankings = JSON.parse(localStorage.getItem('bestsRankings')) || [];

    bestRankings.forEach((ranking, index) => {
        let scoreLi = document.createElement('li');
        let div = document.createElement('div');
        let spanRank = document.createElement('span');
        let spanPercentage = document.createElement('span');
        let spanDate = document.createElement('span');

        scoreLi.className = 'flex flex-row justify-between';
        spanRank.className = 'rankingHtml';
        spanPercentage.className = 'scoreHtml';
        spanDate.className = 'dateHtml';

        spanRank.textContent = (index + 1) + '. ';
        spanPercentage.textContent = ranking.percentage + '%';
        spanDate.textContent = ranking.date;

        scoreLi.appendChild(div);
        div.appendChild(spanRank);
        div.appendChild(spanPercentage);
        scoreLi.appendChild(spanDate);
        scoreListElement.appendChild(scoreLi);
    });
}

displayScoresList();