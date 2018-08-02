webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_formula_formula__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hero_hero__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_result_result__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_team_team__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fPro, hPro, rPro, tPro) {
        this.navCtrl = navCtrl;
        this.fPro = fPro;
        this.hPro = hPro;
        this.rPro = rPro;
        this.tPro = tPro;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.selected = "Hello";
        this.dva = 0;
        this.hammond = 0;
        this.winston = 0;
        this.orisa = 0;
        this.zarya = 0;
        this.roadhog = 0;
        this.mercy = 0;
        this.moira = 0;
        this.ana = 0;
        this.lucio = 0;
        this.zenyatta = 0;
        this.brigitte = 0;
        this.symmetra = 0;
        this.widowmaker = 0;
        this.torbjorn = 0;
        this.hanzo = 0;
        this.mei = 0;
        this.junkrat = 0;
        this.bastion = 0;
        this.pharah = 0;
        this.doomfist = 0;
        this.sombra = 0;
        this.tracer = 0;
        this.soldier76 = 0;
        this.mccree = 0;
        this.genji = 0;
        this.reaper = 0;
        this.reinhardt = 0;
        this.fin = [];
    }
    HomePage.prototype.nextStep = function () {
        switch (this.selected) {
            case "Hello":
                this.selected = "a0";
                break;
            case "a0":
                this.selected = "a1";
                break;
            case "a1":
                this.selected = "a2";
                break;
            case "a2":
                this.selected = "a3";
                break;
            case "a3":
                this.selected = "a4";
                break;
            case "a4":
                this.selected = "b0";
                break;
            case "b0":
                this.selected = "b1";
                break;
            case "b1":
                this.selected = "b2";
                break;
            case "b2":
                this.selected = "b3";
                break;
            case "b3":
                this.selected = "b4";
                break;
            case "b4":
                this.selected = "b5";
                break;
            case "b5":
                this.selected = "Hello";
                break;
        }
    };
    HomePage.prototype.stepUp = function () {
        if (this.step1) {
            this.step1 = !this.step1;
            this.step2 = !this.step2;
            this.nextStep();
        }
        else if (this.step2) {
            this.step2 = !this.step2;
            this.step3 = !this.step3;
        }
        else {
            this.step3 = !this.step3;
            this.step1 = !this.step1;
        }
    };
    HomePage.prototype.selecting = function (i) {
        this.selected = i;
    };
    HomePage.prototype.picked = function (h) {
        if (this.selected.charAt(0) == "a") {
            for (var i = 0; i < this.tPro.friend.length; i++) {
                if (this.tPro.friend[i].select == this.selected) {
                    this.editSlot(h, i, true);
                }
            }
        }
        else if (this.selected.charAt(0) == "b") {
            for (var i = 0; i < this.tPro.foe.length; i++) {
                if (this.tPro.foe[i].select == this.selected) {
                    this.editSlot(h, i, false);
                }
            }
        }
        this.nextStep();
    };
    HomePage.prototype.editSlot = function (h, i, f) {
        if (f) {
            this.tPro.friend[i].name = h.name;
            this.tPro.friend[i].IMG = h.IMG;
            this.tPro.friend[i].role = h.role;
        }
        else if (!f) {
            this.tPro.foe[i].name = h.name;
            this.tPro.foe[i].IMG = h.IMG;
            this.tPro.foe[i].role = h.role;
        }
        this.checkOut();
    };
    HomePage.prototype.checkOut = function () {
        var check = true;
        for (var i = 0; i < this.tPro.friend.length; i++) {
            if (this.tPro.friend[i].name == "Blank") {
                check = false;
            }
        }
        for (var i = 0; i < this.tPro.foe.length; i++) {
            if (this.tPro.foe[i].name == "Blank") {
                check = false;
            }
        }
        if (check) {
            this.dva = 0;
            this.hammond = 0;
            this.winston = 0;
            this.orisa = 0;
            this.zarya = 0;
            this.roadhog = 0;
            this.mercy = 0;
            this.moira = 0;
            this.ana = 0;
            this.lucio = 0;
            this.zenyatta = 0;
            this.brigitte = 0;
            this.symmetra = 0;
            this.widowmaker = 0;
            this.torbjorn = 0;
            this.hanzo = 0;
            this.mei = 0;
            this.junkrat = 0;
            this.bastion = 0;
            this.pharah = 0;
            this.doomfist = 0;
            this.sombra = 0;
            this.tracer = 0;
            this.soldier76 = 0;
            this.mccree = 0;
            this.genji = 0;
            this.reaper = 0;
            this.reinhardt = 0;
            this.formulateTeams();
        }
    };
    HomePage.prototype.formulateRoles = function () {
        var t = 0;
        var d = 0;
        var s = 0;
        var shield = false;
        var main = false;
        for (var i = 0; i < this.tPro.friend.length; i++) {
            switch (this.tPro.friend[i].role) {
                case "tank":
                    if (this.tPro.friend[i].name == "Orisa" || this.tPro.friend[i].name == "Reinhardt" || this.tPro.friend[i].name == "Winston") {
                        shield = true;
                    }
                    t++;
                    break;
                case "dps":
                    d++;
                    break;
                case "support":
                    if (this.tPro.friend[i].name == "Ana" || this.tPro.friend[i].name == "Mercy" || this.tPro.friend[i].name == "Moira") {
                        main = true;
                    }
                    s++;
                    break;
            }
        }
        if (s < 1) {
            this.fin = this.formulateSupport(s, main);
        }
        else if (t < 1) {
            this.fin = this.formulateTank(t, shield);
        }
        else if (d < 1) {
            this.fin = this.formulateDPS(d);
        }
        else if (t < 2) {
            this.fin = this.formulateTank(t, shield);
        }
        else if (s < 2) {
            this.fin = this.formulateSupport(s, main);
        }
        else {
            this.fin = this.formulateDPS(d);
        }
        this.step2 = false;
        this.step3 = true;
        this.fin = this.fin.splice(0, 4);
    };
    HomePage.prototype.formulateTeams = function () {
        for (var i = 0; i < this.tPro.friend.length; i++) {
            switch (this.tPro.friend[i].name) {
                case "Hammond":
                    this.sombra++;
                    this.reinhardt++;
                    this.lucio++;
                    break;
                case "Moira":
                    this.brigitte++;
                    this.reaper++;
                    this.reinhardt++;
                    break;
                case "Mercy":
                    this.pharah++;
                    this.zenyatta++;
                    this.dva++;
                    break;
                case "Tracer":
                    this.zarya++;
                    this.winston++;
                    this.genji++;
                    break;
                case "Bastion":
                    this.reinhardt++;
                    this.mercy++;
                    this.orisa++;
                    break;
                case "Doomfist":
                    this.zarya++;
                    this.ana++;
                    this.winston++;
                    this.dva++;
                    break;
                case "Genji":
                    this.zarya++;
                    this.zenyatta++;
                    this.winston++;
                    break;
                case "Hanzo":
                    this.orisa++;
                    this.brigitte++;
                    this.dva++;
                    break;
                case "McCree":
                    this.genji++;
                    this.brigitte++;
                    this.dva++;
                    break;
                case "Mei":
                    this.dva++;
                    this.mccree++;
                    this.roadhog++;
                    break;
                case "Pharah":
                    this.mercy++;
                    this.dva++;
                    this.genji++;
                    break;
                case "Reaper":
                    this.reinhardt++;
                    this.mccree++;
                    this.brigitte++;
                    break;
                case "Soldier 76":
                    this.reinhardt++;
                    this.ana++;
                    break;
                case "Sombra":
                    this.winston++;
                    this.tracer++;
                    this.brigitte++;
                    break;
                case "Symmetra":
                    this.reinhardt++;
                    this.reaper++;
                    this.doomfist++;
                    break;
                case "Torbjorn":
                    this.reinhardt++;
                    this.orisa++;
                    this.mei++;
                    break;
                case "D.Va":
                    this.winston++;
                    this.genji++;
                    this.mercy++;
                    break;
                case "Orisa":
                    this.reinhardt++;
                    this.tracer++;
                    this.dva++;
                    this.mccree++;
                    break;
                case "Reinhardt":
                    this.ana++;
                    this.soldier76++;
                    this.mei++;
                    this.bastion++;
                    this.orisa++;
                    break;
                case "Roadhog":
                    this.ana++;
                    this.reinhardt++;
                    this.mei++;
                    break;
                case "Winston":
                    this.tracer++;
                    this.zenyatta++;
                    this.zarya++;
                    break;
                case "Zarya":
                    this.roadhog++;
                    this.hanzo++;
                    this.genji++;
                    this.pharah++;
                    this.dva++;
                    this.mccree++;
                    break;
                case "Ana":
                    this.reinhardt++;
                    this.bastion++;
                    this.brigitte++;
                    break;
                case "Brigitte":
                    this.roadhog++;
                    this.moira++;
                    this.reaper++;
                    break;
                case "Lucio":
                    this.hammond++;
                    this.winston++;
                    this.moira++;
                    this.doomfist++;
                    break;
                case "Zenyatta":
                    this.genji++;
                    this.winston++;
                    this.tracer++;
                    break;
            }
        }
        for (var i = 0; i < this.tPro.foe.length; i++) {
            switch (this.tPro.foe[i].name) {
                case "Lucio":
                    this.ana++;
                    this.mccree++;
                    this.roadhog++;
                    this.sombra++;
                    break;
                case "Brigitte":
                    this.pharah++;
                    this.sombra++;
                    this.junkrat++;
                    break;
                case "Ana":
                    this.genji++;
                    this.dva++;
                    this.lucio++;
                    break;
                case "Hammond":
                    this.sombra++;
                    this.dva++;
                    this.torbjorn++;
                    this.brigitte++;
                    break;
                case "Moira":
                    this.hanzo++;
                    this.mei++;
                    this.roadhog++;
                    break;
                case "Mercy":
                    this.mccree++;
                    this.hanzo++;
                    this.roadhog++;
                    break;
                case "Tracer":
                    this.mccree++;
                    this.moira++;
                    this.torbjorn++;
                    break;
                case "Bastion":
                    this.dva++;
                    this.genji++;
                    this.junkrat++;
                    this.widowmaker++;
                    this.tracer++;
                    this.hanzo++;
                    this.roadhog++;
                    this.orisa++;
                    this.ana++;
                    this.sombra++;
                    break;
                case "Doomfist":
                    this.soldier76++;
                    this.pharah++;
                    this.sombra++;
                    this.orisa++;
                    break;
                case "Genji":
                    this.winston++;
                    this.brigitte++;
                    this.pharah++;
                    break;
                case "Hanzo":
                    this.widowmaker++;
                    this.brigitte++;
                    this.dva++;
                    break;
                case "Junkrat":
                    this.widowmaker++;
                    this.zarya++;
                    this.pharah++;
                    break;
                case "McCree":
                    this.dva++;
                    this.lucio++;
                    this.widowmaker++;
                    break;
                case "Mei":
                    this.lucio++;
                    this.pharah++;
                    this.widowmaker++;
                    this.zarya++;
                    break;
                case "Pharah":
                    this.widowmaker++;
                    this.hanzo++;
                    this.dva++;
                    break;
                case "Reaper":
                    this.widowmaker++;
                    this.hanzo++;
                    this.zarya++;
                    this.brigitte++;
                    this.pharah++;
                    break;
                case "Soldier 76":
                    this.reinhardt++;
                    this.widowmaker++;
                    this.dva++;
                    break;
                case "Sombra":
                    this.winston++;
                    this.moira++;
                    this.mccree++;
                    break;
                case "Symmetra":
                    this.winston++;
                    this.doomfist++;
                    this.tracer++;
                    break;
                case "Torbjorn":
                    this.ana++;
                    this.hanzo++;
                    this.junkrat++;
                    this.orisa++;
                    this.soldier76++;
                    this.widowmaker++;
                    this.zarya++;
                    break;
                case "Widowmaker":
                    this.dva++;
                    this.genji++;
                    this.orisa++;
                    this.reinhardt++;
                    this.winston++;
                    this.hammond++;
                    break;
                case "D.Va":
                    this.roadhog++;
                    this.zarya++;
                    this.brigitte++;
                    break;
                case "Orisa":
                    this.widowmaker++;
                    this.sombra++;
                    this.hanzo++;
                    this.reaper++;
                    this.tracer++;
                    break;
                case "Reinhardt":
                    this.doomfist++;
                    this.pharah++;
                    this.sombra++;
                    this.mccree++;
                    this.junkrat++;
                    this.mei++;
                    this.tracer++;
                    break;
                case "Roadhog":
                    this.reaper++;
                    this.zarya++;
                    this.dva++;
                    this.orisa++;
                    this.zenyatta++;
                    break;
                case "Winston":
                    this.bastion++;
                    this.reaper++;
                    this.roadhog++;
                    break;
                case "Zarya":
                    this.bastion++;
                    this.pharah++;
                    this.reaper++;
                    this.zenyatta++;
                    break;
                case "Zenyatta":
                    this.ana++;
                    this.reaper++;
                    this.sombra++;
                    this.tracer++;
                    break;
            }
        }
        this.formulateRoles();
    };
    HomePage.prototype.formulateTank = function (c, m) {
        var tanks = [];
        var dvaSwitch = true;
        var hammondSwitch = true;
        var winstonSwitch = true;
        var orisaSwitch = true;
        var zaryaSwitch = true;
        var reinhardtSwitch = true;
        var roadhogSwitch = true;
        for (var i = 0; i < this.tPro.friend.length; i++) {
            switch (this.tPro.friend[i].name) {
                case "D.Va":
                    dvaSwitch = false;
                    break;
                case "Hammond":
                    hammondSwitch = false;
                    break;
                case "Winston":
                    winstonSwitch = false;
                    break;
                case "Orisa":
                    orisaSwitch = false;
                    break;
                case "Zarya":
                    zaryaSwitch = false;
                    break;
                case "Reinhardt":
                    reinhardtSwitch = false;
                    break;
                case "Roadhog":
                    roadhogSwitch = false;
                    break;
            }
        }
        if (m) {
            if (dvaSwitch) {
<<<<<<< HEAD
                tanks.push({ name: "D.Va", IMG: '../assets/imgs/tall/dva.png', score: this.dva });
            }
            if (hammondSwitch) {
                tanks.push({ name: "Hammond", IMG: '../assets/imgs/tall/hammond.png', score: this.hammond });
            }
            if (winstonSwitch) {
                tanks.push({ name: "Winston", IMG: '../assets/imgs/tall/winston.png', score: this.winston });
            }
            if (orisaSwitch) {
                tanks.push({ name: "Orisa", IMG: '../assets/imgs/tall/orisa.png', score: this.orisa });
            }
            if (zaryaSwitch) {
                tanks.push({ name: "Zarya", IMG: '../assets/imgs/tall/zarya.png', score: this.zarya });
            }
            if (reinhardtSwitch) {
                tanks.push({ name: "Reinhardt", IMG: '../assets/imgs/tall/reinhardt.png', score: this.reinhardt });
            }
            if (roadhogSwitch) {
                tanks.push({ name: "Roadhog", IMG: '../assets/imgs/tall/roadhog.png', score: this.roadhog });
=======
                tanks.push({ name: "D.Va", IMG: '/assets/imgs/tall/dva.png', score: this.dva });
            }
            if (hammondSwitch) {
                tanks.push({ name: "Hammond", IMG: '/assets/imgs/tall/hammond.png', score: this.hammond });
            }
            if (winstonSwitch) {
                tanks.push({ name: "Winston", IMG: '/assets/imgs/tall/winston.png', score: this.winston });
            }
            if (orisaSwitch) {
                tanks.push({ name: "Orisa", IMG: '/assets/imgs/tall/orisa.png', score: this.orisa });
            }
            if (zaryaSwitch) {
                tanks.push({ name: "Zarya", IMG: '/assets/imgs/tall/zarya.png', score: this.zarya });
            }
            if (reinhardtSwitch) {
                tanks.push({ name: "Reinhardt", IMG: '/assets/imgs/tall/reinhardt.png', score: this.reinhardt });
            }
            if (roadhogSwitch) {
                tanks.push({ name: "Roadhog", IMG: '/assets/imgs/tall/roadhog.png', score: this.roadhog });
>>>>>>> gh-pages
            }
        }
        else if (!m) {
            if (winstonSwitch) {
<<<<<<< HEAD
                tanks.push({ name: "Winston", IMG: '../assets/imgs/tall/winston.png', score: this.winston });
            }
            if (orisaSwitch) {
                tanks.push({ name: "Orisa", IMG: '../assets/imgs/tall/orisa.png', score: this.orisa });
            }
            if (reinhardtSwitch) {
                tanks.push({ name: "Reinhardt", IMG: '../assets/imgs/tall/reinhardt.png', score: this.reinhardt });
=======
                tanks.push({ name: "Winston", IMG: '/assets/imgs/tall/winston.png', score: this.winston });
            }
            if (orisaSwitch) {
                tanks.push({ name: "Orisa", IMG: '/assets/imgs/tall/orisa.png', score: this.orisa });
            }
            if (reinhardtSwitch) {
                tanks.push({ name: "Reinhardt", IMG: '/assets/imgs/tall/reinhardt.png', score: this.reinhardt });
>>>>>>> gh-pages
            }
        }
        tanks.sort(function (a, b) { return b.score - a.score; });
        return tanks;
    };
    HomePage.prototype.formulateSupport = function (c, m) {
        var supports = [];
        var anaSwitch = true;
        var brigitteSwitch = true;
        var lucioSwitch = true;
        var mercySwitch = true;
        var moiraSwitch = true;
        var zenyattaSwitch = true;
        for (var i = 0; i < this.tPro.friend.length; i++) {
            switch (this.tPro.friend[i].name) {
                case "Ana":
                    anaSwitch = false;
                    break;
                case "Brigitte":
                    brigitteSwitch = false;
                    break;
                case "Lucio":
                    lucioSwitch = false;
                    break;
                case "Mercy":
                    mercySwitch = false;
                    break;
                case "Moira":
                    moiraSwitch = false;
                    break;
                case "Zenyatta":
                    zenyattaSwitch = false;
                    break;
            }
        }
        if (m) {
            if (anaSwitch) {
<<<<<<< HEAD
                supports.push({ name: "Ana", IMG: '../assets/imgs/tall/ana.png', score: this.ana });
            }
            if (brigitteSwitch) {
                supports.push({ name: "Brigitte", IMG: '../assets/imgs/tall/brigitte.png', score: this.brigitte });
            }
            if (lucioSwitch) {
                supports.push({ name: "Lucio", IMG: '../assets/imgs/tall/lucio.png', score: this.lucio });
            }
            if (mercySwitch) {
                supports.push({ name: "Mercy", IMG: '../assets/imgs/tall/mercy.png', score: this.mercy });
            }
            if (moiraSwitch) {
                supports.push({ name: "Moira", IMG: '../assets/imgs/tall/moira.png', score: this.moira });
            }
            if (zenyattaSwitch) {
                supports.push({ name: "Zenyatta", IMG: '../assets/imgs/tall/zenyatta.png', score: this.zenyatta });
=======
                supports.push({ name: "Ana", IMG: '/assets/imgs/tall/ana.png', score: this.ana });
            }
            if (brigitteSwitch) {
                supports.push({ name: "Brigitte", IMG: '/assets/imgs/tall/brigitte.png', score: this.brigitte });
            }
            if (lucioSwitch) {
                supports.push({ name: "Lucio", IMG: '/assets/imgs/tall/lucio.png', score: this.lucio });
            }
            if (mercySwitch) {
                supports.push({ name: "Mercy", IMG: '/assets/imgs/tall/mercy.png', score: this.mercy });
            }
            if (moiraSwitch) {
                supports.push({ name: "Moira", IMG: '/assets/imgs/tall/moira.png', score: this.moira });
            }
            if (zenyattaSwitch) {
                supports.push({ name: "Zenyatta", IMG: '/assets/imgs/tall/zenyatta.png', score: this.zenyatta });
>>>>>>> gh-pages
            }
        }
        else if (!m) {
            if (anaSwitch) {
<<<<<<< HEAD
                supports.push({ name: "Ana", IMG: '../assets/imgs/tall/ana.png', score: this.ana });
            }
            if (mercySwitch) {
                supports.push({ name: "Mercy", IMG: '../assets/imgs/tall/mercy.png', score: this.mercy });
            }
            if (moiraSwitch) {
                supports.push({ name: "Moira", IMG: '../assets/imgs/tall/moira.png', score: this.moira });
=======
                supports.push({ name: "Ana", IMG: '/assets/imgs/tall/ana.png', score: this.ana });
            }
            if (mercySwitch) {
                supports.push({ name: "Mercy", IMG: '/assets/imgs/tall/mercy.png', score: this.mercy });
            }
            if (moiraSwitch) {
                supports.push({ name: "Moira", IMG: '/assets/imgs/tall/moira.png', score: this.moira });
>>>>>>> gh-pages
            }
        }
        supports.sort(function (a, b) { return b.score - a.score; });
        return supports;
    };
    HomePage.prototype.formulateDPS = function (c) {
        var dpses = [];
        var bastionSwitch = true;
        var doomfistSwitch = true;
        var genjiSwitch = true;
        var hanzoSwitch = true;
        var junkratSwitch = true;
        var mccreeSwitch = true;
        var meiSwitch = true;
        var pharahSwitch = true;
        var reaperSwitch = true;
        var soldier76Switch = true;
        var sombraSwitch = true;
        var symmetraSwitch = true;
        var torbjornSwitch = true;
        var tracerSwitch = true;
        var widowmakerSwitch = true;
        for (var i = 0; i < this.tPro.friend.length; i++) {
            switch (this.tPro.friend[i].name) {
                case "Bastion":
                    bastionSwitch = false;
                    break;
                case "Doomfist":
                    doomfistSwitch = false;
                    break;
                case "Genji":
                    genjiSwitch = false;
                    break;
                case "Hanzo":
                    hanzoSwitch = false;
                    break;
                case "Junkrat":
                    junkratSwitch = false;
                    break;
                case "McCree":
                    mccreeSwitch = false;
                    break;
                case "Mei":
                    meiSwitch = false;
                    break;
                case "Pharah":
                    pharahSwitch = false;
                    break;
                case "Reaper":
                    reaperSwitch = false;
                    break;
                case "Soldier 76":
                    soldier76Switch = false;
                    break;
                case "Sombra":
                    sombraSwitch = false;
                    break;
                case "Symmetra":
                    symmetraSwitch = false;
                    break;
                case "Torbjorn":
                    torbjornSwitch = false;
                    break;
                case "Tracer":
                    tracerSwitch = false;
                    break;
                case "Widowmaker":
                    widowmakerSwitch = false;
                    break;
            }
        }
        if (bastionSwitch) {
<<<<<<< HEAD
            dpses.push({ name: "Bastion", IMG: '../assets/imgs/tall/bastion.png', score: this.bastion });
        }
        if (doomfistSwitch) {
            dpses.push({ name: "Doomfist", IMG: '../assets/imgs/tall/doomfist.png', score: this.doomfist });
        }
        if (genjiSwitch) {
            dpses.push({ name: "Genji", IMG: '../assets/imgs/tall/genji.png', score: this.genji });
        }
        if (hanzoSwitch) {
            dpses.push({ name: "Hanzo", IMG: '../assets/imgs/tall/hanzo.png', score: this.hanzo });
        }
        if (junkratSwitch) {
            dpses.push({ name: "Junkrat", IMG: '../assets/imgs/tall/junkrat.png', score: this.junkrat });
        }
        if (mccreeSwitch) {
            dpses.push({ name: "McCree", IMG: '../assets/imgs/tall/mccree.png', score: this.mccree });
        }
        if (meiSwitch) {
            dpses.push({ name: "Mei", IMG: '../assets/imgs/tall/mei.png', score: this.mei });
        }
        if (pharahSwitch) {
            dpses.push({ name: "Pharah", IMG: '../assets/imgs/tall/pharah.png', score: this.pharah });
        }
        if (reaperSwitch) {
            dpses.push({ name: "Reaper", IMG: '../assets/imgs/tall/reaper.png', score: this.reaper });
        }
        if (soldier76Switch) {
            dpses.push({ name: "Soldier 76", IMG: '../assets/imgs/tall/soldier76.png', score: this.soldier76 });
        }
        if (sombraSwitch) {
            dpses.push({ name: "Sombra", IMG: '../assets/imgs/tall/sombra.png', score: this.sombra });
        }
        if (symmetraSwitch) {
            dpses.push({ name: "Symmetra", IMG: '../assets/imgs/tall/symmetra.png', score: this.symmetra });
        }
        if (torbjornSwitch) {
            dpses.push({ name: "Torbjorn", IMG: '../assets/imgs/tall/torbjorn.png', score: this.torbjorn });
        }
        if (tracerSwitch) {
            dpses.push({ name: "Tracer", IMG: '../assets/imgs/tall/tracer.png', score: this.tracer });
        }
        if (widowmakerSwitch) {
            dpses.push({ name: "Widowmaker", IMG: '../assets/imgs/tall/widowmaker.png', score: this.widowmaker });
=======
            dpses.push({ name: "Bastion", IMG: '/assets/imgs/tall/bastion.png', score: this.bastion });
        }
        if (doomfistSwitch) {
            dpses.push({ name: "Doomfist", IMG: '/assets/imgs/tall/doomfist.png', score: this.doomfist });
        }
        if (genjiSwitch) {
            dpses.push({ name: "Genji", IMG: '/assets/imgs/tall/genji.png', score: this.genji });
        }
        if (hanzoSwitch) {
            dpses.push({ name: "Hanzo", IMG: '/assets/imgs/tall/hanzo.png', score: this.hanzo });
        }
        if (junkratSwitch) {
            dpses.push({ name: "Junkrat", IMG: '/assets/imgs/tall/junkrat.png', score: this.junkrat });
        }
        if (mccreeSwitch) {
            dpses.push({ name: "McCree", IMG: '/assets/imgs/tall/mccree.png', score: this.mccree });
        }
        if (meiSwitch) {
            dpses.push({ name: "Mei", IMG: '/assets/imgs/tall/mei.png', score: this.mei });
        }
        if (pharahSwitch) {
            dpses.push({ name: "Pharah", IMG: '/assets/imgs/tall/pharah.png', score: this.pharah });
        }
        if (reaperSwitch) {
            dpses.push({ name: "Reaper", IMG: '/assets/imgs/tall/reaper.png', score: this.reaper });
        }
        if (soldier76Switch) {
            dpses.push({ name: "Soldier 76", IMG: '/assets/imgs/tall/soldier76.png', score: this.soldier76 });
        }
        if (sombraSwitch) {
            dpses.push({ name: "Sombra", IMG: '/assets/imgs/tall/sombra.png', score: this.sombra });
        }
        if (symmetraSwitch) {
            dpses.push({ name: "Symmetra", IMG: '/assets/imgs/tall/symmetra.png', score: this.symmetra });
        }
        if (torbjornSwitch) {
            dpses.push({ name: "Torbjorn", IMG: '/assets/imgs/tall/torbjorn.png', score: this.torbjorn });
        }
        if (tracerSwitch) {
            dpses.push({ name: "Tracer", IMG: '/assets/imgs/tall/tracer.png', score: this.tracer });
        }
        if (widowmakerSwitch) {
            dpses.push({ name: "Widowmaker", IMG: '/assets/imgs/tall/widowmaker.png', score: this.widowmaker });
>>>>>>> gh-pages
        }
        dpses.sort(function (a, b) { return b.score - a.score; });
        return dpses;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Mobile\OWVS\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      /Overwatch Versus/\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'../assets/imgs/bg.jpg\'); background-position: center; background-repeat: no-repeat; background-size: cover;">\n	<!-- Welcome Card -->\n		<ion-card [hidden]="!step1">\n			<ion-card-header>\n				<h2>Welcome to Overwatch Versus!</h2>\n			</ion-card-header>\n			<ion-card-content>\n				<button ion-button block (click)="stepUp();">BEGIN!</button>\n			</ion-card-content>\n		</ion-card>\n	<!-- END Welcome Card END -->\n\n	<!-- Results Card -->\n		<ion-card [hidden]="!step3">\n			<ion-card-header>\n				<h2>You should play as..</h2>\n			</ion-card-header>\n			<ion-card-content>\n				<ion-grid>\n					<ion-row>\n						<ion-col *ngFor="let hero of fin" style="border: 1px solid darkgray;">\n							<ion-row>\n								<img src={{hero.IMG}} style="width: 40px; height: 69px;">\n							</ion-row>\n							<ion-row>\n								<p style="text-align: center;">Score: {{hero.score}}</p>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</ion-card-content>\n		</ion-card>\n	<!-- END Results Card END -->\n\n	<ion-grid [hidden]="step1">\n		<ion-row>\n			<!-- Player Team -->\n				<ion-col col-6 style="padding: 0px; margin: 0px;">\n					<ion-card class="friendly">\n						<ion-card-header>\n							<h2>PLAYER</h2>\n							<h2>TEAM</h2>\n						</ion-card-header>\n						<ion-card-content style="padding: 0px; margin: 0px;">\n							<ion-list>\n								<ion-item *ngFor="let player of tPro.friend" (click)="selecting(player.select);">\n									<img *ngIf="selected == player.select" src="../../assets/imgs/arrow.png" item-start>\n									<img *ngIf="selected != player.select" src={{player.IMG}} item-start>\n									{{player.name}}\n								</ion-item>\n							</ion-list>\n						</ion-card-content>\n					</ion-card>\n				</ion-col>\n			<!-- END Player Team END -->\n\n			<!-- Enemy Team -->\n				<ion-col col-6 style="padding: 0px; margin: 0px;">\n					<ion-card class="foe">\n						<ion-card-header>\n							<h2>ENEMY</h2>\n							<h2>TEAM</h2>\n						</ion-card-header>\n						<ion-card-content style="padding: 0px; margin: 0px;">\n							<ion-item *ngFor="let player of tPro.foe" (click)="selecting(player.select);">\n								<img *ngIf="selected == player.select" src="../../assets/imgs/arrow.png" item-start>\n								<img *ngIf="selected != player.select" src={{player.IMG}} item-start>\n								{{player.name}}\n							</ion-item>\n						</ion-card-content>\n					</ion-card>\n				</ion-col>\n			<!-- END Enemy Team END -->\n		</ion-row>\n	</ion-grid>\n\n	<br>\n	<br>\n	<br>\n	<br>\n	<br>\n</ion-content>\n\n<ion-footer [hidden]="step1" style="background-color: white;">\n	<ion-toolbar>\n		<a *ngFor="let hero of hPro.heroes" (click)="picked(hero);">\n			<img src={{hero.IMG}} style="max-width: 30px;">\n		</a>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\Mobile\OWVS\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_formula_formula__["a" /* FormulaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hero_hero__["a" /* HeroProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_result_result__["a" /* ResultProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_team_team__["a" /* TeamProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FormulaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FormulaProvider = /** @class */ (function () {
    function FormulaProvider(http) {
        this.http = http;
        this.results = [];
        console.log('Hello FormulaProvider Provider');
    }
    FormulaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FormulaProvider);
    return FormulaProvider;
}());

//# sourceMappingURL=formula.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HeroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HeroProvider = /** @class */ (function () {
    function HeroProvider(http) {
        this.http = http;
        this.heroes = [
            //Tanks
<<<<<<< HEAD
            { name: "D.Va", role: "tank", meta: "2tank", dive: true, cc: false, IMG: '../assets/imgs/dva.png', code: "dva" },
            { name: "Orisa", role: "tank", meta: "1tank", dive: false, cc: false, IMG: '../assets/imgs/orisa.png', code: "orisa" },
            { name: "Reinhardt", role: "tank", meta: "1tank", dive: true, cc: true, IMG: '../assets/imgs/reinhardt.png', code: "reinhardt" },
            { name: "Roadhog", role: "tank", meta: "2tank", dive: false, cc: true, IMG: '../assets/imgs/roadhog.png', code: "roadhog" },
            { name: "Winston", role: "tank", meta: "1tank", dive: true, cc: false, IMG: '../assets/imgs/winston.png', code: "winston" },
            { name: "Hammond", role: "tank", meta: "2tank", dive: true, cc: true, IMG: '../assets/imgs/hammond.png', code: "hammond" },
            { name: "Zarya", role: "tank", meta: "2tank", dive: true, cc: true, IMG: '../assets/imgs/zarya.png', code: "zarya" },
            //DPS
            { name: "Bastion", role: "dps", meta: "front", dive: false, cc: false, IMG: '../assets/imgs/bastion.png', code: "bastion" },
            { name: "Doomfist", role: "dps", meta: "flank", dive: true, cc: true, IMG: '../assets/imgs/doomfist.png', code: "doomfist" },
            { name: "Genji", role: "dps", meta: "flank", dive: true, cc: false, IMG: '../assets/imgs/genji.png', code: "genji" },
            { name: "Hanzo", role: "dps", meta: "front", dive: true, cc: false, IMG: '../assets/imgs/hanzo.png', code: "hanzo" },
            { name: "Junkrat", role: "dps", meta: "back", dive: false, cc: false, IMG: '../assets/imgs/junkrat.png', code: "junkrat" },
            { name: "McCree", role: "dps", meta: "front", dive: false, cc: true, IMG: '../assets/imgs/mccree.png', code: "mccree" },
            { name: "Pharah", role: "dps", meta: "flank", dive: true, cc: false, IMG: '../assets/imgs/pharah.png', code: "pharah" },
            { name: "Mei", role: "dps", meta: "front", dive: false, cc: true, IMG: '../assets/imgs/mei.png', code: "mei" },
            { name: "Reaper", role: "dps", meta: "flank", dive: true, cc: false, IMG: '../assets/imgs/reaper.png', code: "reaper" },
            { name: "Soldier 76", role: "dps", meta: "front", dive: false, cc: false, IMG: '../assets/imgs/soldier76.png', code: "soldier76" },
            { name: "Sombra", role: "dps", meta: "flank", dive: true, cc: true, IMG: '../assets/imgs/sombra.png', code: "sombra" },
            { name: "Symmetra", role: "dps", meta: "back", dive: false, cc: false, IMG: '../assets/imgs/symmetra.png', code: "symmetra" },
            { name: "Torbjorn", role: "dps", meta: "back", dive: false, cc: false, IMG: '../assets/imgs/torbjorn.png', code: "torbjorn" },
            { name: "Tracer", role: "dps", meta: "flank", dive: true, cc: false, IMG: '../assets/imgs/tracer.png', code: "tracer" },
            { name: "Widowmaker", role: "dps", meta: "back", dive: false, cc: false, IMG: '../assets/imgs/widowmaker.png', code: "widowmaker" },
            //Supports
            { name: "Ana", role: "support", meta: "1heal", dive: false, cc: true, IMG: '../assets/imgs/ana.png', code: "ana" },
            { name: "Brigitte", role: "support", meta: "2heal", dive: false, cc: true, IMG: '../assets/imgs/brigitte.png', code: "brigitte" },
            { name: "Lucio", role: "support", meta: "2heal", dive: true, cc: false, IMG: '../assets/imgs/lucio.png', code: "lucio" },
            { name: "Mercy", role: "support", meta: "1heal", dive: true, cc: false, IMG: '../assets/imgs/mercy.png', code: "mercy" },
            { name: "Moira", role: "support", meta: "1heal", dive: false, cc: false, IMG: '../assets/imgs/moira.png', code: "moira" },
            { name: "Zenyatta", role: "support", meta: "2heal", dive: false, cc: false, IMG: '../assets/imgs/zenyatta.png', code: "zenyatta" }
=======
            { name: "D.Va", role: "tank", meta: "2tank", dive: true, cc: false, IMG: '/assets/imgs/dva.png', code: "dva" },
            { name: "Orisa", role: "tank", meta: "1tank", dive: false, cc: false, IMG: '/assets/imgs/orisa.png', code: "orisa" },
            { name: "Reinhardt", role: "tank", meta: "1tank", dive: true, cc: true, IMG: '/assets/imgs/reinhardt.png', code: "reinhardt" },
            { name: "Roadhog", role: "tank", meta: "2tank", dive: false, cc: true, IMG: '/assets/imgs/roadhog.png', code: "roadhog" },
            { name: "Winston", role: "tank", meta: "1tank", dive: true, cc: false, IMG: '/assets/imgs/winston.png', code: "winston" },
            { name: "Hammond", role: "tank", meta: "2tank", dive: true, cc: true, IMG: '/assets/imgs/hammond.png', code: "hammond" },
            { name: "Zarya", role: "tank", meta: "2tank", dive: true, cc: true, IMG: '/assets/imgs/zarya.png', code: "zarya" },
            //DPS
            { name: "Bastion", role: "dps", meta: "front", dive: false, cc: false, IMG: '/assets/imgs/bastion.png', code: "bastion" },
            { name: "Doomfist", role: "dps", meta: "flank", dive: true, cc: true, IMG: '/assets/imgs/doomfist.png', code: "doomfist" },
            { name: "Genji", role: "dps", meta: "flank", dive: true, cc: false, IMG: '/assets/imgs/genji.png', code: "genji" },
            { name: "Hanzo", role: "dps", meta: "front", dive: true, cc: false, IMG: '/assets/imgs/hanzo.png', code: "hanzo" },
            { name: "Junkrat", role: "dps", meta: "back", dive: false, cc: false, IMG: '/assets/imgs/junkrat.png', code: "junkrat" },
            { name: "McCree", role: "dps", meta: "front", dive: false, cc: true, IMG: '/assets/imgs/mccree.png', code: "mccree" },
            { name: "Pharah", role: "dps", meta: "flank", dive: true, cc: false, IMG: '/assets/imgs/pharah.png', code: "pharah" },
            { name: "Mei", role: "dps", meta: "front", dive: false, cc: true, IMG: '/assets/imgs/mei.png', code: "mei" },
            { name: "Reaper", role: "dps", meta: "flank", dive: true, cc: false, IMG: '/assets/imgs/reaper.png', code: "reaper" },
            { name: "Soldier 76", role: "dps", meta: "front", dive: false, cc: false, IMG: '/assets/imgs/soldier76.png', code: "soldier76" },
            { name: "Sombra", role: "dps", meta: "flank", dive: true, cc: true, IMG: '/assets/imgs/sombra.png', code: "sombra" },
            { name: "Symmetra", role: "dps", meta: "back", dive: false, cc: false, IMG: '/assets/imgs/symmetra.png', code: "symmetra" },
            { name: "Torbjorn", role: "dps", meta: "back", dive: false, cc: false, IMG: '/assets/imgs/torbjorn.png', code: "torbjorn" },
            { name: "Tracer", role: "dps", meta: "flank", dive: true, cc: false, IMG: '/assets/imgs/tracer.png', code: "tracer" },
            { name: "Widowmaker", role: "dps", meta: "back", dive: false, cc: false, IMG: '/assets/imgs/widowmaker.png', code: "widowmaker" },
            //Supports
            { name: "Ana", role: "support", meta: "1heal", dive: false, cc: true, IMG: '/assets/imgs/ana.png', code: "ana" },
            { name: "Brigitte", role: "support", meta: "2heal", dive: false, cc: true, IMG: '/assets/imgs/brigitte.png', code: "brigitte" },
            { name: "Lucio", role: "support", meta: "2heal", dive: true, cc: false, IMG: '/assets/imgs/lucio.png', code: "lucio" },
            { name: "Mercy", role: "support", meta: "1heal", dive: true, cc: false, IMG: '/assets/imgs/mercy.png', code: "mercy" },
            { name: "Moira", role: "support", meta: "1heal", dive: false, cc: false, IMG: '/assets/imgs/moira.png', code: "moira" },
            { name: "Zenyatta", role: "support", meta: "2heal", dive: false, cc: false, IMG: '/assets/imgs/zenyatta.png', code: "zenyatta" }
>>>>>>> gh-pages
        ];
        console.log('Hello HeroProvider Provider');
    }
    HeroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HeroProvider);
    return HeroProvider;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ResultProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ResultProvider = /** @class */ (function () {
    function ResultProvider(http) {
        this.http = http;
        console.log('Hello ResultProvider Provider');
    }
    ResultProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ResultProvider);
    return ResultProvider;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TeamProvider = /** @class */ (function () {
    function TeamProvider(http) {
        this.http = http;
        this.friend = [
<<<<<<< HEAD
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "a0", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "a1", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "a2", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "a3", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "a4", role: "none" }
        ];
        this.foe = [
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "b0", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "b1", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "b2", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "b3", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "b4", role: "none" },
            { name: "Blank", IMG: '../assets/imgs/blank.png', select: "b5", role: "none" }
=======
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "a0", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "a1", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "a2", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "a3", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "a4", role: "none" }
        ];
        this.foe = [
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "b0", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "b1", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "b2", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "b3", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "b4", role: "none" },
            { name: "Blank", IMG: '/assets/imgs/blank.png', select: "b5", role: "none" }
>>>>>>> gh-pages
        ];
        console.log('Hello TeamProvider Provider');
    }
    TeamProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TeamProvider);
    return TeamProvider;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_hero_hero__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_formula_formula__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_result_result__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_team_team__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_hero_hero__["a" /* HeroProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_formula_formula__["a" /* FormulaProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_result_result__["a" /* ResultProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_team_team__["a" /* TeamProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Mobile\OWVS\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Mobile\OWVS\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map