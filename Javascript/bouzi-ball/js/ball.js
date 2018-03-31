var ball = function(game){
	this.game   = game;
	this.x      = 250;
	this.y      = 580;
	
	this.top    = 0;
	this.bottom = 0;
	this.left   = 0;
	this.right  = 0;

	this.size = 20;

	this.speedX = Math.round(Math.random() * 10);
	this.speedY = Math.round(Math.random() * -10);

	var self = this;

	this.init = function(){
		this.calculateSides();
	}

	this.update = function(){
		this.calculateSides();
		this.hitSides();
		this.hitAllBlocks();

		this.x += this.speedX;
		this.y += this.speedY;
	}

	this.calculateSides = function(){
		this.top    = this.y - (this.size / 2);
		this.bottom = this.y + (this.size / 2);
		this.left   = this.x - (this.size / 2);
		this.right  = this.x + (this.size / 2);
	}

	this.hitSides = function() {
		if (this.left <= 0 || this.right >= this.game.width) {
			this.speedX = 0 - this.speedX;
		}

		if (this.top <= 0 || this.bottom >= this.game.height){
			this.speedY = 0 - this.speedY;
		}
	}

	this.hitBlock = function(block){
		if (this.right >= block.left && this.left <= block.right){
			if (this.y >= block.top && this.y <= block.bottom){
				this.speedX = 0 - this.speedX;
			}
		}

		if (this.bottom >= block.top && this.top <= block.bottom){
			if (this.x >= block.left && this.x <= block.right){
				this.speedY = 0 - this.speedY;
			}
		}
	}

	this.hitAllBlocks = function(){
		self.game.blocks.forEach(function(block){
			self.hitBlock(block);
		});
	}

	this.draw = function(){
		this.game.context.beginPath();
		this.game.context.fillStyle = "yellow";
		this.game.context.arc(this.x, this.y, this.size/2, 0, 2 * Math.PI);
		this.game.context.fill();
	}
}