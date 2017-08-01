
printPyramid(9);
drawPyramid(9);


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

function drawPyramid(height) {
    for (let i = 2; i < height + 2; i++) {
        var bricks = '#'.repeat(i);
        var spaces = '\u00A0'.repeat(1 + height - i);
        var child = document.createElement('p');
        child.textContent = spaces + bricks;
        document.getElementById('pyramid').appendChild(child);
    }
}

var pyramid = document.getElementById('pyramid');
var construction = document.getElementById('construction');

pyramid.removeChild(construction);
