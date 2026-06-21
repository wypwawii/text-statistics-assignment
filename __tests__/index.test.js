import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { countWords, getLongestWord, reverseWords } from '../src/index.js';

describe('countWords', () => {
  it('считает слова в обычной строке', () => {
    assert.equal(countWords('hello world'), 2);
  });

  it('игнорирует лишние пробелы', () => {
    assert.equal(countWords('  one   two  three  '), 3);
  });

  it('возвращает 0 для пустой строки', () => {
    assert.equal(countWords(''), 0);
    assert.equal(countWords('   '), 0);
  });
});

describe('getLongestWord', () => {
  it('находит самое длинное слово', () => {
    assert.equal(getLongestWord('cat elephant dog'), 'elephant');
  });

  it('возвращает первое слово при равной длине', () => {
    assert.equal(getLongestWord('ab cd ef'), 'ab');
  });

  it('возвращает пустую строку для пустого текста', () => {
    assert.equal(getLongestWord(''), '');
    assert.equal(getLongestWord('   '), '');
  });
});

describe('reverseWords', () => {
  it('переворачивает порядок слов', () => {
    assert.equal(reverseWords('one two three'), 'three two one');
  });

  it('нормализует лишние пробелы', () => {
    assert.equal(reverseWords('  alpha   beta  '), 'beta alpha');
  });

  it('возвращает пустую строку для пустого текста', () => {
    assert.equal(reverseWords(''), '');
    assert.equal(reverseWords('   '), '');
  });
});
