# Blogcode Utilities

## Active

### Enum

```ts
enum Active {
  YES = "Y",
  NO = "N",
}
```

### isActive

```ts
function isActive(state: string): boolean;
```

## Authorize

### Enum

```ts
enum AuthorizeType {
  BEARER = 'bearer',
  BASIC = 'basic',
}
```

### isBearer

```ts
function isBearer(type: string): boolean;
```

### isBasic

```ts
function isBasic(type: string): boolean;
```

## camelToKebab

```ts
function camelToKebab(str: string): string;
```

## Color

### hex2rgb

```ts
function hex2rgb(color: string): [number?, number?, number?, number?];
```

## Gender

```ts
enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}
```

## Numeric

### swapMinMax

```ts
function swapMinMax(min: number, max: number): [nunber, number];
```

### inRange

```ts
function inRange(value: number, min: number, max: number): boolean;
```

### inRangeLeft

```ts
function inRangeLeft(value: number, min: number, max: number): boolean;
```

### inRangeRight

```ts
function inRangeRight(value: number, min: number, max: number): boolean;
```

### inRangeInclusive

```ts
function inRangeInclusive(value: number, min: number, max: number): boolean;
```

### hexadecimal2decimal

```ts
function hexadecimal2decimal(hd: string | number): number;
```
