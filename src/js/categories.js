export function setupCategories(){
    const categotyItems = document.querySelectorAll('.categories__nav li');

    if (categotyItems.length > 0) {
        categotyItems[0].classList.add('active');
    }

    categotyItemsItems.forEach(item => {
        item.addEventListener('click', () => {
           categotyItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });
}