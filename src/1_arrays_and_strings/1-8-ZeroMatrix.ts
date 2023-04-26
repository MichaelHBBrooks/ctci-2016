/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
*/

export function zeroMatrix(matrix: unknown[][]): unknown[][] {
	const xCoords: Map<number, boolean> = new Map();
	const yCoords: Map<number, boolean> = new Map();

	for (let x = 0; x < matrix.length; x++) {
		for (let y = 0; y < matrix[x].length; y++) {
			if (matrix[x][y] === 0) {
				xCoords.set(x, true);
				yCoords.set(y, true);
			}
		}
	}

	for (const [row] of xCoords) {
		const rowArray = new Array(matrix[row].length);
		for (let x = 0; x < rowArray.length; x++) {
			rowArray[x] = 0;
		}
		matrix[row] = rowArray;
	}

	for (const [column] of yCoords) {
		for (let x = 0; x < matrix.length; x++) {
			if (xCoords.get(x)) {
				continue;
			}
			matrix[x][column] = 0;
		}
	}
	return matrix;
}
