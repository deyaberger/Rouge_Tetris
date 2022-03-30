const row = 20;
const col = 10;

function create_2d_array(row, col) {
	var x = new Array(row).fill(0).map(()=> new Array(col).fill(0));
	
	return (x);
}

module.exports = {row, col, create_2d_array};