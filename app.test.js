test('== and ===', () => {
  expect(1 == '1').toBe(true);
  expect(1 === '1').toBe(false);
});

test('[] and []', () => {
  expect([] == []).toBe(false);
  expect([] === []).toBe(false);
});

test('{}.hoge === undefined', () => {
  expect({}.hoge === undefined).toBe(true);
});

test('{}.hoge == null', () => {
  expect({}.hoge == null).toBe(true);
});

test('{}.hoge === null', () => {
  expect({}.hoge === null).toBe(false);
});

test('undefinedとnullの違い', () => {
  expect({}.hoge === undefined).toBe(true);
  expect({}.hoge === null).toBe(false);
});
