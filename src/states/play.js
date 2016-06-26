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

// Backen
		this.backen = new Kiwi.GameObjects.Sprite(
			this, this.textures.backen, 700, 990) ;
		this.backen.cellIndex = 0;
		this.backen.x = 0;
		this.backen.y = 0;

// Windeln
		this.windeln = new Kiwi.GameObjects.Sprite(
			this, this.textures.windeln, 700, 990) ;
		this.windeln.cellIndex = 0;
		this.windeln.x = 0;
		this.windeln.y = 0;

// Augen
		this.augen = new Kiwi.GameObjects.Sprite(
			this, this.textures.augen, 700, 990) ;
		this.augen.cellIndex = 0;
		this.augen.x = 0;
		this.augen.y = 0;

// Nasen
		this.nasen = new Kiwi.GameObjects.Sprite(
			this, this.textures.nasen, 700, 990) ;
		this.nasen.cellIndex = 0;
		this.nasen.x = 0;
		this.nasen.y = 0;

// Muender
		this.muender = new Kiwi.GameObjects.Sprite(
			this, this.textures.muender, 700, 990) ;
		this.muender.cellIndex = 0;
		this.muender.x = 0;
		this.muender.y = 0;

// Ohren
		this.ohren = new Kiwi.GameObjects.Sprite(
			this, this.textures.ohren, 700, 990) ;
		this.ohren.cellIndex = 0;
		this.ohren.x = 0;
		this.ohren.y = 0;

// Haare
		this.haare = new Kiwi.GameObjects.Sprite(
			this, this.textures.haare, 700, 990) ;
		this.haare.cellIndex = 0;
		this.haare.x = 0;
		this.haare.y = 0;

// Hintergrund
		this.bg = new Kiwi.GameObjects.Sprite(
			this, this.textures.bg, 700, 990) ;
		this.bg.cellIndex = 0;
		this.bg.x = 0;
		this.bg.y = 0;

// Buttons
		this.btnArme = new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnArme.cellIndex = 0;
		this.btnArme.x = 0;
		this.btnArme.y = 0;

		this.btnBeine = new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnBeine.cellIndex = 2;
		this.btnBeine.x = 80;
		this.btnBeine.y = 0;

		this.btnBacken = new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnBacken.cellIndex = 4;
		this.btnBacken.x = 160;
		this.btnBacken.y = 0;

		this.btnWindeln= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnWindeln.cellIndex = 6;
		this.btnWindeln.x = 0;
		this.btnWindeln.y = 80;

		this.btnAugen= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnAugen.cellIndex = 8;
		this.btnAugen.x = 0;
		this.btnAugen.y = 160;

		this.btnNasen= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnNasen.cellIndex = 10;
		this.btnNasen.x = 0;
		this.btnNasen.y = 240;

		this.btnMuender= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnMuender.cellIndex = 12;
		this.btnMuender.x = 0;
		this.btnMuender.y = 320;

		this.btnOhren= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnOhren.cellIndex = 14;
		this.btnOhren.x = 0;
		this.btnOhren.y = 400;

		this.btnHaare= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnHaare.cellIndex = 16;
		this.btnHaare.x = 0;
		this.btnHaare.y = 480;

		this.btnBg= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnBg.cellIndex = 20;
		this.btnBg.x = 0;
		this.btnBg.y = 560;


	/*
	* Replace with your own game creation code here...
	*/

	this.addChild(this.bg);
	this.addChild(this.grundform);
	this.addChild(this.arme);
	this.addChild(this.beine);
	this.addChild(this.backen);
	this.addChild(this.windeln);
	this.addChild(this.augen);
	this.addChild(this.nasen);
	this.addChild(this.muender);
	this.addChild(this.ohren);
	this.addChild(this.haare);

	this.addChild(this.btnArme);
	this.btnArme.input.onUp.add(this.switchArme, this);
	this.btnArme.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnBeine);
	this.btnBeine.input.onUp.add(this.switchBeine, this);
	this.btnBeine.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnBacken);
	this.btnBacken.input.onUp.add(this.switchBacken, this);
	this.btnBacken.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnWindeln);
	this.btnWindeln.input.onUp.add(this.switchWindeln, this);
	this.btnWindeln.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnAugen);
	this.btnAugen.input.onUp.add(this.switchAugen, this);
	this.btnAugen.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnNasen);
	this.btnNasen.input.onUp.add(this.switchNasen, this);
	this.btnNasen.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnMuender);
	this.btnMuender.input.onUp.add(this.switchMuender, this);
	this.btnMuender.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnOhren);
	this.btnOhren.input.onUp.add(this.switchOhren, this);
	this.btnOhren.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnHaare);
	this.btnHaare.input.onUp.add(this.switchHaare, this);
	this.btnHaare.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnBg);
	this.btnBg.input.onUp.add(this.switchBg, this);
	this.btnBg.input.onDown.add(this.switchButton, this);

};

TemplateGame.Play.switchButton = function(sprite) {
	sprite.cellIndex = sprite.cellIndex + 1;
}


TemplateGame.Play.switchArme = function(sprite) {
	if (this.arme.cellIndex < 1) {
		this.arme.cellIndex = this.arme.cellIndex + 1;
	} else {
		this.arme.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchBeine = function(sprite) {
	if (this.beine.cellIndex < 1) {
		this.beine.cellIndex = this.beine.cellIndex + 1;
	} else {
		this.beine.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchBacken = function(sprite) {
	if (this.backen.cellIndex < 2) {
		this.backen.cellIndex = this.backen.cellIndex + 1;
	} else {
		this.backen.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchWindeln = function(sprite) {
	if (this.windeln.cellIndex < 2) {
		this.windeln.cellIndex = this.windeln.cellIndex + 1;
	} else {
		this.windeln.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchAugen = function(sprite) {
	if (this.augen.cellIndex < 18) {
		this.augen.cellIndex = this.augen.cellIndex + 1;
	} else {
		this.augen.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchNasen = function(sprite) {
	if (this.nasen.cellIndex < 17) {
		this.nasen.cellIndex = this.nasen.cellIndex + 1;
	} else {
		this.nasen.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchMuender = function(sprite) {
	if (this.muender.cellIndex < 14) {
		this.muender.cellIndex = this.muender.cellIndex + 1;
	} else {
		this.muender.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchOhren = function(sprite) {
	if (this.ohren.cellIndex < 9) {
		this.ohren.cellIndex = this.ohren.cellIndex + 1;
	} else {
		this.ohren.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchHaare = function(sprite) {
	if (this.haare.cellIndex < 5) {
		this.haare.cellIndex = this.haare.cellIndex + 1;
	} else {
		this.haare.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}

TemplateGame.Play.switchBg = function(sprite) {
	if (this.bg.cellIndex < 3) {
		this.bg.cellIndex = this.bg.cellIndex + 1;
	} else {
		this.bg.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
}


TemplateGame.Play.update = function() {

	Kiwi.State.prototype.update.call( this );

	//this.shield.rotation += this.game.time.clock.rate * 0.01;
};
