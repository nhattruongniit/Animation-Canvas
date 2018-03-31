var game = function(){
	this.width   = 500;
	this.height  = 600;
	this.canvas  = null;
	this.context = null;
	this.balls   = [];
	this.blocks  = [];


	var self = this;

	this.init = function(){
		this.canvas        = document.getElementById('gameCanvas');
		this.context       = this.canvas.getContext('2d');
		this.canvas.width  = 500;
		this.canvas.height = 600;
		this.update();

		for(var i = 0; i < 30; i++ ){
			var newBall = new ball(this);
			newBall.init();
			this.balls.push(newBall);
			
		}

		var newBLock = new block(this);
		newBLock.init();
		this.blocks.push(newBLock);

	}

	this.update = function(){
		self.updateAllBalls();
		self.updateAllBlocks();
		setTimeout(self.update, 20);
		self.draw();
	}

	this.draw = function(){
		this.drawBackground();
		this.drawAllBalls();
		this.drawAllBlocks();
	}

	this.updateAllBalls = function(){
		this.balls.forEach(function(ball){
			ball.update();
		});
	}

	this.updateAllBlocks = function(){
		this.blocks.forEach(function(block){
			block.update();
		});
	}

	this.drawAllBalls = function(){
		this.balls.forEach(function(ball){
			ball.draw();
		});
	}

	this.drawAllBlocks = function(){
		this.blocks.forEach(function(block){
			block.draw();
		});
	}

	this.drawBackground = function(){
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.width, this.height);
	}
}

var ballGame = new game();
ballGame.init();
