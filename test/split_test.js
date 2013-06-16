(function () {

var tests = [
	{
		name: '単純な改行区切り',
		results: split("あいうえお\nかきくけこ\n\nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	},
	{
		name: '単純な改行区切り２個',
		results: split("たちつてと\nなにぬねの\n\nはひふへほ\n\nまみむめも"),
		expected: ["たちつてと\nなにぬねの", "はひふへほ","まみむめも"]
	},
	{
		name: 'スペース入り改行区切り',
		results: split("あいうえお\nかきくけこ\n \nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	},
	{
		name: '複数スペース入り改行区切り',
		results: split("あいうえお\nかきくけこ\n    \nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	},
	{
		name: 'タブ入り改行区切り',
		results: split("あいうえお\nかきくけこ\n\t\nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	},
	{
		name: '改行入り改行区切り',
		results: split("あいうえお\nかきくけこ\n\n\nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	},
	{
		name: '複数改行入り改行区切り',
		results: split("あいうえお\nかきくけこ\n\n\n\nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	},
	{
		name: '複数改行とタブ入り改行区切り',
		results: split("あいうえお\nかきくけこ\n\n\t\n\nさしすせそ"),
		expected: ["あいうえお\nかきくけこ", "さしすせそ"]
	}
];

for (var testNo = 0; testNo < tests.length; testNo++) {
	var testName = tests[testNo].name;
	var results = tests[testNo].results;
	var expected = tests[testNo].expected;

	test(testName, function(){
		deepEqual(results, expected);
	});
}
})();