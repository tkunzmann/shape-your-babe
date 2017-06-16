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

	// Prices
	this.prices = {};

  this.baby = new Kiwi.Group(this);

// Grundform
	this.grundform = new Kiwi.GameObjects.StaticImage(
		this, this.textures.grundform, 0, 0) ;

// Banner
	this.banner = new Kiwi.GameObjects.StaticImage(
		this, this.textures.banner, 0, 0) ;

// Arme
		this.arme = new Kiwi.GameObjects.Sprite(
			this, this.textures.arme, 700, 990) ;
		this.arme.cellIndex = 0;
		this.arme.x = 0;
		this.arme.y = 0;
        this.prices['arme'] = [ 0, 300, 700];

// Beine
		this.beine = new Kiwi.GameObjects.Sprite(
			this, this.textures.beine, 700, 990) ;
		this.beine.cellIndex = 0;
		this.beine.x = 0;
		this.beine.y = 0;
		this.prices['beine'] = [ 0, 200, 300];

// Backen
		this.backen = new Kiwi.GameObjects.Sprite(
			this, this.textures.backen, 700, 990) ;
		this.backen.cellIndex = 0;
		this.backen.x = 0;
		this.backen.y = 0;
		this.prices['backen'] = [ 0, 300, 300, 400, 300, 400, 300];

// Windeln
		this.windeln = new Kiwi.GameObjects.Sprite(
			this, this.textures.windeln, 700, 990) ;
		this.windeln.cellIndex = 0;
		this.windeln.x = 0;
		this.windeln.y = 0;
		this.prices['windeln'] = [ 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Augen
		this.augen = new Kiwi.GameObjects.Sprite(
			this, this.textures.augen, 700, 990) ;
		this.augen.cellIndex = 0;
		this.augen.x = 0;
		this.augen.y = 0;
		this.prices['augen'] = [ 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Nasen
		this.nasen = new Kiwi.GameObjects.Sprite(
			this, this.textures.nasen, 700, 990) ;
		this.nasen.cellIndex = 0;
		this.nasen.x = 0;
		this.nasen.y = 0;
		this.prices['nasen'] = [ 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Muender
		this.muender = new Kiwi.GameObjects.Sprite(
			this, this.textures.muender, 700, 990) ;
		this.muender.cellIndex = 0;
		this.muender.x = 0;
		this.muender.y = 0;
		this.prices['muender'] = [ 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Ohren
		this.ohren = new Kiwi.GameObjects.Sprite(
			this, this.textures.ohren, 900, 990) ;
		this.ohren.cellIndex = 0;
		this.ohren.x = 0;
		this.ohren.y = 0;
		this.prices['ohren'] = [ 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Haare
		this.haare = new Kiwi.GameObjects.Sprite(
			this, this.textures.haare, 700, 990) ;
		this.haare.cellIndex = 0;
		this.haare.x = 0;
		this.haare.y = 0;
		this.prices['haare'] = [ 0, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

// Hintergrund
		this.bg = new Kiwi.GameObjects.Sprite(
			this, this.textures.bg, 900, 990) ;
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


		this.btnShuffle= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnShuffle.cellIndex = 18;
		this.btnShuffle.x = 0;
		this.btnShuffle.y = 800;

		this.btnReset= new Kiwi.GameObjects.Sprite(
			this, this.textures.buttons, 0, 80) ;
		this.btnReset.cellIndex = 22;
		this.btnReset.x = 0;
		this.btnReset.y = 880;


    // Menu
    this.menu = new Kiwi.HUD.Widget.Menu( this.game, 840, 10 );
    this.game.huds.defaultHUD.addWidget( this.menu );

	// Text 1
	this.text1 = new Kiwi.GameObjects.Sprite(
		this, this.textures.text1, 580, 920) ;
	this.text1.cellIndex = 0;
	this.text1.x = 910;
	this.text1.y = 60;
	this.text1.visible = true;
	this.addChild(this.text1);

	// Text 2
	this.text2 = new Kiwi.GameObjects.Sprite(
		this, this.textures.text2, 580, 920) ;
	this.text2.cellIndex = 0;
	this.text2.x = 910;
	this.text2.y = 60;
	this.text2.visible = false;
	this.addChild(this.text2);

	// Text 3
	this.text3 = new Kiwi.GameObjects.Sprite(
		this, this.textures.text3, 580, 920) ;
	this.text3.cellIndex = 0;
	this.text3.x = 910;
	this.text3.y = 60;
	this.text3.visible = false;
	this.addChild(this.text3);

    // Button: Projekt
    this.myButton1 = new Kiwi.HUD.Widget.MenuItem( this.game, 'Projekt', 70, 0 );
    this.myButton1.style.color = 'orange';
    this.myButton1.style.display = 'block';
    this.myButton1.style.boxSizing = 'border-box';
    this.myButton1.style.width = '100px';
    this.myButton1.style.textAlign = 'center';
    this.myButton1.style.cursor = 'pointer';
    this.myButton1.style.padding = '0.5em 1em';
    this.myButton1.style.backgroundColor = '#46939c';
    this.menu.addMenuItem( this.myButton1 );


    // Button: Hilfe
    this.myButton2 = new Kiwi.HUD.Widget.MenuItem( this.game, 'Hilfe', 180, 0 );
    this.myButton2.style.color = 'orange';
    this.myButton2.style.display = 'block';
    this.myButton2.style.boxSizing = 'border-box';
    this.myButton2.style.width = '100px';
    this.myButton2.style.textAlign = 'center';
    this.myButton2.style.cursor = 'pointer';
    this.myButton2.style.padding = '0.5em 1em';
    this.myButton2.style.backgroundColor = '#46939c';
    this.menu.addMenuItem( this.myButton2 );

	// Preis
	this.myTotals = new Kiwi.HUD.Widget.Button( this.game, 'EUR 0,-', 450, 0 );
    this.myTotals.style.color = 'white';
    this.myTotals.style.display = 'block';
    this.myTotals.style.boxSizing = 'border-box';
    this.myTotals.style.width = '150px';
    this.myTotals.style.textAlign = 'center';
    this.myTotals.style.cursor = 'pointer';
    this.myTotals.style.padding = '0.5em 1em';
    this.myTotals.style.backgroundColor = '#354b56';
    this.menu.addMenuItem( this.myTotals );

	// Umschalten: Projekte/Hilfe
	this.menu.getMenuItem(0).input.onDown.add( function () {
		this.text1.visible = true;
        this.text2.visible = false;
        this.text3.visible = false;
    }, this );
	this.menu.getMenuItem(1).input.onDown.add( function () {
		this.text1.visible = false;
        this.text2.visible = true;
        this.text3.visible = false;
    }, this );

	// Click auf Warenkorb
	this.menu.getMenuItem(2).input.onDown.add( function () {
		this.text1.visible = false;
        this.text2.visible = false;
        this.text3.visible = true;
    }, this );

	// Einkaufswagen
	this.cart= new Kiwi.GameObjects.Sprite(
			this, this.textures.cart, 0, 40) ;
		this.cart.cellIndex = 0;
		this.cart.x = 1450;
		this.cart.y = 10;
	this.addChild(this.cart);

	this.cart.input.onDown.add( function () {
		this.text1.visible = false;
        this.text2.visible = false;
        this.text3.visible = true;
    }, this );

	/*
	* Replace with your own game creation code here...
	*/

	this.addChild(this.bg);

	this.baby.addChild(this.grundform);
	this.baby.addChild(this.arme);
	this.baby.addChild(this.beine);
	this.baby.addChild(this.backen);
	this.baby.addChild(this.windeln);
	this.baby.addChild(this.augen);
	this.baby.addChild(this.nasen);
	this.baby.addChild(this.muender);
	this.baby.addChild(this.ohren);
	this.baby.addChild(this.haare);
	this.addChild(this.baby);
	this.addChild(this.banner);

	this.baby.x = 100;
	this.baby.y = 0;


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

	this.addChild(this.btnShuffle);
	this.btnShuffle.input.onUp.add(this.shuffle, this);
	this.btnShuffle.input.onDown.add(this.switchButton, this);

	this.addChild(this.btnReset);
	this.btnReset.input.onUp.add(this.reset, this);
	this.btnReset.input.onDown.add(this.switchButton, this);

	// Berechnung starten
	this.recalculateTotal();

};

TemplateGame.Play.switchButton = function(sprite) {
	sprite.cellIndex = sprite.cellIndex + 1;
}

// Neuberechnung Gesamtpreis
TemplateGame.Play.recalculateTotal = function () {
	var sum = 20000;

	sum = sum + this.prices['arme'][this.arme.cellIndex];
	sum = sum + this.prices['beine'][this.beine.cellIndex];
	sum = sum + this.prices['backen'][this.backen.cellIndex];
	sum = sum + this.prices['windeln'][this.windeln.cellIndex];
	sum = sum + this.prices['augen'][this.augen.cellIndex];
	sum = sum + this.prices['nasen'][this.nasen.cellIndex];
	sum = sum + this.prices['muender'][this.muender.cellIndex];
	sum = sum + this.prices['ohren'][this.ohren.cellIndex];
	sum = sum + this.prices['haare'][this.haare.cellIndex];

	this.myTotals.text = "EUR " + sum + ",-";
}


TemplateGame.Play.switchArme = function(sprite) {
	if (this.arme.cellIndex < 2) {
		this.arme.cellIndex = this.arme.cellIndex + 1;
	} else {
		this.arme.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchBeine = function(sprite) {
	if (this.beine.cellIndex < 2) {
		this.beine.cellIndex = this.beine.cellIndex + 1;
	} else {
		this.beine.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchBacken = function(sprite) {
	if (this.backen.cellIndex < 6) {
		this.backen.cellIndex = this.backen.cellIndex + 1;
	} else {
		this.backen.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchWindeln = function(sprite) {
	if (this.windeln.cellIndex < 18) {
		this.windeln.cellIndex = this.windeln.cellIndex + 1;
	} else {
		this.windeln.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchAugen = function(sprite) {
	if (this.augen.cellIndex < 18) {
		this.augen.cellIndex = this.augen.cellIndex + 1;
	} else {
		this.augen.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchNasen = function(sprite) {
	if (this.nasen.cellIndex < 19) {
		this.nasen.cellIndex = this.nasen.cellIndex + 1;
	} else {
		this.nasen.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchMuender = function(sprite) {
	if (this.muender.cellIndex < 19) {
		this.muender.cellIndex = this.muender.cellIndex + 1;
	} else {
		this.muender.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchOhren = function(sprite) {
	if (this.ohren.cellIndex < 19) {
		this.ohren.cellIndex = this.ohren.cellIndex + 1;
	} else {
		this.ohren.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchHaare = function(sprite) {
	if (this.haare.cellIndex < 19) {
		this.haare.cellIndex = this.haare.cellIndex + 1;
	} else {
		this.haare.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.switchBg = function(sprite) {
	if (this.bg.cellIndex < 3) {
		this.bg.cellIndex = this.bg.cellIndex + 1;
	} else {
		this.bg.cellIndex = 0;
	}
	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.shuffle = function(sprite) {
	this.bg.cellIndex = getRandomInt(0,4);
	this.arme.cellIndex = getRandomInt(0,3);
	this.augen.cellIndex = getRandomInt(0,19);
	this.backen.cellIndex = getRandomInt(0,7);
	this.beine.cellIndex = getRandomInt(0,3);
	this.haare.cellIndex = getRandomInt(0,20);
	this.muender.cellIndex = getRandomInt(0,20);
	this.nasen.cellIndex = getRandomInt(0,20);
	this.ohren.cellIndex = getRandomInt(0,20);
	this.windeln.cellIndex = getRandomInt(0,19);

	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}

TemplateGame.Play.reset = function(sprite) {
	this.bg.cellIndex = 0;
	this.arme.cellIndex = 0;
	this.augen.cellIndex = 0;
	this.backen.cellIndex = 0;
	this.beine.cellIndex = 0;
	this.haare.cellIndex = 0;
	this.muender.cellIndex = 0;
	this.nasen.cellIndex = 0;
	this.ohren.cellIndex = 0;
	this.windeln.cellIndex = 0;

	sprite.cellIndex = sprite.cellIndex - 1;
	this.recalculateTotal();
}


/**
 * Quelle: http://stackoverflow.com/a/10134261/2221057
 *
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


TemplateGame.Play.update = function() {

	Kiwi.State.prototype.update.call( this );

	//this.shield.rotation += this.game.time.clock.rate * 0.01;
};
