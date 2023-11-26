# unit test

> `sass-true` + `jest`


## sass-true

[docs](https://www.oddbird.net/true/docs/)

### 返回值

- `assert-true`, 同 `is-truthy`
- `assert-false`, 同 `is-falsy`
- `assert-unequal` 同 `is-equal`
- `assert-unequal`, 同`not-equal`

```scss
@include true.test('Non-empty strings are truthy') {
  @include true.assert-true('Hello World');
}

@include true.test('Empty strings are falsey') {
  @include true.assert-false('');
}

@include true.test('Division works as expected in Sass') {
  @include true.assert-equal(math.div(8, 2), 4);
}

@include true.test('Strings and numbers are not the same') {
  @include true.assert-unequal(1em, '1em');
}
```


### 输出
- `assert`
  - `output`
  - `expect`

```scss
@include true.assert('desciprtion') {
  @include true.output {
    width: 14em + 2;
  }
  @include true.expect {
    width: 16em;
  }
}
```