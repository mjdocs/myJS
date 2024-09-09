<div align='center'>
    <img src='./static/img/ecma-big.png'>
</div>

<br><br>

<div align='right'>
    <q><i>The World’s Most Misunderstood Programming Language Has Become the World’s Most Popular Programming Language</i></q>
    <br>
    <sub>~ Douglas Crockford, 2008</sub>

📜[^1]

</div><br>

<hgroup>
    <h1 align='center'>— MyJS Web Docs —</h1>
    <p align='center'>Первое приближение к общему пониманию ECMAScript Language Specification.</p>
</hgroup>

[MyJS Web Docs](https://github.com/denlove/myJS) — это _неофициальная авторская документацая_ в
формате непринуждённого разговора с читателем, представляющая из себя набор сгруппированных по
главам тем, мыслей, фактов, выводов и собственных мнений относительно того, чем для меня является
спецификация ECMAScript, как для разработчика на языке JavaScript. Я попытался проникнуться
содержанием данной спецификации и в помощь всем остальным, кто тоже захочет её постичь, решил
написать данный документ, отражающий моё видение тех вещей, которые находятся непосредственно в зоне
ответственности официального
[_стандарта ECMA-262_](https://ecma-international.org/publications-and-standards/standards/ecma-262/).
Документация вынесена на суд общественности и комьюнити разработчиков в полном объёме. Активные
споры и конструктивные предложения приветствуются.

<br>

## 🗂️ Содержание

> [!WARNING]  
> В данный момент продукт находится на этапе _**активной разработки!**_ Содержимое и оформление
> может изменяться.

> [!NOTE]  
> По мере возможности данная документация постепенно будет дополняться и редактироваться согласно
> новым версиям спецификации ECMAScript и появлению мнений и оценок со стороны читающих её людей,
> которые захотят поделиться своими мыслями и сделать свой вклад в этот продукт.

#

Здесь представлено полное доступное содержание документации:

### Часть 1: ECMAScript

-   Глава 0: [Важное предисловие](https://mjdocs.github.io/myJS/docs/preface)
-   Глава 1: [Методология исследования](https://mjdocs.github.io/myJS/docs/methodology)
-   Глава 2: [Введение](https://mjdocs.github.io/myJS/docs/introduction)
-   Глава 3.0: [Начало языка](https://mjdocs.github.io/myJS/docs/language-beginning)
    -   Глава 3.1:
        [Грамматика языка спецификации](https://mjdocs.github.io/myJS/docs/language-beginning/language-grammar)
    -   Глава 3.2:
        [Грамматика — Свобода vs Сложность](https://mjdocs.github.io/myJS/docs/language-beginning/grammar-freedom-vs-complexity)
    -   Глава 3.3:
        [Типы языка спецификации](https://mjdocs.github.io/myJS/docs/language-beginning/language-spec-types)
        ✏️
    -   Глава 3.4:
        [Алгоритмы "под капотом"](https://mjdocs.github.io/myJS/docs/language-beginning/algorithms-under-the-hood)
-   Глава 4.0: [Такие разные Records](https://mjdocs.github.io/myJS/docs/records) ✏️
    -   Глава 4.1:
        [Environvent Record или Funarg проблема](https://mjdocs.github.io/myJS/docs/records/environment-record)
        ✏️
-   Глава 5: [Продвинутые алгоритмы](https://mjdocs.github.io/myJS/docs/advanced-algorithms)
-   Глава 6: [Realms](https://mjdocs.github.io/myJS/docs/realms) ✏️

<br>

## 🍰 Мотивация

В жизни каждого разработчика возникает момент, когда он сталкивается с задачами, где **_вопрос
оптимизации_** крайне важен. А когда синтаксис языка и его паттерны уже изучены и отработаны на
практике, хочется понять, как он работает "_под капотом_". Понимание спецификации языка ECMAScript -
огромный шаг на пути к написанию высокооптимизированного кода. Задача документации — углубиться в
недра спецификации и показать, из чего она состоит, как её читать и как устроены основные алгоритмы
языка. В этом нам поможет, к сожалению, единственный официальный источник -
[_ECMAScript Language Specification_](https://tc39.es/ecma262/multipage/).

Как известно, **_JavaScript — язык сверхвысоких абстракций_**, и его спецификация написана в том же
духе. Поэтому документация призвана, в том числе помочь совместно с рассказчиком разобраться в
дебрях и абсолютных неочевидностях, встречающихся повсеместно. Например, оказывается, что строка
кода ниже на языке JavaScript _не имеет ничего общего с переменными, присваиванием и примитивами_.
**_Вместо этого поверх вышесказанного язык вводит свои термины и абстракции, с которыми позволяет
нам работать._**

```js
var str = 'hello' // свяжем идентификатор str со строкой 'hello'
```

Для написания качественного кода знаний одной лишь спецификации недостаточно! Немаловажным будет
изучить и работу оптимизирующего движка, например, [_V8_](https://v8.dev/blog) — самый успешный
JavaScript движок современности.

<br>

## 🚀 Внесли серьёзный вклад

Здесь представлены люди[^2], которые немало поработали над тем, чтобы документация вышла в свет и в
будущем становилась только лучше по мере выхода новых глав, исправлений и дополнений. Этот список
**_будет пополняться_** в зависимости от вкладов в проект.

<div>
    <a href='https://github.com/denlove'>
        <img width='170' height='170' src="./static/img/profile.png" alt="denlove avatar" />
    </a>
</div>
<br>

Информация собрана при поддержке[^3] таких проектов, как:

<div align='left'>
    <a href='https://tc39.es/'><img src="./static/img/tc39.png" height="50"></a>
    &nbsp;
    <a href='https://v8.dev/'><img src='./static/img/v8.png' height='50'></a>
    &nbsp;
    <a href='https://spec.whatwg.org/'><img src="./static/img/whatwg.png" height="50"></a>
    &nbsp;
    <a href='https://www.wikipedia.org/'><img src="./static/img/wiki.png" height="50"></a>
    &nbsp;
    <a href='https://www.youtube.com/@AsForJS'><img src="./static/img/asforjs.png" height="50"></a>
    &nbsp;
    <a href='https://www.chromium.org/Home/'><img src='./static/img/chromium.png' height='50'></a>
    &nbsp;
    <a href='https://github.com/mjdocs'><img src="./static/img/myJS.png" height="50"></a>
</div>

<br>

## 🎓 Лицензия и Авторское право

На документацию распространяется лицензия:
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

[^1]:
    Название [статьи](https://crockford.com/javascript/popular.html), опубликованной в 2008 году
    американским программистом
    [Дугласом Крокфордом](https://en.wikipedia.org/wiki/Douglas_Crockford). На тот момент это была
    интересная фигура в мире веб-индустрии. Сам Брендан говорил о нём
    [такие слова](<https://brendaneich.com/2005/06/javascript-1-2-and-in-between/#:~:text=top%20of%20it.%20(-,I%20don%E2%80%99t%20agree%20with%20everything%20Doug%20Crockford%20writes%20at%20the%20last%20two%20links%2C%20but%20most%20of%20his%20arrows%20hit%20their%20targets.,-)>).

[^2]:
    Каждый участник этого блока имеет возможность выбрать для себя анимированную _рамку_ на свою
    фотографию. Использование рамок имеет некоммерческий характер и предоставляется
    [разделом](https://store.steampowered.com/points/shop/c/avatar/cluster/1) сайта
    [_Steam_](https://store.steampowered.com/).

[^3]:
    Под поддержкой автор подразумевает регулярный выпуск представленными проектами новой информации
    и её последующее обновление с целью актуализации. Отчасти данный продукт развивается в том числе
    благодаря этим проектам.
