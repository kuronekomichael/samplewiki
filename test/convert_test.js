test('空文字のテスト', function() {
	equal(convertBold(''),'');
	equal(convertBold(),'');
	equal(convertBold('      '),'');
});

test('ボールドのテスト', function() {
	equal(convertBold('*test*'),'<strong>test</strong>');
	equal(convertBold('*sample*'),'<strong>sample</strong>');
	equal(convertBold('**'),'<strong></strong>');
	equal(convertBold('sample'),'sample');
});

test('前に付くボールドのテスト', function() {
	equal(convertBold('あいうえお*test*'),'あいうえお<strong>test</strong>');
});

test('後ろに付くボールドのテスト', function() {
	equal(convertBold('*test*あいうえお'),'<strong>test</strong>あいうえお');
});

test('前後に付くボールドのテスト', function() {
	equal(convertBold('あいうえお*test*あいうえお'),'あいうえお<strong>test</strong>あいうえお');
});

