(function () {

var tests = [
	{
		name: '単純な文字列',
		results: wiki.translate("*あいうえお*\nかきくけこ\n\n*さしすせそ*"),
		expected: ["<strong>あいうえお</strong>\nかきくけこ", "<strong>さしすせそ</strong>"]
	},
	{
		name: '単純な文字列2',
		results: wiki.translate("*たちつてと*\nかきくけこ\n\n*さしすせそ*"),
		expected: ["<strong>たちつてと</strong>\nかきくけこ", "<strong>さしすせそ</strong>"]
	},
];
for (var testNo = 0; testNo < tests.length; testNo++) {
	console.log("1st" + testNo);
	test(tests[testNo].name, function() {
		console.log("ext" + testNo, expected);
		var results = tests[testNo].results;
		var expected = tests[testNo].expected;
		deepEqual(results, expected);
	});
}
})();
