<div>
    <img src='assets/formal.svg'>
    <img src='assets/normal.svg'>
    &nbsp;&nbsp;
    <sup><b>5 min</b></sup>
</div>

# Глава 5: Realms

> [!TIP]  
> Глава находится в разработке

В этой главе мы поговорим о такой сущности, как _realm_, расставим все точки над i, попробуем
представить себе, как он устроен. Мы рассмотрим, как _realm_ представлен в спецификации ECMAScript,
обратимся за подробностями к _WHATWG HTML spec_ и соотнесём данные для конкретных выводов.

## Душа _realm_

Перед тем как пройти этап
[_Evaluation_](https://tc39.es/ecma262/multipage/syntax-directed-operations.html#sec-evaluation),
согласно спецификации, весь ECMAScript код должен быть связан с некоторым **_realm_**. Причин у
этого много, и все они кроются в том, как с этим _realm_ работают остальные участки спецификации.
