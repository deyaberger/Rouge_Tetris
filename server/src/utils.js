const max_row = 20;
const max_col = 10;

function create_2d_array(row, col) {
	var x = new Array(row).fill(0).map(()=> new Array(col).fill(0));
	
	return (x);
}

function copy_array(array, row, col) {
	let new_array = create_2d_array(row, col);
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			new_array[i][j] = array[i][j];
		}
	}
	return new_array;
}

module.exports = {max_row, max_col, create_2d_array, copy_array};