
printPyramid(15);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    
    for (let i = 0; i < height; i++) {
        var bricks = '#'.repeat(i + 2);
        var spaces = ' '.repeat(height - i - 1);
        console.log(spaces + bricks);
    }

}
