var TemplateGame = TemplateGame || {};

TemplateGame.Play = new Kiwi.State( "Play" );

/**
* The PlayState in the core state that is used in the game.
*
* It is the state where majority of the functionality occurs 'in-game' occurs.
*/


/**
* This create method is executed when a Kiwi state has finished loading
* any resources that were required to load.
*/
TemplateGame.Play.create = function () {

	Kiwi.State.prototype.create.call( this );

// Grundform
	this.grundform = new Kiwi.GameObjects.StaticImage(
		this, this.textures.grundform, 0, 0) ;

// Arme
		this.arme = new Kiwi.GameObjects.Sprite(
			this, this.textures.arme, 700, 990) ;
		this.arme.cellIndex = 0;
		this.arme.x = 0;
		this.arme.y = 0;

// Beine
		this.beine = new Kiwi.GameObjects.Sprite(
			this, this.textures.beine, 700, 990) ;
		this.beine.cellIndex = 0;
		this.beine.x = 0;
		this.beine.y = 0;
// Windeln
		this.windeln = new Kiwi.GameObjects.Sprite(
			this, this.textures.windeln, 700, 990) ;
		this.windeln.cellIndex = 0;
		this.windeln.x = 0;
		this.windeln.y = 0;

// Buttons
		this.btnArme = new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnArme.cellIndex = 0;
		this.btnArme.x = 0;
		this.btnArme.y = 0;

		this.btnBeine = new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnBeine.cellIndex = 1;
		this.btnBeine.x = 80;
		this.btnBeine.y = 0;

		this.btnWindeln= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnWindeln.cellIndex = 3;
		this.btnWindeln.x = 160;
		this.btnWindeln.y = 0;


	// /*
	// * Replace with your own game creation code here...
	// */
	// this.name = new Kiwi.GameObjects.StaticImage(
	// 	this, this.textures.kiwiName, 10, 10) ;
	//
	// this.heart = new Kiwi.GameObjects.Sprite(
	// 	this, this.textures.icons, 10, 10 );
	// this.heart.cellIndex = 8;
	// this.heart.y = this.game.stage.height - this.heart.height - 10;
	//
	//
	// this.shield = new Kiwi.GameObjects.Sprite(
	// 	this, this.textures.icons, 200, 200 );
	// this.shield.cellIndex = 9;
	// this.shield.y = this.game.stage.height * 0.5 - this.shield.height * 0.5;
	// this.shield.x = this.game.stage.width * 0.5 - this.shield.width * 0.5;
	//
	//
	// this.crown = new Kiwi.GameObjects.Sprite(
	// 	this, this.textures.icons, 10, 10 );
	// this.crown.cellIndex = 10;
	// this.crown.x = this.game.stage.width - this.crown.width - 10;
	// this.crown.y = this.game.stage.height - this.crown.height - 10;
	//
	//
	// this.bomb = new Kiwi.GameObjects.Sprite(
	// 	this, this.textures.icons, 0, 10 );
	// this.bomb.x = this.game.stage.width - this.bomb.width  -10;


	// Add the GameObjects to the stage
	// this.addChild( this.heart );
	// this.addChild( this.crown );
	// this.addChild( this.shield );
	// this.addChild( this.bomb );
	// this.addChild( this.name );

	this.addChild( this.grundform );
	this.addChild( this.arme );
	this.addChild( this.beine );
	this.addChild( this.windeln );

	this.addChild( this.btnArme );
	this.btnArme.input.onUp.add(this.switchArme, this);
	this.addChild( this.btnBeine );
	this.btnBeine.input.onUp.add(this.switchBeine, this);
	this.addChild( this.btnWindeln );
	this.btnWindeln.input.onUp.add(this.switchWindeln, this);


};

TemplateGame.Play.switchArme = function() {
	if (this.arme.cellIndex < 1) {
		this.arme.cellIndex = this.arme.cellIndex + 1;
	} else {
		this.arme.cellIndex = 0;
	}
}

TemplateGame.Play.switchBeine = function() {
	if (this.beine.cellIndex < 1) {
		this.beine.cellIndex = this.beine.cellIndex + 1;
	} else {
		this.beine.cellIndex = 0;
	}
}

TemplateGame.Play.switchWindeln = function() {
	if (this.windeln.cellIndex < 2) {
		this.windeln.cellIndex = this.windeln.cellIndex + 1;
	} else {
		this.windeln.cellIndex = 0;
	}
}


TemplateGame.Play.update = function() {

	Kiwi.State.prototype.update.call( this );

	//this.shield.rotation += this.game.time.clock.rate * 0.01;
};
