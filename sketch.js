// part 1
// imagine you have the power of god in a programming world
// you create a variable (think container) out of thin air

var buttonNothing;
var buttonHoverOver;
var buttonClick;
var imgCatInMug;

var button2X;
var button2Y;

function preload()
{
	// part 2
	// now that you have created a variable it is time to put some 
	// data into the variable, the code below does that

	imgCatInMug = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/CatInMug.png');
	buttonClick = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonClick.png');
	buttonHoverOver = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonHoverOver.png');
  	buttonNothing = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonNothing.png');
}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
}

function draw()
{
	background(125,125,125)


	// part 3
	// show the contents of the variable on the canvas
	// image(imageVariable,x,y,length,height)

	image(imgCatInMug,10,150,1060/3,702/3);





	// the code below shows you how you can
	// use images to represent buttons

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
	}


}