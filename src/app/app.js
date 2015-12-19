var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
//import {Square} from './square';
var BoardComponent = (function () {
    function BoardComponent() {
        var _this = this;
        this.size = 6;
        this.squares = Array(this.size).fill().map(function () { return Array(_this.size).fill().map(function () { return new Object(); }); });
        this.selectedSquare = 5;
    }
    BoardComponent.prototype.clickSquare = function (i, j) {
        console.log('clicked ' + i + ', ' + j);
        this.selectedSquare = this.squares[i][j];
    };
    BoardComponent = __decorate([
        angular2_1.Component({
            selector: 'board',
            templateUrl: 'board.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            styleUrls: ['board.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
})();
exports.BoardComponent = BoardComponent;
angular2_1.bootstrap(BoardComponent);
//# sourceMappingURL=app.js.map