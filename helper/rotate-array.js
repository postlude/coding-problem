function rotateClockWise(matrix, loopAry) {
	const [r1, c1, r2, c2] = loopAry;

	let min = matrix[r1][c1];
	const leftTop = matrix[r1][c1];
	const rightTop = matrix[r1][c2];
	const leftBottom = matrix[r2][c1];
	const rightBottom = matrix[r2][c2];

	// console.log(leftTop, rightTop, leftBottom, rightBottom);

	// 상단
	for (let i = c2; i >= c1; i--) {
		const target = i === c1
			? matrix[r1 + 1][c1]
			: matrix[r1][i - 1];
		matrix[r1][i] = target;
		min = Math.min(min, target);
	}
	// 우측
	for (let i = r2; i > r1; i--) {
		const target = i === r1 + 1
			? rightTop
			: matrix[i - 1][c2];
		matrix[i][c2] = target;
		min = Math.min(min, target);
	}
	// 하단
	for (let i = c1; i < c2; i++) {
		const target = i === c2 - 1
			? rightBottom
			: matrix[r2][i + 1];
		matrix[r2][i] = target;
		min = Math.min(min, target);
	}
	// 좌측
	for (let i = r1; i < r2; i++) {
		const target = i === r2 - 1
			? leftBottom
			: matrix[i + 1][c1];
		matrix[i][c1] = target;
		min = Math.min(min, target);
	}

	return min;
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77485
 */
function solution(rows, columns, queries) {
	const matrix = Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => i * columns + j + 1));
	// console.log(matrix);

	const result = [];
	for (const loopAry of queries) {
		result.push(rotateClockWise(matrix, loopAry.map(v => v - 1)));
	}

	return result;
}
