'use strict';
var global = {};
(function () {
  global.players = {};  // global object for binding objects to dom
  var playerCounter = 0;
  // Models  // Abstract base class for other player types
  function GenericPlayer() {}
  GenericPlayer.prototype.init = function (options) {
    // initialize called when other classes initialize
    this.name = options.name;  // assign options to new object
    this.str = options.str;
    this.brains = options.brains;
    this.agi = options.agi;
    this.hp = options.hp;
    this.mp = options.mp;
    this.type = options.type;
    this.colorClass = options.colorClass;
  };
  // define display functin of GenericPlayer
  GenericPlayer.prototype.print = function () {
    var stats = [
      makeStatTemplate('str', this.str),
      makeStatTemplate('brains', this.brains),
      makeStatTemplate('agi', this.agi),
      makeStatTemplate('hp', this.hp),
      makeStatTemplate('mp', this.mp),
    ];
    return makePlayerTemplate(this, stats);
  };
  // define attack function for GenericPlayer
  GenericPlayer.prototype.attack = function () {
    alert(this.name + ' the ' + this.type + ' attacks ' + (this.str + this.brains) + ' damage');
  };
  // create other classes that inherit from base class
  var Mage = function (name) {
    // init function will be the GenericPlayer.prototype.init function
    this.init({'name': name, 'str': 0, 'brains': 10, 'agi': 5, 'hp': 100, 'mp': 100, 'type': 'Mage', 'colorClass': 'success'});
  };
  // assign the GenericPlayer abstract class to the Mage.prototype attribute effectivly causing Mage to inherit from GenericPlayer
  Mage.prototype = new GenericPlayer();
  var Warrior = function (name) {
    this.init({'name': name, 'str': 10, 'brains': 0, 'agi': 5, 'hp': 300, 'mp': 0, 'type': 'Warrior', 'colorClass': 'danger'});
  };
  Warrior.prototype = new GenericPlayer();
  var Assassin = function (name) {
    this.init({'name': name, 'str': 5, 'brains': 5, 'agi': 10, 'hp': 100, 'mp': 20, 'type': 'Assassin', 'colorClass': 'warning'});
  };
  Assassin.prototype = new GenericPlayer();
  // assassin attack overrides genericplayer attack
  Assassin.prototype.attack = function () {
    if (Math.random() > 0.9) {  // Assasin attack has a 10% to do a critical hit
      return alert('CRITICAL HIT \n' + this.name + ' the ' + this.type + ' attacks ' + (this.str + this.brains) * 10 + ' damage');
    } else {
      return alert(this.name + ' the ' + this.type + ' attacks ' + (this.str + this.brains) + ' damage');
    }
  };
  function routePlayer(className, name) {
    // routes player creation
    var newPlayer;
    if (className === 'mage') {
      newPlayer = new Mage(name);
    }
    if (className === 'warrior') {
      newPlayer = new Warrior(name);
    }
    if (className === 'assassin') {
      newPlayer = new Assassin(name);
    }
    // ++ increases the counter
    newPlayer.id = ++playerCounter;  // unique id
    global.players[newPlayer.id] = newPlayer;  // allow easy reference of this in globals.
    return newPlayer;
  }
  global.attack = function (playerId) {
    // attack function for dom
    global.players[playerId].attack();
  };
  // Views
  function makePlayerTemplate(player, stats) {
    return playerTemplate.replace('{{id}}', player.id).replace('{{name}}',
              player.name).replace('{{panelclass}}', player.colorClass).replace('{{panelclass}}', player.colorClass).replace('{{type}}',
              player.type).replace('{{stats}}', stats.join(''));
  }
  function makeStatTemplate(key, val) {
    return playerStatTemplate.replace('{{key}}', key).replace('{{value}}', val);
  }
  function displayPlayer(player) {
    // adds a player object display to dom
    var playerContainer = document.createElement('div');
    playerContainer.className = 'col-md-4';
    playerContainer.innerHTML = player.print();
    document.querySelector('#player-list').appendChild(playerContainer);
  }
  // Templates
  var playerTemplate = '<div class="panel panel-{{panelclass}}"><div class="panel-heading">{{name}}<small class="pull-right">{{type}}</small></div><div class="panel-body"><ul class="list-unstyled">{{stats}}</ul></div><div class="panel-footer"><button class="btn btn-{{panelclass}}" onclick="global.attack({{id}})">ATTACK</button></div>';
  var playerStatTemplate = '<li><span>{{key}}</span> <b>{{value}}</b></li>';
  // Listeners
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.querySelector('#id_player-name').value;
    var className = document.querySelector('#id_player-class').value;
    var newPlayer = routePlayer(className, name);
    displayPlayer(newPlayer);
  });
}());