# Статистика текста

![test-check](https://github.com/wypwawii/text-statistics-assignment/actions/workflows/test-check.yml/badge.svg?branch=source)

## Задание

Реализуйте в файле **src/index.js** три функции и экспортируйте их.

### `countWords(text)`

Возвращает количество слов в строке.

- Слова разделяются одним или несколькими пробелами.
- Пустые фрагменты игнорируются.
- Для пустой строки или строки из одних пробелов возвращается `0`.

Примеры:

```javascript
countWords('hello world'); // 2
countWords('  one   two  three  '); // 3
countWords(''); // 0
```

### `getLongestWord(text)`

Возвращает самое длинное слово в строке.

- Если несколько слов имеют одинаковую максимальную длину, возвращается первое из них.
- Для пустой строки или строки из одних пробелов возвращается `''`.

Примеры:

```javascript
getLongestWord('cat elephant dog'); // 'elephant'
getLongestWord('ab cd ef'); // 'ab'
getLongestWord(''); // ''
```

### `reverseWords(text)`

Возвращает строку с теми же словами в обратном порядке.

- Лишние пробелы в начале, конце и между словами не сохраняются.
- Слова в результате разделяются одним пробелом.
- Для пустой строки или строки из одних пробелов возвращается `''`.

Примеры:

```javascript
reverseWords('one two three'); // 'three two one'
reverseWords('  alpha   beta  '); // 'beta alpha'
reverseWords(''); // ''
```

## Запуск тестов

```bash
make install
make test
```

## Как работает репозиторий

- Ветка **source** содержит задание, тесты и эталонное решение.
- Ветка **main** обновляется автоматически после успешного прохождения тестов в **source**.
- В **main** файл **src/index.js** остаётся пустым. Это шаблон для выполнения задания.
