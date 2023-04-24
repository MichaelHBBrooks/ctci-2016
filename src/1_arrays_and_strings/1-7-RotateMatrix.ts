/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */

/*
     1  2  3  4     1  2  3  4  5
     5  6  7  8     6  7  8  9 10
     9 10 11 12    11 12 13 14 15
    13 14 15 16    16 17 18 19 20
                   21 22 23 24 25
    */

export function RotateMatrix(image: number[][]): number[][] {
	const length = image.length;
	for (let y = 0; y < length / 2; y++) {
		for (let x = y; x < length - y - 1; x++) {
			const top = image[y][x];
			const right = image[x][length - y - 1];
			const bottom = image[length - y - 1][length - x - 1];
			const left = image[length - x - 1][y];
			image[x][length - y - 1] = top;
			image[length - y - 1][length - x - 1] = right;
			image[length - x - 1][y] = bottom;
			image[y][x] = left;
		}
	}
	return image;
}
