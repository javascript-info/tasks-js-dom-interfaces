/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ul = document.createElement('ul');

    ul.innerHTML = friends.map(item => {
        return `
            <li>${item.firstName} ${item.lastName}</li>
        `
    }).join('');

    return ul;
}
