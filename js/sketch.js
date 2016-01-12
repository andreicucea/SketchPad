var grid = 50;
var squareWidth = 600/grid;


$(document).ready(function() {
	addRows();
	addDivs();
	$('.block').on('mouseleave', function() {
		$(this).css({'background-color':'#000'});
	});
	$('#button').on('click', function() {
		$('.block').removeClass('highlight');
		resetGrid();
	});		
});

function gradientSketch() {
	resetGrid();
	$('.block').css({'opacity':'0', 'background-color':'black'})
	$('.block').mouseenter(function() {
		var opacityNow = $(this).css('opacity');
		if (opacityNow < 1) {
			$(this).css({'opacity' : +opacityNow + 0.1});
		} else {$(this).css({'opacity' : 0})};
//		window.alert(opacityNow);
	});
};

function addRows() {
	var i = 0;
	while(i<grid) {
		$('#wrapper').append('<div class="rows"></div>');
		i++;
	};
	$('.rows').css({'height':squareWidth});
};

function addDivs() {
	var i = 0;
	while(i<grid){
		$('.rows').append('<div class="block"></div>');
		i++;
	};
	$('.block').css({'width':squareWidth, 'height':squareWidth});
};

function populateGrid() {
	squareWidth = 600/grid;
	$('.rows').remove();
	addRows();
	addDivs();
	$('.block').on('mouseleave', function() {
		$(this).css({'background-color':'#000'});
	});
};

function resetGrid() {
	grid = prompt("Please choose the grid dimension. (1-100)");
	if (grid>0 && grid<=100) {
		populateGrid();
	} else {
		grid = 20;
		alert('Invalid Input. Grid dimension set to ' + grid + '.');
		populateGrid();
	};
};




















