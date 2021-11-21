/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
          promoGenre = document.querySelector('.promo__bg .promo__genre'),
          promoBG = document.querySelector('.promo__bg'),
          promoList = document.querySelector('.promo__interactive-list'),
          myForm = document.querySelector('form.add'),
          formInput = myForm.querySelector('.adding__input'),
          checkboxInput = myForm.querySelector('[type="checkbox"]');

          
    function removeAdv (adv) {
        adv.forEach(function(item) {
            item.remove();
        });
    }

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
        promoBG.style.cssText = 'background: url(img/bg.jpg)';
    };
    
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = formInput.value;
        const favorite = checkboxInput.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
    
            creatList(movieDB.movies, promoList);
        }
            e.target.reset();
    });


    function creatList (newOne, parent) {
        parent.innerHTML = "";
        newOne.sort();

        newOne.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} .  ${item}<div class="delete"></div></li>`;
        });
        console.log('main func done')
        document.querySelectorAll('.delete').forEach((deleteBtn, i) => {
            deleteBtn.addEventListener('click', () => {
                deleteBtn.parentElement.remove(); 
                movieDB.movies.splice(i, 1);

                creatList(movieDB.movies, promoList);
                console.log('btn done')

            });
        });
    }



    makeChanges();
    removeAdv(promoAdv);
   
    creatList(movieDB.movies, promoList);
// });







 
       
const script = document.createElement('script');
    script.src = "js/test.js";
    document.body.append(script);








