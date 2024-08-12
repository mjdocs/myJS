<div align='left'>
    <img src='../assets/formal.svg'>
    <img src='../assets/hard.svg'>
    &nbsp;&nbsp;
    <sup><b>18 min</b></sup>
</div>

<div align='right'>
    <q><i>Language is a city to the building of which every human being brought a stone.</i></q>
    <br>
    <sub>~ Ralph Waldo Emerson, 1875.</sub>

📜[^1]

</div>

# Глава 3.2: Грамматика — Свобода vs Сложность

Грамматика языка спецификации за всё своё время существования претерпела много изменений. Язык
ECMAScript развивался от версии к версии. С момента выпуска
[первой версии](https://ecma-international.org/publications-and-standards/standards/ecma-262/#:~:text=Archives-,ECMA%2D262%2C%201st%20edition%2C%20June%201997%20%2D%20PDF%20file,-Download)
спецификации в 1997 году, которая умещалась чуть более, чем на 100 страницах, в данный момент это
число перевалило за 800, то есть материала стало в 8 раз больше.

Первая версия спецификации многого не имела, если сравнивать с текущим прогрессом ECMAScript, но
выбор в пользу описания языка через _formal language_ был сделан уже тогда.

У спецификации того времени была своя "_атмосфера_". Если сравнивать с последней версией, там, в
первой, всё было куда проще. Многое было вынесено в общие блоки с кратким описанием, а бич на
бесконтрольные сокращения в угоду простоты написания редакторами, а не понимания обычными людьми,
ещё не получил серьёзного развития.

Всё пришло к тому, что написанием спецификации занялись люди, далёкие от разработки. Уверен, они,
скорее всего, являются хорошими лингвистами или учёными, но это не отменяет того факта, что
описанием языка занимаются люди, которым как будто не приходилось применять его в серьёзных
условиях, для себя. Такие документы должны писаться согласно модели _"разработчик -
разработчику"_[^2].

Ввиду всего вышесказанного, попросту говоря, познать спецификацию в современных условиях стало
сверхсложной задачей глобального уровня для рядового разработчика. Так что давайте продолжим разбор
грамматики.

## Виды грамматик

Как было описано ранее, грамматика языка спецификации ECMAScript разделена на несколько
подграмматик. Каждая из них устанавливает свои правила реализации граммматических обозначений, то
есть реализует свои требования и ограничения на то, что она подразумевает под общими терминами
**_context-free grammar_**. Например, **_terminal symbols_** в разных грамматиках определяются
по-разному.

Всего на страницах спецификации по одному общему приципу реализовано 4 вида частных грамматик:

-   [Lexical grammar](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-ecmascript-language-lexical-grammar)
-   [RegExp grammar](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-lexical-and-regexp-grammars)
-   [Numeric string grammar](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-numeric-string-grammar)
-   [Syntactic grammar](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-syntactic-grammar)

Давайте приступим к внимательному рассмотрению каждой из них. Заодно попутно попытаемся ответить на
вопрос: что лучше - **_Свобода vs Сложность_**?

> [!NOTE]  
> **_Далее будет происходить переплетение языка ECMAScript с языком спецификации._**

### Lexical grammar

Эта грамматика является основополагающей во всём языке. Она помогает разбивать нашу программу по
смысловым частям - по сути, _придаёт смысл_ нашим написанным буквам и цифрам в коде. Именно она
вступает в игру, когда необходимо определить, какую сущность языка мы тут написали, будь то
идентификатор
([_Identifiers_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-identifiers)),
цикл _`while`_
([_WhileStatement_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-WhileStatement))
или комментарий
([_Comments_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-comments)).
И эта грамматика отвечает не за правильность их расположения относительно друг друга, а только за
распознавание из всего нашего кода тех или иных конструкций языка, прописанных в нём, согласно
спецификации.

Она призвана распознавать и различать сущности языка на, так называемые, неделимые лексические
единицы
([**_indivisible lexical units_**](<https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#prod-LineTerminator:~:text=and%20to%20separate%20tokens%20(-,indivisible%20lexical%20units,-)%20from%20each%20other.%20However>)),
особенно когда один и тот же символ в разных грамматических контекстах обозначает разные смысловые
конструкции, например, знак "**+**" может быть унарным оператором
([_UnaryExpression_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-UnaryExpression))
или знаком сложения двух частей
([_AdditiveExpression_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-AdditiveExpression)).

В основе этой грамматики лежит некоторый
[Unicode **_code point_**](https://en.wikipedia.org/wiki/Code_point#In_Unicode) - кодовое значение
символа [Unicode](https://en.wikipedia.org/wiki/Unicode). Именно из таких символов состоит
написанный программистами код или, согласно _Lexical grammar_, исходный текст
([**_source text_**](https://tc39.es/ecma262/multipage/ecmascript-language-source-code.html#sec-source-text)).
В рамках этой грамматики **_code point_** - это уже знакомый нам **_terminal symbol_**. Вот как
выглядит **_code point_** в спецификации:

<div align='center'>
    <img src='assets/grammar1.png' alt='Image with grammar'>
</div> <br>

Итак, **_source text_** определяется как последовательность **_code points_**. Как и в обычном
"предложении", code points собираются в "слова", названные в грамматике
[**_input elements_**](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-syntactic-and-lexical-grammars:~:text=of%20input%20elements.-,Input%20elements%20other%20than%20white%20space%20and%20comments%20form%20the%20terminal%20symbols%20for%20the%20syntactic%20grammar%20for%20ECMAScript%20and%20are%20called%20ECMAScript%20tokens.,-These%20tokens%20are)
или уже известные нам **_nonterminal symbols_**.

Так, уже в рамках другой грамматики - _Syntactic grammar_ - наши **_input elements_** формируют
**_token_**-ы. То есть, буквально, токен `while` (цикл while в JavaScript) побуквенно или, согласно
_Lexical grammar_, по каждому **_code point_** был собран в **_input element_** `while`, который
также является **_token_**-ом в рамках уже _Syntactic grammar_, отвечающей за синтаксис.

Идентифицировать грамматику можно по _двойному двоеточию_ - **_"::"_** (_two colons_). На картинке
ниже изображены 2 **_productions_** в _Lexical grammar_:

<div align='center'>
    <img src='assets/grammar2.png' alt='Image with grammar'>
</div> <br>

<details>
<summary><i>Обращаю внимание</i></summary>
<br>

> Может показаться, что одни и те же термины являются одинаковыми для разных грамматик. **_Это не
> так!_** Каждой грамматике самой дозволено определять, что она считает **_terminal symbol_**, а
> что - **_token_**. Выше Вы увидели, что такое переплетение двух грамматик.
>
> `while` для _Lexical grammar_ - это последовательность **_Unicode code points_**, то есть **_input
> element_**, который по совместительству является и **_nonterminal_**, а для _Syntactic grammar_
> этот же самый `while` - это **_token_** или **_terminal symbol_**.

</details>

#### Parsing

То есть если рассматривать на реальном примере парсинга кода программы, наш _source text_, который в
алгоритмах определяется спецификацией в рамках
[_Script_](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-scripts)
или
[_Module_](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-modules),
согласно _Lexical grammar_, на этом этапе разбивается на последовательность **_input elements_**.
Делается это во время многократного сканирования _source text_ слева направо в поисках максимальной
последовательности **_code points_**, чтобы определить её, как **_token_**, и занести в условный
список распознанных **_input elements_**.

Немаловажными элементами в процессе сканирования кода являются разделители строк
([_Line Terminators_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-line-terminators)),
пробелы
([_White Space_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-white-space))
и комментарии
([_Comments_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-comments)).
Разделители строк не являются токенами, но попадают в **_input elements_**, в отличие от пробелов и
однострочных комментариев. А вот многострочный комментарий
([_MultiLineComment_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#prod-MultiLineComment))
имеет свою отдельную проверку.

Особое место занимает операция автоматической расстановки оператора-пунктуатора
([_Punctuators_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-punctuators))
";" или
[_Automatic Semicolon Insertion_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-automatic-semicolon-insertion).

Как итог, можно сказать, что Lexical grammar служит для всех остальных ориентиром. Без неё не будет
работать ни одна другая грамматика, потому что именно она определяет, что Вы имели в виду, когда
писали тот или иной символ.

### RegExp grammar

Об этой грамматике стоит лишь сказать, что её отделили от _Lexical grammar_ в целях разделения
ответственности за предмет своего описания - регулярные выражения
([_regular expressions_](https://tc39.es/ecma262/multipage/text-processing.html#sec-regexp-regular-expression-objects)).
Грамматика описывает, как последовательности **_code points_** преобразуются в паттерны регулярных
выражений.

_RegExp_ и _Lexical grammars_ имеют много общего; даже на уровне спецификации они определяются
вместе в общем блоке и имеют почти одинаковые обозначения грамматических терминов, типа **_terminal
symbols_** и других. Идентифицировать первую можно также по двум двоеточиям **_"::"_** (_two
colons_), что можно увидеть на картинке ниже:

<div align='center'>
    <img src='assets/grammar3.png' alt='Image with grammar'>
</div> <br>

Более детальный разбор грамматики в текущем формате документации будет опущен.

### Numeric String grammar

Это ещё одна дополнительная грамматика, являющаяся попросту инкапсулированным вариантом _Lexical
grammar_ для определения частных форм операции
[приведения типов](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion) в
языке ECMAScript - конвертация
[_primitive value_](https://tc39.es/ecma262/multipage/overview.html#sec-primitive-value) типа
[_String_](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-string-type)
в _primitive value_ общего типа
[_Numeric type_](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numeric-types):
[_Number_](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type)
или
[_BigInt_](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-bigint-type).

Вот примеры определения _Numeric String grammar_, идентифицирующиеся с помощью трёх двоиточий
"**_:::_**" (_three colons_):

<div align='center'>
    <img src='assets/grammar4.png' alt='Image with grammar'>
</div> <br>

Более детальный разбор грамматики в текущем формате документации будет опущен.

### Syntactic grammar

Последняя по счёту, но не по значению, эта грамматика является равной по важности _Lexical grammar_,
без которой тоже невозможно представить ни один язык. Как мы определили выше, если первая даёт нам
возможность _распознать токены_, то эта грамматика уже определяет, _как последовательности токенов
формируют_ синтаксически правильные независимые компоненты программы.

По сути, эта грамматика определяет возможные варианты синтаксиса языка, то есть как нам, согласно
спецификации, разрешено писать ту или иную конструкцию программы. Вместе с этим грамматикой
накладываются ограничения на наш код, и в качестве сигнала их достижения - синтаксические ошибки.

В основе этой грамматики лежит **_token_**, здесь он же и **_terminal symbol_**. Выше мы уже
рассмотрели один из таких токенов - _`while`_. Вот как он в рамках грамматики выглядит в
спецификации, с разделением на две части с помощью одного двоеточия **_":"_** (_just one colon_):

<div align='center'>
    <img src='assets/grammar5.png' alt='Image with grammar'>
</div> <br>

Остальные сущности на картинке нам уже знакомы из общей, базовой грамматики. Так что предлагаю
рассмотреть особенности работы _Syntactic grammar_.

#### Parsing

Сначала проводится сканирование кода по типу, указанному в _Lexical grammar_, чтобы вычленить из
_source code_ некие **_input elements_** в отдельный **_stream_**, среди которых будут **_tokens_**
и **_Line terminators_**. Затем, согласно спецификации, для этого **_stream_**
[однократно](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-numeric-string-grammar:~:text=the%20lexical%20grammar%3B-,this%20stream%20of%20input%20elements%20is%20then%20parsed%20by%20a%20single%20application%20of%20the%20syntactic%20grammar,-.%20The%20input%20stream)
будет произведён парсинг в рамках уже рассматриваемой _Syntactic grammar_ на наличие синтаксических
ошибок. Они могут быть найдены
[только](<https://tc39.es/ecma262/multipage/notational-conventions.html#sec-numeric-string-grammar:~:text=)%2C-,with%20no%20tokens%20left%20over,-.>)
в том случае, если в момент соотнесения **_input elements_** из **_stream_** с **_nonterminal
symbols_** грамматики будут замечены лишние незадействованные **_tokens_**.

После успешного парсинга, что логично, должен быть представлен какой-то результат. Согласно
спецификации, создаётся некое **_parse tree_** - корневая древовидная
[структура](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-numeric-string-grammar:~:text=tree%2C%20a-,rooted%20tree%20structure%20in%20which%20each%20node%20is%20a%20Parse%20Node,-.%20Each%20Parse%20Node),
ответвления которого формируют **_Parse Node_**. Такое строение достаточно просто описывается тем,
что каждая отдельная сущность (_instance_) предствляет собой **_nonterminal_** с соотнемённым куском
_source text_, а в основании **_parse tree_** - весь представленный _source text_.

Согласно спецификации, важно помнить что:

> Parse Nodes are specification artefacts, and implementations are not required to use an analogous
> data structure.
>
> ~
> [tc39](https://tc39.es/ecma262/multipage/notational-conventions.html#sec-numeric-string-grammar:~:text=NOTE%202-,Parse%20Nodes%20are%20specification%20artefacts%2C%20and%20implementations%20are%20not%20required%20to%20use%20an%20analogous%20data%20structure.,-Productions%20of%20the)

#### Кругом одни Yield / Await

Так уж вышло, что с выходом новых версий языка вводились и новые функции. Это привело к появлению
новых ключевых зарезервированных слов
([_Keywords and Reserved Words_](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-keywords-and-reserved-words)),
которые разработчики раньше могли использовать в своих программах в качестве идентификаторов.

В целях обратной совместимости, чтобы сохранить работоспособность всего написанного ранее кода, была
придумана машинерия по аккуратному добавлению новых ключевых слов в язык. На страницах спецификации
это реализовали самым неудобным способом, из-за чего теперь почти в каждом **_production_**
представлены два интересных параметра [Yield, Await].

## Вывод

Давайте подытожим всё вышесказанное:

1. На страницах спецификации живут и властвуют 4 вида грамматик, выполняющие свои обособленные роли:
   _Lexical, RegExp, Numeric String_ и Syntactic _grammar_.
2. _Lexical grammar_: определяет, как **_Unicode code points_** преобразуются в **_input
   elements_**.
3. _RegExp grammar_: определяет, как **_Unicode code points_** преобразуются в паттерны регулярных
   выражений
4. _Numeric String grammar_: опредеяет, как строки преобразуются в числовые значения.
5. _Syntactic grammar_: определяет, как последовательности токенов формируют синтаксически
   правильные независимые компоненты программы.
6. Рассуждая над тем, каков же итог нашего раунда - **_Свобода vs Сложность_** - понятно одно: язык
   спецификации написан свободно, что удобно для редактирования, и сложно, что плохо для восприятия.

~ [Глава 3.1: Грамматика языка спецификации](./Chapter_1.md) > Глава 3.2: Грамматика — Свобода vs
Сложность > [Глава 3.3: Типы языка спецификации](./Chapter_3.md)

[^1]:
    Так Ральф Эмерсон написал в своей книге "_Letters and Social Aims_" в 1875 году. Он был
    человеком, который на собственном опыте осознал, что значит "_сделать себя самому_". Признан
    общественностью глубочайшим умом Америки.

[^2]:
    Авторский термин. Автор уверен, что разработчики, как никто другие, знают, как правильно и
    понятно описать что-либо так, чтобы это понял другой разработчик.
