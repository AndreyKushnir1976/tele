
window.fbAsyncInit = function() {
    FB.init({
      appId            : '3054281758147337',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v12.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
// document.ondragstart = noselect;
//   document.onselectstart = noselect;
//   document.oncontextmenu = noselect;
//   function noselect() { alert ("Но-но-но! Ты что собрался делать? Контекстное меню здесь не работает. Да оно здесь и не нужно...");return false;}
  
// Запретил копирование, выделение, контекстное меню


let vf=0;
let conec=0;
let ok=0;
let catal=document.querySelectorAll('.cat');
catal.forEach(b=>b.addEventListener('click', cl));




let vid = document.querySelector(".vid");
let myaud = document.querySelector(".myaudio");
let zast = document.querySelector(".zast img");


let yo_anime_ng=['kjqtNOrNnmQ', 'PGp1p0em8pc', 'OY1Rr97brI0', '1ddTjs1mvSU', 'TxHaikEdO8A', 'hxPoU2Z3EGg', 'HUsH2IY0cA8', 'j5MVa2yetso', '1ajPJI5UyS0', 'ec3UvNRcvs4', 'AyEAW5lJe54', 'UdfD-Rh7oEI', 'UT1apbnNpbY', 'Yn-4o6VBd5Y',
                  'lDX17WuMKsA', 'ONK_aTR28fo',  'eqCpfmyzI_k', '4jmrJswWO8g', 'YbEK0ljUQDo', 'ktOGn2dxR48', 'gcFJ7a1wwW4', 'AlYqdkHnfOs'];
let yo_nazv_an_ng=['Двенадцать месяцев', 'Зимняя сказка', 'Новогодняя ночь.', 'Зима в Простоквашино',  'Дед Мороз и серый волк', 'Верное средство. 1982', 
                  'Дед мороз и лето', 'Шайбу! Шайбу!', 'Снежная королева. 1957', 'Ночь перед рождеством. 1951', 'Варежка мультфильм. 1967', 'Щелкунчик. 1973', 'Мороз Иванович. 1981', 'Умка ищет друга. 1970',
                  'Новогоднее путешествие. 1959', 'Снегопад из холодильника. 1986',  'Мы с Джеком. 1973', 'Серебряное копытце. 1977', 'Поросёнок в колючей шубке. 1981', 'Тимошкина ёлка. 1966', 'Храбрый заяц. 1955', 'Ну, погоди! Выпуск 8 - Новый год. 1974'];
let time_anime_ng=['3000', '660', '600', '900',  '900', '540', '900', '1200', '3600', '2400', '540', '1200', '600', '540', '660', '540',  '540', '540', '480', '540', '900', '540'];

let yo_films_ng=['lVpmZnRIMKs', '3jg21SZJ8g8', '8tJPKSz6Gaw', 'N8pVCHrNgPQ', 'ZFNecx4Xrso', 'A9_JmNZNo0U', 'cjBu1U6NgO4', '4O_eGcodQUI', 'T_qpPoJQqG8', 'isyuhrafsAs', 'vSAVYvnSJ3U', 'M7JCEQDunGo', 'UnewMqTELz4', 'NlQf-CzWD6M', 'qO40Zn0TcRA',
                  'iPKuXusspy8', 't11t8imrL9M', 't9eGMC-GtpQ', 'uIAxvJ5QRvI', '_XiBoSZwKUw', 'uAbJShpzaDs', 'Nc605r_7d0Y', 'kntkXsVq0oA', 'z0XAbMPEjCM', 'T1Qj-9fU66E', 'gPsrfrgxrCA', 'TsMXAodHYbE', 'BzvwLD5K3Gw', 'rwebIyBsk-g', 'hRlcrmdMlUg', 'QbQUtdME2fM',
                  'eMFbPZqgFKw', 'L4xT7LO1iPo', 'zMqaFNv_ao4', 'fjfB08JEALY', 'gWnefFBV_sY', '2jjqWlKZgJc', 'ZsxXQtYvDmY', '5d5HjYUK51M', '4TN8SFWQJok', '3pWls0igBww', 'h7Ao9gkWtyE', 'p2vK8ADM6uE', 'YrsqKUD3Be8', 'g4v6raWtsI4'];
let yo_nazv_films_ng=['Ирония судьбы, или С легким паром 1 серия', 'Карнавальная ночь', 'Джентльмены удачи', 'Новогодние приключения Маши и Вити', 'Двенадцать месяцев. 1 серия', 'Двенадцать месяцев. 2 серия',
                      'Зигзаг удачи. 1968', 'Похищение. Серия 1 (1969) Новогодний комедийный фильм-концерт', 'Похищение. Серия 2 (1969) Новогодний комедийный фильм-концерт', 'Морозко. 1964', 'Старый Новый год 1 серия. 1980', 'Старый Новый год 2 серия. 1980',
                      'Серебряное ревю. 1982', 'Чук и Гек. 1953', 'Снежная сказка. 1959', 'Високосный год. 1961', 'Карьера Димы Горина. 1961', 'Как рождаются тосты - фильм комедия. 1962', 'На одной планете. 1965', 'Снежная королева. 1966', 'Сказки русского леса. 1966',
                      'Снегурочка. 1968', 'Улыбнись соседу. 1968', 'В тринадцатом часу ночи. 1969', 'Семья, как семья (Коробовы встречают Новый год). 1970', 'Бушует "Маргарита". 1970', 'Что-то с телефоном. 1979', 'Орех Кракатук. 1977', 'Нужные люди. 1986',
                      'Запасное колесо. 1978', 'Глубокие родственники. 1980', 'Зигзаг, 1980', 'Ледяная внучка. 1980', 'Детский мир. 1982', 'Ищите женщину 1 серия. 1982', 'Ищите женщину 2 серия. 1982', 'Личная жизнь Деда Мороза. 1982', 'Последняя ночь уходящего года. 1983',
                      'Еще люблю, еще надеюсь. 1984', 'Как стать счастливым. 1985', 'Снегурочку вызывали. 1985', 'Нейлоновая елка. 1986', 'Праздник Нептуна. 1986', 'Вечера на хуторе близ Диканьки. 1961', 'Семь криков в океане. 1986'];
let time_films_ng=['5000', '4200', '4800', '3600', '3600', '3600', '4800', '4800', '4800', '4200', '3600', '3600', '3600', '2400', '3600', '4800', '5400', '1800', '5400', '4200', '3600', '4800', '3000', '4200', '4200', '3600', '1000', '4200', '3600', '1100', '1200',
                  '1200', '4200', '4200', '4200', '3600', '3600', '4200', '4200', '4800', '3600', '4200', '2400', '3600', '4800'];

let yo_sport_ng=['WmSFuUykwWQ', 'PpGLFI0Q7OY', 'VjrGiDFSq9Y', 'PlzuAyiKwXE', 'tNQPQv4qfLk', 'NZL-u_cISDg', 'ltnuRgnP2aE', 'kwDRWYL1-d4', 'HEqOfbKACY0', 'IC4vj32zE0E'];
let yo_nazv_sport_ng=['Лед. Снег. Спорт.', 'ХОККЕЙ *Приз газеты ИЗВЕСТИЯ* 1989г СССР - Швеция', 'Спортивный этюд. О зимнем отдыхе москвичей (1973)', 'Итоги спортивного года. Спорт-77 (1977)', 'Утренняя гимнастика. Дата записи 21.12.1988', 'Ленинские горы. О воскресном отдыхе москвичей зимой (1973)',
                      'Параллельная лыжня. О чемпионе Олимпийских игр 1972 года в Саппоро Юрии Скобове (1978)', 'Его не брали в расчет. Легенды советского спорта - Олег Божьев. 1985', 'Как стать чемпионом. Об одном из зимних видов спорта - спидвее на льду. 1978', 'Узоры на льду. Выступления участников сборной команды Советского Союза по фигурному катанию. 1984'];
let time_sport_ng=['600', '3600', '540', '2400', '800', '540', '900', '1750', '540', '1800'];

let yo_telecast_ng=['KuYPqj9yE8E', 'dQWQINx9yUc', 'Zgd8IO2gup4', 'rvdzgVJyQmY', 'nLJU-4bd1mk', 'i7u7l6eEElo', 'UpHquLgIK7Y', 'HWtNPA4AI4g', '2jHAO25KTtM', 'hARny92xecE', 'HpnPnzBp0Ic', 'DUqZir7lXPU', 'BLps1L5jbXY', 'Rr2BRuQA9FQ'];
let yo_nazv_cast_ng=['Новогодний огонек 1984 - 1985', 'Новогодний огонек с 1980 на 1981 г', 'Кинопанорама новогодняя. Эфир 28.12.1984', 'Однажды зимой. Эстрадно-развлекательная программа (1986)', 'Шире круг (к Новому году) (1989)', 
                      'Игорь Кириллов поздравляет с Новым годом (1981)', 'Поздравление Брежнева с Новым 1979 Годом', 'Концертная программа Новогоднего "Голубого огонька". Часть 1 (1980)', 'Концертная программа Новогоднего "Голубого огонька". Часть 2 (1980)', 
                      'Что? Где? Когда? Финал 1982 года', 'Мир встречает Новый год (1978)', 'Вокруг смеха. Выпуск № 34 (новогодний) (1987)', 'Новогодние часы (1971)', 'Мы говорим по-русски. Урок 28. В Москве новогодней (1977)'];
let time_telecast_ng=['10200', '4800', '6000', '4800', '9000', '900', '540', '4800', '4800', '6600', '2400', '5400', '2300', '900'];

let yo_singl_ng=['upHnFMGazFg', '7mwlNPAtqFs', 'OreAL1u4kfQ', 'yuY8lgyjk_w'];
let yo_nazv_singl_ng=['Эстрада - 67 (1967)', 'Новогодний "Голубой огонек" 1981/82', 'Новогодний голубой огонёк. 1965', 'Утренняя почта № 51. В Лужниках (1984)']; 
let time_singl_ng=['4800', '12000', '1200', '1700'];


let yo_anime50=['wPAOt0-ggqQ','qUhuXFs1pWg', 'IbnhYj1o6c8', 'OY1Rr97brI0', 'nsbynSSdVuQ', '88CVMoCzw8g', 'oDbLk7xMS2Y', 'JKo6skrMNqk', 'xJeqL52ht5k', 'NcJ8bO_uDRQ', 'Lcrof7cVr1A', 'NwB0qghW04s', '7eukpROEX2Y', 'UzxE10vGvmI', '-RPqHrQi4UU',
                'mt9d1Rb4NrQ'];
let yo_nazv_an_50=['Скорая помощь','Первый урок','«Конёк-Горбуно́к»', 'Новогодняя ночь', 'ФЕДЯ ЗАЙЦЕВ, 1948','Сказка о солдате, 1948', 'Кошкин дом. 1958', 'Чемпион', 'Гадкий утенок. 1956', 
                  'Серая шейка. 1948', 'Сказка о рыбаке и рыбке. 1950', 'Заколдованный мальчик.1955', 'Цветик-семицветик. 1948', 'Чудесный колокольчик. 1949', 'Три дровосека. 1959', 'Теремок. 1945'];
let time_anime50=['600', '540', '3300', '600', '1140', '1080', '1500', '600', '960', '1140', '1800', '2400', '1200', '900', '600', '1200'];


let yo_films50=['Q74l7S-oxSU', 'tVWuOJT2mf0', 'w0gDo1YcKXw', '6nS0H-uBI-8', 'vy9GaBVs-EU', 'CVU_Xu_AXNQ', '75yyoiK7lZw', '2FYPgLxcDs0', '_ppjNnwvOSQ', 'Eaaa5rLAlTA', 'uopfqauEz64',
                'jqbaCD-Gv88', 'eRFHmvLySRc']; 
let yo_nazv_films_50=['Калиновая роща (1953) фильм', 'Когда поют соловьи (1956) фильм', 'Сельский врач (1951) фильм', 'Над Тиссой',
					'Сердца четырех (1941)', 'Неотправленное письмо. 1959', 'Два бойца. 1943', 'Поединок 1944', 'Без вести пропавший. 1956', 'Долгий путь. 1956', 'Илья Муромец. 1956',
                  'Сверстницы. 1959', 'Пятнадцатилетний капитан. 1945'];
let time_films50=['6300', '4920', '6360', '4700', '5340', '5400', '4200', '4200', '4200', '4200', '5400', '4200', '4200'];

let yo_sport50=['YEAPYq_rWIQ', 'TJJAe7KkvjA', 'nIy-XCOl_tY'];
let yo_nazv_sport_50=['1955 киножурнал советский спорт №1', '1957 №3 киножурнал советский спорт', '1957 №2 киножурнал советский спорт'];
let time_sport50=['540', '540', '540'];

let yo_singl50=['pefW8euBLuM', 'iIzjCEB0Nu8', '3-6TOoxwsT0', 'etpuTwlwC1M'];
let yo_nazv_singl_50=['Синий платочек Клавдия Шульженко', 'Леонид Утесов "У Черного моря" (1955)', 'Юрий Саранцев "Песня шофера такси"',
					'Клод Дебюсси "Медленный вальс". Играет Давид Ойстрах'];
let time_singl50=['180', '180', '180', '240'];


let yo_telecast50=['_NvltvSbezs', 'o2BdY6ZMsiQ', 'N6p6v6iatrc', 'nbRDIrMtFZ4', 'kel7RuysfHQ', 'M8mwRAkYpjI', 'hlfMSIL_38k', '_rNLM27sxb4',
					'SCp0WOnF1JU', '3GCNmUmUwVs', 'hOjy2Pc_yCw', 'CnAd7POS_2w'];
let yo_nazv_cast_50=['Хроника дня', 'Хроника дня', 'Хроника дня', 'Хроника дня', 'Хроника дня', 'Хроника дня', 'Хроника дня', 'Хроника дня',
					'Хроника дня', 'Год 1939', 'Год 1945', 'Год 1944'];
let time_telecast50=['240', '120', '360', '300', '660', '660', '120', '300', '300', '2940', '3000', '3000'];


let yo_anime60=['kjqtNOrNnmQ', 'qvsTD2vrdJE','CaAmEo5dYBk', 'bkXop7hg7N0', 'iTcMAoy-weI', 'qm_zIhv1HTA', 'Vm7ugPmLXRY', 'nrV_Vvh1dcU', 'UWEMSV90668', 'khqf6B3QJv4', 'L-rvYJcDPlo', 'Hx2y7cCUouo', 'cxJjvtxBDmg', 'SXD4oMFNh1g',
                'PfCJRXiNeM0', 'xzs3pYNbKFs', 'RpyL_2Osnx4', 'LbslrkBUaXo', '-QdUVssG5Fw', 'r9DCtjiAVkk', 'CEb5gzRiMmI', 'fm5i6CfHtEc', 'SppPrGqCI6Y', 'vl0DS4yftHs', 'd4jRXEpv908', 'bf6n9gOz79I', 'YuSmUs4iST0'];
let yo_nazv_an_60=['Двенадцать месяцев', 'Муха-цокотуха', 'САМЫЙ БОЛЬШОЙ ДРУГ', 'Тараканище. 1963', 'Как мы весну делали. 1968', '13 рейс. 1960', 'Винтик и Шпунтик-веселые мастера. 1960', 'Незнайка учится. 1961', 'Это дело не моё. 1960',
                    'Железные друзья. 1960', 'Золотое перышко. 1960', 'КОНЕЦ ЧЁРНОЙ ТОПИ. 1960', 'Королевские зайцы. 1960', 'Машенька и Медведь. 1960', 'Мурзилка и великан. 1960', 'Про Козла. 1960', 'Веснянка. 1961', 'Впервые на арене. 1961',
                    'Дорогая копейка 1961', 'Дракон. 1961', ' Ключ. 1961', 'Козлёнок. 1961', 'Муравьишка-хвастунишка. 1961', 'Стрекоза и муравей. 1961', 'Три пингвина. 1961', 'Фунтик и огурцы. 1961', 'Чиполлино. 1961'];
let time_anime60=['3000','600','540', '900', '600', '540', '900', '1200', '540', '540', '1000', '1000', '1100', '1000', '1000', '800', '540', '600', '900', '1200', '3000', '540', '900', '600', '540', '1100', '2220'];


let yo_telecast60=['pRn8zsb-XY0','VAN4FYveWTU','r6x_AAu6puY', 'OreAL1u4kfQ'];
let yo_nazv_cast_60=['Голубой огонек. 1963/64', 'Ленинград. Документальный фильм. 1964 г.', 'Москва 60-х', 'Новогодний голубой огонёк Год 1965'];
let time_telecast60=['9600','1140','720', '1440'];


let yo_singl60=['yYtK9VqTR0Q', 'jI2NtHP4ppA','5yfH5B6Gkhk', 'vz-ZAMntw88', '4gMcZKtfNvE', 'p03-nMm-GFc', 'CMQMwJWq4SA', 'upHnFMGazFg', 'igxy5vfaXcQ', 'bJG7D8fkHek'];
let yo_nazv_singl_60=['Эмиль Горовец "Московский парень", Голубой огонек 1967 г', 'Валерий Ободзинский исполняет знаменитый «Вокализ» (1967)', 'Ирина Бржевская "Московские окна", 1963 г.', 
                      'Концерт Ирины Архиповой (1967)', 'Екатерина Шаврина "Шла Танюша" (1966)', 'Клавдия Шульженко "Песня о любви" 1964', 'Нина Пантелеева "Листья кружатся". 1966', 'Эстрада - 67 (1967)', 'Концерт фестиваля советской эстрадной песни, 1965',
                      'Станислав Пожлаков "Ребята 70-й широты" (1968)'];
let time_singl60=['120', '120','240', '5400', '120', '180', '120', '4800', '3600', '120'];


let yo_sport60=['kj5SCPjQPJo', 'o2larCwve5M', '90jAK4iK3yM', '4EUE4GvP0oc', 'WyrcjobU6dM', 'dRCbfepZlGs', 'BsGGXyNzwgw'];
let yo_nazv_sport_60=['1965. Советский спорт. № 5-6', 'Хоккей, хоккей... Фильм о развитии хоккея с шайбой в СССР (1968)', 'Татьяна Тарасова и Георгий Проскурин на Чемпионате Европы по фигурному катанию 1965 года.', 'Три лавровых венка. О трехкратной чемпионкой мира по конькобежному спорту Марии Исаковой (1968)',
                      'Бокс. Европа. 1963', 'Наш семейный альбом - гимнастика. История гимнастики. 1966', 'Форум гимнастов. 1967'];
let time_sport60=['1140', '3000', '180', '1200', '1800', '1200', '1200'];


let yo_films60=['n0OwZBG64Yg','qh--S-DUZ88','7CLfavKOF20', 'aRCNAtc1DXY', 'x_-ehagcrBg', 'v3--2G9IM5I', 'YrsqKUD3Be8', 'immo4JI8CP0', '83s905HUOLo', 'vIAFJ7QIU7k', '-2IhHYRXExU', 'bJ3bNH0lj7w', 'QP9cPwpajJ8', 'fH7gtgeckWk', 'Xwv5J63fOFY', 'jZ33mMmfvaM',
                'ufMM1zuZf2g', 'B-iVfLX2tvY', 'YGR1Bg0Ryqk', 'V_J-keZ1bqA', '5XV_b6Xv0H8', '9GttswTHUgI', 'GF_r_KbdYb4', 'snXuJa5y768', 'iBNwsNmKGxA', '1shgdfKj6Xw', 'xJ5iHFSdAU4', 'P2_sjEURwgo', '2dazWrKL_Q8'];
let yo_nazv_films_60=['Алешкина любовь фильм 1960', 'Впереди - крутой поворот (1960) фильм', 'Прощайте, голуби. фильм', 'Скелет Аполлона. Советская комедия, 1965 г.',
					 'Самогонщики', 'Полосатый рейс', 'Вечера на хуторе близ Диканьки (1961)', 'Дайте жалобную книгу', 'Легкая жизнь (1964)', 'Обыкновенный фашизм', 'А если это любовь? 1961', 'Мой младший брат. 1962', 'ДВА ВОСКРЕСЕНЬЯ. 1963', 'Три плюс два. 1963',
           'Год, как жизнь. 1966', 'Берегись автомобиля. 1966', 'Таинственная стена.Фантастика 1967', 'Бриллиантовая рука. 1968', 'Урок литературы. 1968', 'Слепой музыкант. 1960', 'Большие и маленькие. 1963', 'Их знали только в лицо. 1966', 'Сердце Бонивура. 1969',
           'Трижды воскресший. 1960', 'Пёс Барбос и необычный кросс. 1961', 'В пути. 1961', 'Операция «Ы» и другие приключения Шурика. 1965', 'Кавказская пленница, или Новые приключения Шурика. 1966', 'Павлик Морозов. 1963'];
let time_films60=['4920','4500','5400', '1380', '1080', '5220', '3600', '5100', '5400', '7800', '5400', '5400', '5400', '5400', '8400', '4800', '4200', '5400', '4200', '4200', '5400', '4800', '12600', '4200', '600', '1200', '5400', '4200', '5400'];


let yo_sport70=['bHOrWlRsmMk', 'Z2nOd5HMFZo', 'CWv-CVY-HLc', 'O2oapCHh3bA', 'miZ_1YiORYU', '2nnl2L0KovE', 'JXxH96jSaxI', 'CWv-CVY-HLc', 'miZ_1YiORYU', 'Y5Rymd9s3l0', 'XqDVqY0sYRU', 'SvdXjy5xBys', 'DnR-aU3ZJx4', '-c17Ow5ot_o', 'bCNrFFtbNKg',
                'kSFWq_c67r0', 'wPK7HZTag7g', 'qAGndjHhvII', '93C9C-RlUUk', 'allMJNtDRi8', 'Q-LIQUMLN5s', 'fQkTKVFCFHg', 'qDr7v_JD_zU', 'obK6Rsc6aJY', 'gEbljYrnHmA', 'Uw8EmubZTFY'];
let yo_nazv_sport_70=['Советский спорт 1973 №04', 'Хоккей против хоккея . Документальный фильм', 'СССР - Сборная НХЛ. Кубок Вызова 1979 Третий Матч', 'Спорт страны Советов (1979)', 
				  'Вес взят! (1976)', 'Велоспорт в СССР', 'Восходящая траектория', 'СССР - Сборная НХЛ 6:0 . 1979', 'Вес взят! (1976)', 'Воспоминания перед стартом. История отечественного футбола (1973)', 
          'Этот удивительный спорт. Документальный фильм (1971)', 'Москва ждет Олимпиаду-80. 1979', 'Дистанция. Документальный фильм об истории советского спорта. 1975', 'Победители Чемпионата СССР по фигурному катанию 1971 года Ирина Роднина и Алексей Уланов',
          'Залог победы. О победе сборной команды СССР по вольной борьбе на чемпионате мира в Швейцарии. 1978', 'Мама и хоккей. Документальный фильм о Владиславе Третьяке. 1971', 'Лев Яшин. 1971', 'Большая гимнастика. Людмила Турищева. 1975',
          'Прыгнуть и забыть. Олимпийская чемпионка по прыжкам в воду - Елена Вайцеховская. 1978', 'Старший тренер. О тренере женской сборной команды СССР по баскетболу Лидии Алексеевой. 1979', 'Лев Яшин. Последний матч легендарного вратаря. 1971', 'Обязательная программа. Николай Андрианов. 1972',
          'Трудное счастье Ирины Родниной. 1975', 'Советские хоккеисты. 1975', 'Гимнаст Николай Андрианов. 1977', 'Советский спринтер Валерий Борзов. 1978'];
let time_sport70=['600', '1620', '6300', '3360', '1740', '1560', '1620', '6300', '1100', '3500', '4200', '1200', '1200', '300', '1600', '1100', '1200', '3000', '1700', '1200', '420', '1200', '2400', '1700', '1700', '1200'];


let yo_singl70=['Ji4vYnLp0Wk', 'eeZ7D04PlaY', '8z7J_Y3GCug', 'DUmF2m1W6Ns', 'P2TiCoacKng', 'Fcnz_G2od3M', 'pno-OpbvubI', '-2iVcCUXhhU', '10Dr5-1NSB0', 'fpcEGKxnrTM', 'bCBP60z8_0I', 'cC51rICtOyk', '7hm2s9-v1Sg', 'wjCcVL9uq24', 'ULtv9Eh3RB4', 'UHz_x-KbGw0',
                '_fFR9DWdwJ8', 'RIUo9vBSJiA', 'OFkPAf7xEKc', '12nmuPFllRU'];
let yo_nazv_singl_70=['Алиса Фрейндлих "Река любви" (1979)', 'Песня - 77','Песня - 76', 'Песни Анны Герман', 'Поет вокально-инструментальный ансамбль "Иверия" (1974)', 'Концерт Государственного академического симфонического оркестра СССР.',
                    'Концерт Московского государственного симфонического оркестра п/у В.Дударовой (1971)', 'Концерт Ивана Козловского (1974)', 'Поет ансамбль "Иверия" (1972)',
                    'Песни Александры Пахмутовой. Поет Эдуард Хиль (1977)', 'Концерт Ирины Архиповой. К 30-летию Победы (1975)', 'Поет Полад Бюль-Бюль оглы. 1970', 'Песня - 78', 'Песня - 71', 'Песня - 79', 'Песня - 72.', 'Песня - 73', 'Песня - 75', 'Песня - 74',
                    'ВИА "Оризонт". Песня "Калина" (1977)'];
let time_singl70=['240','7680', '5520', '1620', '1800', '5400', '2400', '6600', '900', '720', '6000', '720', '12000', '9000','10500', '10500', '9960', '10200', '10200', '160']; 




let yo_films70=['WJJtCg3U1uE', '0sjArQrP1zI', 'L9HATyYkZLs', 'uu2a6YsOThY', 'hPSwuMKG2Yk', 'LMTZ15mj92A', '5th0_VuYwQk', 'egDa3DZaRPE', 'Sl692kOCc6Q', 'Ted9HpTG7EE', 'AdPrucQOKAw', 'gZiKrWSzNBo', 'SW2SySreo-k', 'RlYDwoEb4PU', '_NmdHrBgMm8', '8ftGvvUD1Nw', '4cNpJgbgD3g',
                'P8t2dbJ7YXY', 'a50qT9bW2Qo', 'DZHXRy-FTuM', 'fS7N8JvN-_g', 'fqL9sVcgK6Q', 'dzCad9HO_Fc', 'lJuStMrTLHQ', 'uZTvAeD7ACw']; 
let yo_nazv_films_70=['"Город первой любви" 1970 г.', 'Нечаянная любовь (1970)', 'Афоня', 'Чудо с косичками. Спортивный фильм. 1974.', 'Живите в радости', 'Волшебная книга Мурада. 1976', 'Красно солнышко. Кинодебют Игоря Бочкина. 1972', 'Достояние Республики. 1971',
                      'Старики-разбойники. 1971', 'Тень. 1971', 'Соломенная Шляпка, 1 cерия. 1974', 'Обыкновенное чудо, 1 серия. 1978', 'Трое в лодке, не считая собаки, 1 серия. 1979', 'Лев Гурыч Синичкин. 1974', 'Звезда пленительного счастья. 1975',
                      'Семнадцать мгновений весны 1 серия', 'Эти невероятные музыканты или Новые сновидения Шурика', 'Двенадцать стульев. 1971', 'Иван Васильевич меняет профессию. 1973', 'Не может быть. 1975', 'Золотые рога. 1972', 'Синяя птица. 1976',
                      'Маленький принц. Телеспектакль. 1974', 'Валькины паруса. 1974', 'Удивительные приключения Дениса Кораблева. 1979'];
let time_films70=['5220', '4320', '5220', '4500', '4260', '3600', '5400', '13800', '4800', '5400', '3600', '3600', '3600', '4200', '9000', '3600', '3550', '9000', '5400', '5400', '3600', '5400', '6600', '4200', '7200'];

let yo_anime70=['E0c8dJbzTXE', 'jpFRGGdlKWA', 'tRC-BP9GBE4', 'smLQgrfrZPg', 'hX4JlUZpDT0', 'eE9glXWrRsg', 'k4nfCVdzuiE', 'Pg8-VZqskE0', 'QnB3YJOc8Qc', 'OsSyfBXF-_Y'];
let yo_nazv_an_70=['Мук Скороход', 'По следам бременских музыкантов', 'Сказка про Бачо и его маму. 1978', 'Малыш и Карлсон', 'Про паучка, с которым никто не дружил. (1975)', 'Солнечный зайчик. (1978)', 'Жила-была пчелка. (1978)', 'Будь моим слоном. (1976)',
                  'Просто так. 1976', '38 попугаев'];
let time_anime70=['900', '1000', '1080', '2100', '720', '540', '900', '900', '360', '480'];


let yo_telecast70=['HNoLIXDZWYE', 'Usg2sKzfMd4', 'QXI35fRybqs', '3YsIZNFuxek','8Kbmld71GSA', '-llUqu-wB_s', 'fcp0TFquHIY', 'WUviX4wQV4o', 'I93prk3tup8', '70L3PPhu6qM', 'uq-SoXoUnSI', 'mIU-uRGNNnc', 'jRQ1s9s_1vU', 'Q8Jv8au88I4'];
let yo_nazv_cast_70=['Спокойной ночи, малыши! (1977)', 'СССР - общество без кризисов (1977)', 'Лето в Москве (1976)', 'Будильник. 1974', 'Личность начинается с детства (1979)',
					'Здоровье. 1976', 'Экспедиция "Ра". 1971', 'Спокойной ночи, малыши! 1972', 'Спокойной ночи, малыши! 1972', '...Плюс электрификация (1978)', 'Народный артист СССР Аркадий Райкин (1974)', 'Мелодии универмага. 1972', 'Нам двадцать пять. Выпускники 1963 года. 1970',
          'Стихи мои! Свидетели живые. Фильм посвящен творчеству Николая Некрасова. 1978'];
let time_telecast70=['840', '1380', '1560', '1620', '1740', '1740', '2400', '960', '600', '1200', '3600', '1200', '1200', '3600'];

let yo_sport80=['F5QvGawX1Us', 'FByWlLb14gI', '3iL7zT-TTp8', 'HrRynpUqOJQ', 'lDm-7eSV3J8', 'JU7B5N_RUmY', 'IC4vj32zE0E', 'FZTR1MfwGYE', 'JXFuA20E8Mo', 'BEbUiCTZJUw', '3Aq44yKIwfM', '-WJtUhXlgOw', 'FfOrJXwN8RQ', 'l2tzrpTeKHY', 'q8W6RDpxvSU', 'T631h0coMTk',
                'k6n1htAx9YQ', 'OAzQkxIIwco', 'lT7AZ3SmNmU', 'vBYfkhsGrCs', 'iQu3fwmssEw', '7YpWdwCHRCM', 'adL09kti230', '5k-HLT0xkf0', 'DWMhqVcFiAE', 'omv5eoEdUHw', '9FWbKAL47BY', 'YIkY1Zmmvok'];
let yo_nazv_sport_80=['Олимпиада-80. День открытия', '1981 кубок канады финал СССР-Канада', 'Советская аэробика', 'Авторалли "Лада" (ВАЗ) в Таллине (1987)',
					'Олимпиада - день закрытия. Олимпиада-80 (1980)', 'Все звезды. 1989', 'Узоры на льду. 1984', 'Арена. 1989', 'Спорт и личность. Осенний футбол. История советского футбола. 1989',
          'Спорт и личность. Ирина Моисеева. 1988', 'Спорт и личность. Легкоатлеты братья Знаменские. 1987', 'Спорт и личность. Универсиада. 1989', 'Размышляя о боксе... Легенды советского спорта - Алексей Киселев. 1980',
          'Праздник баскетбола во Дворце спорта ЦСКА в Москве. 1989', 'Арена. Теннис. 1989', '"Братья Старостины". О советских футболистах "Спартака". 1986', 'Интервью Анатолия Карпова. Шахматная школа. 1981',
          'Сергей Бубка. 1986', 'Соревнования по фигурному катанию на приз газеты "Московские новости". 1987', '"Встань, сборная!" О советском баскетболе А. Я. Гомельский и В.П. Кондрашин. 1988', 'Встреча с канадским хоккеем. Беседа Евгения Майорова с тренером Виктором Тихоновым. 1987',
          'И сложность, и красота... 1982', 'Чемпион остается чемпионом. Г.Каспаров и А.Карпов. 1987', 'Вас приглашают мастера фигурного катания. 1987', 'Чемпионат мира по шахматам - 85. Итоговая передача. А.Карпов - Г.Каспаров. 1985', 'И я гляжу в свою мечту...1982',
          'Москвин против Москвиной. 1988', 'В гостях у Николая Озерова. 1987'];
let time_sport80=['5160', '5400', '1620', '540', '3600', '3600', '1800', '2400', '2400', '2400', '1800', '2400', '1600', '3600', '3600', '3600', '1200', '1800', '1200', '1700', '2400', '1200', '1800', '3600', '1700', '1200', '1200', '7000'];

let yo_telecast80=['Gg4HmWuzI8Q', 'B2e_folxpGg', 'eSmA6dc5H94', 'AWPcU0rn4w8', '3MIeFjn3NDc', 'kJWOpH4N4kk', 'ljChnVbC8z4', 'qklfhcQAN8o', 'ofBNunPhutc', 'n8j3gt35Fd8',
                  '2PhkZAOsnv4', 'AghUi38md2E', '7f9yVICcOMw', 'su1j5AN2yMA', '51tbc7GgM-Q', 'WalFvAwJtDU'];
let yo_nazv_cast_80=['Москва. 1982г.', 'Время. Эфир 27.07.1985', 'Утренняя почта № 59 (1986)', 'Передача "Взгляд". Первый выпуск. Эфир 02.10.1987 (1987)',
					'АБВГДейка. Выпуск № 9. 1984', 'Клуб путешественников. 1984', 'Служу Советскому Союзу. 1982', 'Время. Эфир 01.05.1982', 'О спорт, ты — мир! 1 серия',
					'Кинопанорама. 1980', 'Время. Эфир 18 ноября 1985', 'Матиас Руст дает показания в суде. 1987', 'Время. Эфир 07.01.1989', 'Будильник. 1983', 'Будильник. 1984', 'XIII Всемирный фестиваль молодежи и студентов в Пхеньяне. 1989'];
let time_telecast80=['2220', '1200', '2700', '1620', '2570', '1800', '3600', '3600', '2700', '4800', '3600', '3000', '3000', '2400', '3600', '1800', '4800'];

let yo_anime80=['UfrQD5wS8-c', 'hdlJZvaTI0c', 'zh2m3axCsUc', 'x5g7aStID_M', 'SPrVSiJhO_w', 'N-IISfcqpQQ', 'zc5iz2jXkuM', 'mU1hpzYkEpk', 'wZRQ8Kwxk6o', 'g77pVEXST6Y', 'v-hb5gTBIBE', 'gv1JKxZSz_E', 'pJ7kvFCIuJ0', 'sq9UsgHzHmc'];
let yo_nazv_an_80=['Мультсборник', 'Нехочуха', 'Ивашка из дворца пионеров', 'В синем море, в белой пене...', 'Малиновое варенье.1983', 'Кто расскажет небылицу? 1982', 'Чертенок № 13. (1982)',
                  'Шиворот-навыворот.(1981)', 'Три синих-синих озера малинового цвета. (1981)', 'Раз ковбой, два ковбой. (1981)', 'Находчивый лягушонок. (1981)', 'Хочу Луну. 1984', 'Зимняя Сказка. (1981)',
                  'Вокруг света за 80 дней. 1972. В СССР телепремьера состоялась в январе 1981 года'];
let time_anime80=['4800', '540','540', '410', '540', '540', '540', '540', '480', '600', '540', '600', '540', '20820'];

let yo_films80=['AlhOm9EooZg', 'DNfzKrf7T_I', 'PoA6GIjV3Fg', '3g-p1d8H02o', 'FxWczA4ZgI4', 'KLiunGfLZEw', '-WkgSQZ-SAc', 'Wp3PY0xHf80', 'CBMEfNBaxLo', 'figIDuctqMY', '4JZzsIncaVo', 'oyqstkNNnmw', 'RmRiDhR0c28', 'up71u5SOUrU',
                'iXQAfWTRZvI', '3Oo9HmVEbbw', '12-mEzG8TUo', 'Glle7qNMxCE', 'UWpyJM-0qlI', 'pCutJ-7acvg']; 
let yo_nazv_films_80=['Чародеи (1982) комедия', 'Зелёный фургон (1983) комедия', 'Приключения Тома Сойера и Гекльберри Финна (1981)', 'Вокзал для двоих', 'Спортлото-82', 
                    'Профессия - следователь.', 'Встречная полоса. 1986', 'О бедном гусаре замолвите слово, 1 серия. 1980', 'Будьте моим мужем. 1981', 'Блондинка за углом. 1984', 'Человек с бульвара Капуцинов. 1987)',
                    'Следопыт. 1987. Последняя роль А. Миронова в кино...', 'Приключения Шерлока Холмса и доктора Ватсона: Король шантажа. 1980', 'Приключения Шерлока Холмса и доктора Ватсона: Охота на тигра. 1980',
                    'Приключения Шерлока Холмса и доктора Ватсона: Собака Баскервилей. 1981', 'Необыкновенные приключения Карика и Вали. 1987', 'За спичками. 1980', 'Опасно для жизни! 1985', 'Частный детектив, или Операция «Кооперация». 1989',
                    'Али-Баба и 40 разбойников. Музыкальный фильм. 1983'];
let time_films80=['8760', '8160', '12120', '7920', '5340', '18000', '5820', '4200', '4800', '4200', '5400', '4800', '3600', '3600', '4200', '7500', '5400', '4800', '4900', '4200'];

let yo_singl80=['GGqGZ7SkuLU', 'oZdAY9KBe4M', 'erzF31rsNsc', '58aO4St-oPI', 'nLJU-4bd1mk', 'D-9BJqHBLl4', 'I1DuUkbLsTc'];
let yo_nazv_singl_80=['Песня Года 1989', 'Песня - 80. Финал (1980)', 'Песня - 83. Финал (1983)', 'Новогодний "Голубой огонёк" - 1985/86 год', 'Шире круг (к Новому году) (1989)', 'Концерт детских музыкальных коллективов СССР. 1984)', 'Шире круг. 1985'];
let time_singl80=['11040', '7140', '7860', '9000', '9000', '1790', '6000']; 

var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);





let choice_year=0;
let yo_anime;
let yo_telecast;
let yo_films;
let yo_sport;
let yo_singl;
let yo_nazv_an;
let yo_nazv_films;
let yo_nazv_sport;
let yo_nazv_singl;
let yo_nazv_cast;
let time_telecast;
let time_sport;
let time_anime;
let time_singl;
let time_films;




// let audi = new Vue({
//       el: '.myaudio',
//       data: {
//         aud:'',
           
// }
// });
let name='Для начала просмотра включите телевизор тумблером. Выбор канала осуществляйте ручкой-переключателем, предварительно выбрав временной период.';
let naz = new Vue({
      el: '.nazv',
      data: {
        nazv: name,
           
}
});





function cl() {

  if (choice_year==0){
    mus.mus=yo_singl_ng.length;
    film.film=yo_films_ng.length;
    cast.cast=yo_telecast_ng.length;
    anime.anime=yo_anime_ng.length;
    sport.sport=yo_sport_ng.length;
document.querySelector('.j_10').style.borderColor='#F21137';
document.querySelector('.j_50').style.borderColor='transparent';
document.querySelector('.j_60').style.borderColor='transparent';
document.querySelector('.j_70').style.borderColor='transparent';
document.querySelector('.j_80').style.borderColor='transparent';

}
  
if (choice_year==5){
 mus.mus=yo_singl50.length;
 film.film=yo_films50.length;
 cast.cast=yo_telecast50.length;
 anime.anime=yo_anime50.length;
 sport.sport=yo_sport50.length;
document.querySelector('.j_10').style.borderColor='transparent';
document.querySelector('.j_50').style.borderColor='#F21137';
document.querySelector('.j_60').style.borderColor='transparent';
document.querySelector('.j_70').style.borderColor='transparent';
document.querySelector('.j_80').style.borderColor='transparent';

}
if (choice_year==6){
 mus.mus=yo_singl60.length;
 film.film=yo_films60.length;
 cast.cast=yo_telecast60.length;
 anime.anime=yo_anime60.length;
 sport.sport=yo_sport60.length;
document.querySelector('.j_10').style.borderColor='transparent';
document.querySelector('.j_50').style.borderColor='transparent';
document.querySelector('.j_60').style.borderColor='#F21137';
document.querySelector('.j_70').style.borderColor='transparent';
document.querySelector('.j_80').style.borderColor='transparent';
}
if (choice_year==7){
 mus.mus=yo_singl70.length;
 film.film=yo_films70.length;
 cast.cast=yo_telecast70.length;
 anime.anime=yo_anime70.length;
 sport.sport=yo_sport70.length;
document.querySelector('.j_10').style.borderColor='transparent';
document.querySelector('.j_50').style.borderColor='transparent';
document.querySelector('.j_60').style.borderColor='transparent';
document.querySelector('.j_70').style.borderColor='#F21137';
document.querySelector('.j_80').style.borderColor='transparent';
}
if (choice_year==8){
 mus.mus=yo_singl80.length;
 film.film=yo_films80.length;
 cast.cast=yo_telecast80.length;
 anime.anime=yo_anime80.length;
 sport.sport=yo_sport80.length;
document.querySelector('.j_10').style.borderColor='transparent';
document.querySelector('.j_50').style.borderColor='transparent';
document.querySelector('.j_60').style.borderColor='transparent';
document.querySelector('.j_70').style.borderColor='transparent';
document.querySelector('.j_80').style.borderColor='#F21137';
}
    }


let mus = new Vue({
      el: '.chek_mus',
      data: {
        mus: yo_singl_ng.length,
           
}
});

let film = new Vue({
      el: '.chek_film',
      data: {
        film: yo_films_ng.length,
           
}
});

let anime = new Vue({
      el: '.chek_anime',
      data: {
        anime: yo_anime_ng.length,
           
}
});

let cast = new Vue({
      el: '.chek_cast',
      data: {
        cast: yo_telecast_ng.length,
           
}
});

let sport = new Vue({
      el: '.chek_sport',
      data: {
        sport: yo_sport_ng.length,
           
}
});

  let rabota=0;

var vid_content='';
var vid_start='0';
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      
      videoId:vid_content,
     
       playerVars:{
       	start:vid_start,
       	cc_load_policy:'0',
       	autoplay:'0',
       	rel:'0',
       	modestbranding:'1',
       	controls:'0',
       	disablekb:'1',
       	fs:'0',
       	iv_load_policy:'3',
       	showinfo:'0',
        playsinline:1,
       	
       },

       events: {
                    'onStateChange': onPlayerStateChange,
                    'onError': onPlayerError
                    // 'onApiChange':onZagr
                }

    });


  
  }


function onPlayerError(event){

 igrok();
}


function onPlayerStateChange(){


if(player.getPlayerState()==0)

  {
    zast.style.display='block';
    // zast.style.display='none';
	// audi.aud='audio/zast.mp3';
	naz.nazv='Поиск канала';
  conec=1;
   igrok();
 
	// myaud.play();
}


if(player.getPlayerState()==-1)

  {
     // naz.nazv='Поиск канала';
}






if(player.getPlayerState()==1)
{

zast.style.display='none';
// myaud.pause();
}


}




let nach=0;
let janr;











let grad=60;



function igrok(){
zast.style.display='block';
let ruch_per = document.querySelector(".ruch_per");
ruch_per.style.transform='rotate('+grad+'deg)';
grad=grad+30;
document.querySelector('.but').style.display='block';

if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
  var iPhone = document.getElementById("ytplayer");
  iPhone.style.left='17'+'vw';
  iPhone.style.width='85'+'%';
}




if(rabota==1){
zast.style.display='block';
// zast.style.display='none';
vid.pause();
vid.style.display='none';


// myaud.pause();
// audi.aud='audio/perekl.mp3';
// myaud.play();
// audi.aud='audio/zast.mp3';
// myaud.play();

  
let chek_anime=document.querySelector('.anime');
let chek_telcast=document.querySelector('.telcast');
let chek_singl=document.querySelector('.singl');
let chek_films=document.querySelector('.films');
let chek_sport=document.querySelector('.sport');

function janrs() {

  janr=Math.floor(Math.random() * 5); 

if(janr==0 && chek_anime.checked==false){janrs();}
if(janr==1 && chek_telcast.checked==false){janrs();}
if(janr==2 && chek_singl.checked==false){janrs();}
if(janr==3 && chek_films.checked==false){janrs();}
if(janr==4 && chek_sport.checked==false){janrs();}

}
janrs();

switch (janr) {
        case 0:
if (choice_year==0){
i=Math.floor(Math.random() * yo_anime_ng.length);
yo_anime=yo_anime_ng[i];
yo_nazv_an=yo_nazv_an_ng[i];
time_anime=time_anime_ng[i];
vid_content=yo_anime;
 }
if (choice_year==5){
i=Math.floor(Math.random() * yo_anime50.length);
yo_anime=yo_anime50[i];
yo_nazv_an=yo_nazv_an_50[i];
time_anime=time_anime50[i];
vid_content=yo_anime;
 }
if (choice_year==6){
i=Math.floor(Math.random() * yo_anime60.length);
yo_anime=yo_anime60[i];
yo_nazv_an=yo_nazv_an_60[i];
time_anime=time_anime60[i];
vid_content=yo_anime;
}
if (choice_year==7){
i=Math.floor(Math.random() * yo_anime70.length);
yo_anime=yo_anime70[i];
yo_nazv_an=yo_nazv_an_70[i];
time_anime=time_anime70[i];
vid_content=yo_anime;
}
if (choice_year==8){
i=Math.floor(Math.random() * yo_anime80.length);
yo_anime=yo_anime80[i];
yo_nazv_an=yo_nazv_an_80[i];
time_anime=time_anime80[i];
vid_content=yo_anime;
}
  break;

case 1:
if (choice_year==0){
i=Math.floor(Math.random() * yo_telecast_ng.length);
yo_telecast=yo_telecast_ng[i];
yo_nazv_cast=yo_nazv_cast_ng[i];
time_telecast=time_telecast_ng[i];
vid_content=yo_telecast;
 }
if (choice_year==5){
i=Math.floor(Math.random() * yo_telecast50.length);
yo_telecast=yo_telecast50[i];
yo_nazv_cast=yo_nazv_cast_50[i];
time_telecast=time_telecast50[i];
vid_content=yo_telecast;
 }
if (choice_year==6){
i=Math.floor(Math.random() * yo_telecast60.length);
yo_telecast=yo_telecast60[i];
yo_nazv_cast=yo_nazv_cast_60[i];
time_telecast=time_telecast60[i];
vid_content=yo_telecast;
}
if (choice_year==7){
i=Math.floor(Math.random() * yo_telecast70.length);
yo_telecast=yo_telecast70[i];
yo_nazv_cast=yo_nazv_cast_70[i];
time_telecast=time_telecast70[i];
vid_content=yo_telecast;
}
if (choice_year==8){
i=Math.floor(Math.random() * yo_telecast80.length);
yo_telecast=yo_telecast80[i];
yo_nazv_cast=yo_nazv_cast_80[i];
time_telecast=time_telecast80[i];
vid_content=yo_telecast;
}
  break;

case 2:
if (choice_year==0){
i=Math.floor(Math.random() * yo_singl_ng.length);
yo_singl=yo_singl_ng[i];
yo_nazv_singl=yo_nazv_singl_ng[i];
time_singl=time_singl_ng[i];
vid_content=yo_singl;
 }
if (choice_year==5){
i=Math.floor(Math.random() * yo_singl50.length);
yo_singl=yo_singl50[i];
yo_nazv_singl=yo_nazv_singl_50[i];
time_singl=time_singl50[i];
vid_content=yo_singl;
 }
if (choice_year==6){
i=Math.floor(Math.random() * yo_singl60.length);
yo_singl=yo_singl60[i];
yo_nazv_singl=yo_nazv_singl_60[i];
time_singl=time_singl60[i];
vid_content=yo_singl;
}
if (choice_year==7){
i=Math.floor(Math.random() * yo_singl70.length);
yo_singl=yo_singl70[i];
yo_nazv_singl=yo_nazv_singl_70[i];
time_singl=time_singl70[i];
vid_content=yo_singl;
}
if (choice_year==8){
i=Math.floor(Math.random() * yo_singl80.length);
yo_singl=yo_singl80[i];
yo_nazv_singl=yo_nazv_singl_80[i];
time_singl=time_singl80[i];
vid_content=yo_singl;
}
  break;

  case 3:
if (choice_year==0){
i=Math.floor(Math.random() * yo_films_ng.length);
yo_films=yo_films_ng[i];
yo_nazv_films=yo_nazv_films_ng[i];
time_films=time_films_ng[i];
vid_content=yo_films;
 }
if (choice_year==5){
i=Math.floor(Math.random() * yo_films50.length);
yo_films=yo_films50[i];
yo_nazv_films=yo_nazv_films_50[i];
time_films=time_films50[i];
vid_content=yo_films;
 }
if (choice_year==6){
i=Math.floor(Math.random() * yo_films60.length);
yo_films=yo_films60[i];
yo_nazv_films=yo_nazv_films_60[i];
time_films=time_films60[i];
vid_content=yo_films;
}
if (choice_year==7){
i=Math.floor(Math.random() * yo_films70.length);
yo_films=yo_films70[i];
yo_nazv_films=yo_nazv_films_70[i];
time_films=time_films70[i];
vid_content=yo_films;
}
if (choice_year==8){
i=Math.floor(Math.random() * yo_films80.length);
yo_films=yo_films80[i];
yo_nazv_films=yo_nazv_films_80[i];
time_films=time_films80[i];
vid_content=yo_films;
}
  break;

case 4:
if (choice_year==0){
i=Math.floor(Math.random() * yo_sport_ng.length);
yo_sport=yo_sport_ng[i];
yo_nazv_sport=yo_nazv_sport_ng[i];
 time_sport= time_sport_ng[i];
vid_content=yo_sport;
 }
if (choice_year==5){
i=Math.floor(Math.random() * yo_sport50.length);
yo_sport=yo_sport50[i];
yo_nazv_sport=yo_nazv_sport_50[i];
 time_sport= time_sport50[i];
vid_content=yo_sport;
 }
if (choice_year==6){
i=Math.floor(Math.random() * yo_sport60.length);
yo_sport=yo_sport60[i];
yo_nazv_sport=yo_nazv_sport_60[i];
 time_sport= time_sport60[i];
vid_content=yo_sport;
}
if (choice_year==7){
i=Math.floor(Math.random() * yo_sport70.length);
yo_sport=yo_sport70[i];
yo_nazv_sport=yo_nazv_sport_70[i];
 time_sport= time_sport70[i];
vid_content=yo_sport;
}
if (choice_year==8){
i=Math.floor(Math.random() * yo_sport80.length);
yo_sport=yo_sport80[i];
yo_nazv_sport=yo_nazv_sport_80[i];
 time_sport= time_sport80[i];
vid_content=yo_sport;
}
  break;




}

if (conec==1){
  vid_start=0;
switch (janr) {
        case 0:
naz.nazv=yo_nazv_an;
  break;

case 1:
  naz.nazv=yo_nazv_cast;
  break;

case 2:
  naz.nazv=yo_nazv_singl;
  break;

  case 3:
  naz.nazv=yo_nazv_films;
  break;

  case 4:
  naz.nazv=yo_nazv_sport;
  break;
}

}

else{

switch (janr) {
        case 0:
vid_start = Math.floor(Math.random() * time_anime);
naz.nazv=yo_nazv_an;
  break;

case 1:
vid_start = Math.floor(Math.random() * time_telecast);
  naz.nazv=yo_nazv_cast;
  break;

case 2:
vid_start = Math.floor(Math.random() * time_singl);
  naz.nazv=yo_nazv_singl;
  break;

  case 3:
vid_start = Math.floor(Math.random() * time_films);
  naz.nazv=yo_nazv_films;
  break;

  case 4:
vid_start = Math.floor(Math.random() * time_sport);
  naz.nazv=yo_nazv_sport;
  break;
}}

conec=0;


let playr=document.getElementById("ytplayer");
playr.style.display='block';

player.loadVideoById(vid_content, vid_start);
// setTimeout(function(){
// if (player.getDuration()==0) { igrok();}}, 1700);

// player.loadVideoById('FByWlLb14gI', '60');
// player.loadVideoById('HNoLIXDZWYE', '850');


// player.addEventListener("ended",function() {
//         alert('555555');
//     },false);



// player.playerVars.autoplay='1';

// vid.addEventListener("ended",function() {
//         alert(555555);
//     },false);
// }



}


}







let perekl = new Vue({
      el: '.ruch',
      methods: {
      	perekl_on:igrok}});



$('#fluency').change(function()
  {
    if(this.checked!=true)
    {
         rabota=1;ok=1;
zast.style.display='none';
// myaud.pause();

vid.style.display='block';
vid.play();
    }

    else{
document.querySelector('.but').style.display='none';
let playr=document.getElementById("ytplayer");
rabota=0; ok=0;
player.stopVideo();
vid.style.display='none';
vid.pause();
zast.style.display='none';
naz.nazv='Для начала просмотра включите телевизор тумблером. Выбор канала осуществляйте ручкой-переключателем, предварительно выбрав временной период.';
// myaud.pause();
playr.style.display='none';}
  });   




document.querySelector('.but').addEventListener("click",function() {
    
      player.stopVideo();
      zast.style.display='block';
      // zast.style.display='none';
      vid_start=1;
      player.loadVideoById(vid_content, vid_start); 
    },false);



function mod_vkl(){
document.querySelector('.mod_vkl').style.display='flex';
document.querySelector('.mod_vkl').classList.add('mod_yas');
if(ok==0){
document.querySelector('.mod_vkl').style.top=window.pageYOffset+'px';}
else document.querySelector('.mod_vkl').style.top=10+'vh';
ok=1;
document.querySelector('.but_ok').addEventListener("click",function() {
document.querySelector('.mod_vkl').style.display='none';
$(window).scrollTop(document.documentElement.scrollTop-document.documentElement.scrollTop*3);

});


}





function vybor_film(){

  if(rabota==1){
let vf_content=['-2IhHYRXExU', 'bJ3bNH0lj7w', 'QP9cPwpajJ8', 'fH7gtgeckWk', 'Xwv5J63fOFY', 'jZ33mMmfvaM', 'ufMM1zuZf2g', 'B-iVfLX2tvY',
                'YGR1Bg0Ryqk', 'ga5Xj8gK-Dw', 'egDa3DZaRPE', 'Sl692kOCc6Q', 'Ted9HpTG7EE', 'AdPrucQOKAw', 'gZiKrWSzNBo', 'SW2SySreo-k', 
                'Wp3PY0xHf80', 'CBMEfNBaxLo', 'figIDuctqMY', '4JZzsIncaVo', 'oyqstkNNnmw', 'CVU_Xu_AXNQ', 'V_J-keZ1bqA', '5XV_b6Xv0H8',
                '_NmdHrBgMm8', 'RmRiDhR0c28', 'up71u5SOUrU', 'iXQAfWTRZvI', '3Oo9HmVEbbw', '75yyoiK7lZw', '2FYPgLxcDs0', '_ppjNnwvOSQ',
                '9GttswTHUgI', 'GF_r_KbdYb4', '8ftGvvUD1Nw', 'Eaaa5rLAlTA', 'snXuJa5y768', 'iBNwsNmKGxA', 'x_-ehagcrBg', '1shgdfKj6Xw', 
                'xJ5iHFSdAU4', 'P2_sjEURwgo', 'B-iVfLX2tvY', 'P8t2dbJ7YXY', 'a50qT9bW2Qo', 'DZHXRy-FTuM', '12-mEzG8TUo', 'FxWczA4ZgI4',
                'Glle7qNMxCE', 'UWpyJM-0qlI'];
let vf_nazv=['А если это любовь? 1961', 'Мой младший брат. 1962', 'Два воскресенья. 1963', 'Три плюс два. 1963', 'Год, как жизнь. 1966',
              'Берегись автомобиля. 1966', 'Таинственная стена.Фантастика. 1967', 'Бриллиантовая рука. 1968', 'Урок литературы. 1968', 
              'Похищение. Музыкальный фильм, комедия. 1969', 'Достояние Республики.1971', 'Старики-разбойники. 1971', 'Тень. 1971',
              'Соломенная Шляпка, 1 cерия. 1974', 'Обыкновенное чудо, 1 серия. 1978', 'Трое в лодке, не считая собаки, 1 серия. 1979', 'О бедном гусаре замолвите слово, 1 серия. 1980',
              'Будьте моим мужем. 1981', 'Блондинка за углом. 1984', 'Человек с бульвара Капуцинов. 1987)', 'Следопыт. 1987. Последняя роль А. Миронова в кино...', 'Неотправленное письмо. 1959',
              'Слепой музыкант. 1960', 'Большие и маленькие. 1963', 'Звезда пленительного счастья. 1975', 'Приключения Шерлока Холмса и доктора Ватсона: Король шантажа. 1980',
              'Приключения Шерлока Холмса и доктора Ватсона: Охота на тигра. 1980', 'Приключения Шерлока Холмса и доктора Ватсона: Собака Баскервилей. 1981', 'Необыкновенные приключения Карика и Вали. 1987',
              'Два бойца. 1943', 'Поединок 1944', 'Без вести пропавший. 1956', 'Их знали только в лицо. 1966', '«Сердце Бонивура» 1969', 'Семнадцать мгновений весны 1 серия. 1973', 'Долгий путь. 1956', 'Трижды воскресший. 1960',
              'Пёс Барбос и необычный кросс. 1961', 'Самогонщики. 1961', 'В пути. 1961', 'Операция «Ы» и другие приключения Шурика. 1965', 'Кавказская пленница, или Новые приключения Шурика. 1966', 'Бриллиантовая рука. 1968',
              'Двенадцать стульев. 1971', 'Иван Васильевич меняет профессию. 1973', 'Не может быть. 1975', 'За спичками. 1980', 'Спортлото-82. 1982', 'Опасно для жизни. 1985', 'Частный детектив, или операция «Кооперация». 1989'];
 

  zast.style.display='block';
      vid_start=1;
      vid.pause();
vid.style.display='none';
      let playr=document.getElementById("ytplayer");
      playr.style.display='block';
      naz.nazv=vf_nazv[vf-1];
      document.querySelector('.but').style.display='none';
     player.loadVideoById(vf_content[vf-1], vid_start);   
} 
else mod_vkl();
}


let buttonMainVF = document.querySelectorAll('.mainVF'),
    indexMainVF, buttonVF;

for (indexMainVF = 0; indexMainVF < buttonMainVF.length; indexMainVF++) {
    buttonVF = buttonMainVF[indexMainVF];
    buttonVF.addEventListener('click', function (event) {
    vybor_film();})

}






let klick_det=0;
let buttonDetails = document.querySelectorAll('details'),
    indexDetails, buttonDet;

for (indexDetails = 0; indexDetails < buttonDetails.length; indexDetails++) {
    buttonDet = buttonDetails[indexDetails];
    buttonDet.addEventListener('click', function (event) {
        
      var w=document.documentElement.clientWidth;
        let el_click=this.getBoundingClientRect().top;
        if (klick_det==0){
        this.setAttribute('open', true);
       var h=this.clientHeight;
      this.removeAttribute('open');
      }
 
        if (klick_det==0){
          klick_det=1;
        window.setTimeout(function() {
          if (el_click>0.1*w ){
           
$(window).scrollTop(document.documentElement.scrollTop+el_click);}

else{ $(window).scrollTop(document.documentElement.scrollTop-h);}
}, 0);
        
    }
else{klick_det=0;$(window).scrollTop(document.documentElement.scrollTop);}




  });
}




// vid.ontimeupdate = function() {
 
// console.log(vid.currentTime);
// if(vid.currentTime<vid.duration){
// 	smotr.put='video/60/singl/singl1.mp4';
// console.log(put);
	
// }

// } 



