const {max_row, max_col, create_2d_array, copy_array} = require('../src/utils');

let empty_background = create_2d_array(max_row, max_col);

let orange_piece_init = create_2d_array(max_row, max_col);
orange_piece_init[0] = [0, 0, 0, 3, 3, 3, 0, 0, 0, 0]


let almost_full = create_2d_array(max_row, max_col);
almost_full[18] = [2, 0, 0, 0, 0, 4, 4, 0, 0, 3];
almost_full[19] = [2, 2, 2, 0, 0, 4, 4, 3, 3, 3];

let almost_full_with_fours = create_2d_array(max_row, max_col);
almost_full_with_fours[17] = [0, 0, 0, 4, 4, 0, 0, 0, 0, 0];
almost_full_with_fours[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
almost_full_with_fours[19] = [2, 2, 2, 0, 0, 4, 4, 3, 3, 3];

let full_line = create_2d_array(max_row, max_col);
full_line[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
full_line[19] = [2, 2, 2, 4, 4, 4, 4, 3, 3, 3];

let after_delete = create_2d_array(max_row, max_col);
after_delete[19] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];

let almost_several_lines = create_2d_array(max_row, max_col);
almost_several_lines[15] = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
almost_several_lines[16] = [2, 6, 6, 6, 1, 1, 1, 1, 2, 0];
almost_several_lines[17] = [2, 0, 6, 0, 7, 7, 0, 0, 2, 0];
almost_several_lines[18] = [6, 6, 6, 4, 4, 7, 7, 2, 2, 0];
almost_several_lines[19] = [0, 6, 0, 4, 4, 1, 1, 1, 1, 0];

let several_with_one = create_2d_array(max_row, max_col);
several_with_one[15] = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
several_with_one[16] = [2, 6, 6, 6, 1, 1, 1, 1, 2, 1];
several_with_one[17] = [2, 0, 6, 0, 7, 7, 0, 0, 2, 1];
several_with_one[18] = [6, 6, 6, 4, 4, 7, 7, 2, 2, 1];
several_with_one[19] = [0, 6, 0, 4, 4, 1, 1, 1, 1, 1];

let after_delete_several = create_2d_array(max_row, max_col);
after_delete_several[17] = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
after_delete_several[18] = [2, 0, 6, 0, 7, 7, 0, 0, 2, 1];
after_delete_several[19] = [0, 6, 0, 4, 4, 1, 1, 1, 1, 1];

let applying_moves = create_2d_array(max_row, max_col);
applying_moves[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 2];
applying_moves[18] = [7, 7, 0, 4, 4, 0, 0, 3, 0, 2];
applying_moves[19] = [0, 7, 7, 4, 4, 3, 3, 3, 2, 2];

let green0 = [   
	[0, 5, 5],
	[5, 5, 0],
	[0, 0, 0]
];

let green1 = [   
	[0, 5, 0],
	[0, 5, 5],
	[0, 0, 5]
];

let green2 = [   
	[0, 0, 0],
	[0, 5, 5],
	[5, 5, 0]
];

let green3 = [   
	[5, 0, 0],
	[5, 5, 0],
	[0, 5, 0]
];


module.exports = {
	empty_background,
	orange_piece_init,
	almost_full,
	almost_full_with_fours,
	full_line,
	after_delete,
	almost_several_lines,
	several_with_one,
	after_delete_several,
	applying_moves,
	green0, green1, green2, green3}
