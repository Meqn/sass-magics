# sass-magics

> Sass magic helper.

It extends the Sass built-in modules and provides useful mixins and functions that make your Sass writing more magical and elegant.

一个功能丰富的 Sass 魔法助手。它扩展了 Sass 内置模块，并提供了常用的 mixins 和 functions，让你的 Sass 编写更加魔法般的便捷和优雅。

## Installation

```bash
npm install sass-magics
# or
yarn add sass-magics
```


## Usage

```scss
// @import
@import "sass-magics";

// @use ✅
@use "sass-magics as *";
```

**Using a single module**
```scss
// @import
@import 'sass-magics/mixins/media-queries';

// @use ✅
@use 'sass-magics/mixins/media-queries' as * with (
  $_breakpoints: (
    'mobile': 320px,
    'phablet': 480px,
    'tablet': 800px,
    'desktop': 1280px,
    'wide': 1920px
  )
);
```



## modules
```scss
@import 'sass-magics/core/string';
@import 'sass-magics/core/list';
@import 'sass-magics/core/map';
```

### string
- `str-replace($string, $search, $replace: "")`

```scss
@debug str-replace('hello world', 'world', 'sass');
```

### list
- `list-sub($list, $start, $count: false)`
- `list-subset($list, $start, $end: false)`
- `list-remove($list, $args...)`
- `list-insert($list, $start, $args...)`
- `list-splice($list, $start, $count: false, $args...)`
- `list-extend($lists..., $separator: false, $bracketed: false)`
- `list-each($list, $callback: null)`
- `list-sort($list, $order: ascend)`
- `list-reverse($list, $separator: false, $bracketed: false)`

```scss
$list: (4px, 8px, 12px, 16px, 20px);

@debug list-sub($list, 2, 1);
@debug list-subset($list, 2, 3);
@debug list-remove($list, 8px, 12px);
@debug list-insert($list, 2, 10px, 11px);
@debug list-splice($list, 2, 1, 6px, 8px, 10px);
@debug list-extend($list, (24px 32px 40px));
@debug list-sort($list, 'descend');
@debug list-reverse($list, 'space', true);

@function list-item($item, $index, $list) {
  @return $item;
}
@debug list-each($list, get-function(list-item));
```

### map
- `map-sort($map, $callback: null, $order: ascend)`
- `map-extend($maps..., $deep:?)`


## functions
```scss
@import 'sass-magics/functions/unit';
@import 'sass-magics/core/validator';
```

**unit**
- `strip-unit($value)`
- `compare-unit($values...)`
- `join-unit($value, $unit)`
- `add-unit($value, $unit)`
- `px2rem($value, $base:?)`
- `px2em($value, $base:?)`

**validator**
- `is-color($color)`



## mixins
```scss
@import 'sass-magics/mixins/selector';
@import 'sass-magics/mixins/media-queries';
@import 'sass-magics/mixins/use-theme';
@import 'sass-magics/mixins/center';
@import 'sass-magics/mixins/ellipsis';
@import 'sass-magics/mixins/triangle';
```

- `flex-center`
- `position-center($width: auto)`
- `inline-center($align: null)`
- `ellipsis($rows, $max-width, $display)`
- `triangle($direction, $color, $width, $height)`

**media-queries**
- `mq($min:?, $max:?, $orientation:?, $and:?, $media-type:?, $breakpoints:?)`
- `respond-to($key, $breakpoints:?)`
- `change-breakpoints($key, $point:?, $breakpoints:?)`

**use-theme**
- `useTheme`
- `useThemeVar($name)`

```scss
@use 'sass-magics/mixins/use-theme' as * with (
  dark: (
    primary-color: #fff,
  ),
  light: (
    primary-color: #000,
  )
);

.primary-button{
  @include useTheme {
    color: useThemeVar('primary-color');
  }
}
```

**selector**
- `limit-parent($selector, $limiter)`

```scss
.users{
  .list{
    .item{
      background-color: #eee;

      @include limit-parent('.list', '.active') {
        background-color: #ccc;
      }
    }
  }
}

//result
.users .list .item{background-color: #eee;}
.users .list.active .item{background-color: #ccc;}
```

## License
MIT.
