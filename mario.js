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

function drawPyramid(height, colorway) {
    var node = document.createElement('div');
    for (let i = 2; i < height + 2; i++) {
        var layer = document.createElement('div');
        for (let k = 0; k <= height - i; k++) {
            var block = document.createElement('div');
            block.className = 'mario-space';
            layer.appendChild(block);      
        }
        for (let j = 0; j < i; j++) {
            var block = document.createElement('div');
            block.className = 'mario-brick ' + colorway.toLowerCase();
            layer.appendChild(block);
        }
        node.appendChild(layer);
    }
    return node;
}

/*
function drawPyramid(height) {
    var node = document.createElement('div');
    for (let i = 2; i < height + 2; i++) {
        var 
        var layer = document.createElement('div');
        var block = document.createElement('div.mario-brick.red');
    }
} */

var pyramidSize = document.getElementById('pyramid-size');
var pyramid = document.getElementById('pyramid');
var container = document.getElementById('pyramid-container');
var construction = document.getElementById('construction');
var selector = document.getElementById('brick-selector');
pyramid.removeChild(construction);

pyramid.appendChild(drawPyramid(parseInt(pyramidSize.value), selector.value));

pyramidSize.addEventListener('mousemove', function() {
    pyramid.removeChild(pyramid.firstElementChild);
    pyramid.appendChild(drawPyramid(parseInt(pyramidSize.value), selector.value));
    document.getElementById('size-indicator').textContent = pyramidSize.value;
});

selector.addEventListener('change', function() {
    var bricks = Array.from(document.getElementsByClassName('mario-brick'));
    bricks.map(function(e) {
        e.className = 'mario-brick ' + selector.value.toLowerCase();
    });
})
