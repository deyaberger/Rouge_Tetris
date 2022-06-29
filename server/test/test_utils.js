const {max_row, max_col, create_2d_array, copy_array} = require('../src/utils');

let empty_background = create_2d_array(max_row, max_col);

let orange_piece_init = create_2d_array(max_row, max_col);
orange_piece_init[0] = [0, 0, 0, 3, 3, 3, 0, 0, 0, 0]


let almost_full = create_2d_array(max_row, max_col);
almost_full[18] = [2, 0, 0, 0, 0, 4, 4, 0, 0, 3];
almost_full[19] = [2, 2, 2, 0, 0, 4, 4, 3, 3, 3];

let almost_full2 = create_2d_array(max_row, max_col);
almost_full2[17] = [2, 2, 0, 0, 5, 5, 5, 4, 4, 3];
almost_full2[18] = [2, 2, 0, 0, 5, 5, 5, 0, 0, 3];
almost_full2[19] = [1, 1, 5, 5, 0, 0, 0, 0, 0, 0];

let almost_full2_after = create_2d_array(max_row, max_col);
almost_full2_after[18] = [2, 2, 4, 4, 5, 5, 5, 0, 0, 3];
almost_full2_after[19] = [1, 1, 5, 5, 0, 0, 0, 0, 0, 0];



let almost_full_with_fours = create_2d_array(max_row, max_col);
almost_full_with_fours[17] = [0, 0, 0, 4, 4, 0, 0, 0, 0, 0];
almost_full_with_fours[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
almost_full_with_fours[19] = [2, 2, 2, 0, 0, 4, 4, 3, 3, 3];

let almost_full_with_fours_spectrum = create_2d_array(max_row, max_col);
almost_full_with_fours_spectrum[17] = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0];
almost_full_with_fours_spectrum[18] = [1, 0, 0, 1, 1, 1, 1, 0, 0, 1];
almost_full_with_fours_spectrum[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let full_line = create_2d_array(max_row, max_col);
full_line[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
full_line[19] = [2, 2, 2, 4, 4, 4, 4, 3, 3, 3];

let after_delete = create_2d_array(max_row, max_col);
after_delete[19] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];

let before_2nd_delete = create_2d_array(max_row, max_col);
before_2nd_delete[17] = [3, 3, 3, 4, 4, 5, 5, 5, 6, 6];
before_2nd_delete[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
before_2nd_delete[19] = [2, 4, 4, 4, 4, 2, 1, 1, 1, 1];

let after_delete_oponent = create_2d_array(max_row, max_col);
after_delete_oponent[19] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

let after_2nd_delete_oponent = create_2d_array(max_row, max_col);
after_2nd_delete_oponent[18] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
after_2nd_delete_oponent[19] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

let after_delete_spectrum = create_2d_array(max_row, max_col);
after_delete_spectrum[19] = [1, 0, 0, 1, 1, 1, 1, 0, 0, 1];

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

let almost_the_end = create_2d_array(max_row, max_col);
almost_the_end[0] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
almost_the_end[1] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
almost_the_end[2] =  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0];
almost_the_end[3] =  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0];
almost_the_end[4] =  [0, 0, 0, 0, 7, 7, 0, 0, 0, 0];
almost_the_end[5] =  [0, 0, 0, 0, 4, 4, 7, 7, 0, 0];
almost_the_end[6] =  [0, 0, 0, 0, 4, 4, 0, 0, 0, 0];
almost_the_end[7] =  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
almost_the_end[8] =  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
almost_the_end[9] =  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
almost_the_end[10] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
almost_the_end[11] = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
almost_the_end[12] = [0, 0, 0, 0, 2, 2, 2, 0, 0, 0];
almost_the_end[13] = [0, 0, 0, 0, 0, 3, 0, 0, 0, 0];
almost_the_end[14] = [0, 0, 0, 3, 3, 3, 0, 0, 0, 0];
almost_the_end[15] = [0, 0, 0, 0, 4, 4, 0, 0, 0, 0];
almost_the_end[16] = [0, 0, 0, 0, 4, 4, 0, 0, 0, 0];
almost_the_end[17] = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
almost_the_end[18] = [0, 0, 0, 0, 6, 0, 0, 0, 0, 0];
almost_the_end[19] = [0, 0, 0, 6, 6, 6, 0, 0, 0, 0];


let almost_the_end_with_six = copy_array(almost_the_end, max_row, max_col);
almost_the_end_with_six[0] =  [0, 0, 0, 6, 6, 6, 0, 0, 0, 0];
almost_the_end_with_six[1] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let end_with_six = copy_array(almost_the_end, max_row, max_col);
end_with_six[0] =  [0, 0, 0, 0, 6, 0, 0, 0, 0, 0];
end_with_six[1] =  [0, 0, 0, 6, 6, 6, 0, 0, 0, 0];


let ghost_test = create_2d_array(max_row, max_col);
ghost_test[0] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[1] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[2] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[3] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[4] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[5] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[6] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[7] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[8] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[9] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[11] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[14] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[15] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[16] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ghost_test[18] = [0, 0, 4, 4, 0, 0, 0, 0, 0, 0];
ghost_test[19] = [1, 1, 1, 0, 0, 0, 1, 0, 0, 1];



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
	green0, green1, green2, green3,
	almost_the_end,
	almost_the_end_with_six,
	end_with_six,
	almost_full_with_fours_spectrum,
	after_delete_spectrum,
	after_delete_oponent,
	after_2nd_delete_oponent,
	almost_full2,
	almost_full2_after,
	ghost_test
}
