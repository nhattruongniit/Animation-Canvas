var block = function(game){
	this.game   = game;
	
	this.x      = 250;
	this.y      = 300;
	
	this.top    = 0;
	this.bottom = 0;
	this.left   = 0;
	this.right  = 0;
	
	this.size   = 50;

	this.init = function(){
		this.calculateSides();
	}

	this.update = function(){
		this.calculateSides();
	}

	this.calculateSides = function(){
		this.top    = this.y - (this.size / 2);
		this.bottom = this.y + (this.size / 2);
		this.left   = this.x - (this.size / 2);
		this.right  = this.x + (this.size / 2);
	}

	this.draw = function(){
		this.game.context.fillStyle = 'green';
		this.game.context.fillRect(
			this.x - (this.size / 2),
			this.y - (this.size / 2),
			this.size,
			this.size
		);
	}
}