'use strict';

var moment = require('moment');
var sequelizeTypescript = require('sequelize-typescript');
var express = require('express');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var express__default = /*#__PURE__*/_interopDefaultLegacy(express);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

let Portfolio = class Portfolio extends sequelizeTypescript.Model {
};
__decorate([
    sequelizeTypescript.IsUUID(4),
    sequelizeTypescript.PrimaryKey,
    sequelizeTypescript.Column(sequelizeTypescript.DataType.UUID)
], Portfolio.prototype, "id", void 0);
__decorate([
    sequelizeTypescript.Length({ max: 128 }),
    sequelizeTypescript.Column(sequelizeTypescript.DataType.STRING)
], Portfolio.prototype, "name", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.STRING)
], Portfolio.prototype, "owner", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.DECIMAL(12, 2))
], Portfolio.prototype, "balance", void 0);
__decorate([
    sequelizeTypescript.HasMany(() => Placement)
], Portfolio.prototype, "placements", void 0);
Portfolio = __decorate([
    sequelizeTypescript.Table({ tableName: 'portfolios' })
], Portfolio);

let Placement = class Placement extends sequelizeTypescript.Model {
};
__decorate([
    sequelizeTypescript.IsUUID(4),
    sequelizeTypescript.PrimaryKey,
    sequelizeTypescript.Column(sequelizeTypescript.DataType.UUID)
], Placement.prototype, "id", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.STRING)
], Placement.prototype, "amount", void 0);
__decorate([
    sequelizeTypescript.BelongsTo(() => Stock)
], Placement.prototype, "stock", void 0);
__decorate([
    sequelizeTypescript.ForeignKey(() => Stock),
    sequelizeTypescript.Column(sequelizeTypescript.DataType.UUID)
], Placement.prototype, "stockId", void 0);
__decorate([
    sequelizeTypescript.BelongsTo(() => Portfolio)
], Placement.prototype, "portfolio", void 0);
__decorate([
    sequelizeTypescript.ForeignKey(() => Portfolio),
    sequelizeTypescript.Column(sequelizeTypescript.DataType.UUID)
], Placement.prototype, "portfolioId", void 0);
Placement = __decorate([
    sequelizeTypescript.Table({ tableName: 'placements' })
], Placement);

let Stock = class Stock extends sequelizeTypescript.Model {
};
__decorate([
    sequelizeTypescript.IsUUID(4),
    sequelizeTypescript.PrimaryKey,
    sequelizeTypescript.Column(sequelizeTypescript.DataType.UUID)
], Stock.prototype, "id", void 0);
__decorate([
    sequelizeTypescript.Length({ min: 3, max: 4 }),
    sequelizeTypescript.Column(sequelizeTypescript.DataType.STRING)
], Stock.prototype, "ticker", void 0);
__decorate([
    sequelizeTypescript.Length({ max: 128 }),
    sequelizeTypescript.Column(sequelizeTypescript.DataType.STRING)
], Stock.prototype, "name", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.DECIMAL(12, 4))
], Stock.prototype, "currentTrend", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.DECIMAL(12, 4))
], Stock.prototype, "momentum", void 0);
__decorate([
    sequelizeTypescript.HasMany(() => StockValue)
], Stock.prototype, "stockValues", void 0);
__decorate([
    sequelizeTypescript.HasMany(() => Placement)
], Stock.prototype, "placements", void 0);
Stock = __decorate([
    sequelizeTypescript.Table({ tableName: 'stocks' })
], Stock);

let StockValue = class StockValue extends sequelizeTypescript.Model {
};
__decorate([
    sequelizeTypescript.PrimaryKey,
    sequelizeTypescript.AutoIncrement,
    sequelizeTypescript.Column(sequelizeTypescript.DataType.INTEGER)
], StockValue.prototype, "id", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.DECIMAL(12, 4))
], StockValue.prototype, "value", void 0);
__decorate([
    sequelizeTypescript.Column(sequelizeTypescript.DataType.DATE)
], StockValue.prototype, "currentDate", void 0);
__decorate([
    sequelizeTypescript.BelongsTo(() => Stock)
], StockValue.prototype, "stock", void 0);
__decorate([
    sequelizeTypescript.ForeignKey(() => Stock),
    sequelizeTypescript.Column(sequelizeTypescript.DataType.UUID)
], StockValue.prototype, "stockId", void 0);
StockValue = __decorate([
    sequelizeTypescript.Table({ tableName: 'stockValue', timestamps: false })
], StockValue);

const sequelize = new sequelizeTypescript.Sequelize({
    host: 'benklingeler.de',
    database: 'trading_app',
    username: 'trading',
    password: '#Trading0607',
    dialect: 'postgres',
    models: [Stock, StockValue, Placement, Portfolio],
    logging: false,
});

const calculateRandomBetween = (min, max, decimals) => {
    const str = Number(Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
};

const calculateUpdatedTrend = () => {
    return calculateRandomBetween(-0.0025, 0.0025, 4);
};

const getAllStocks = () => __awaiter(void 0, void 0, void 0, function* () { return yield Stock.findAll(); });
const getAllStocksWithCurrentValue = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Stock.findAll({
        include: {
            model: StockValue,
            order: [['currentDate', 'DESC']],
            limit: 1,
        },
    });
});

const executeFiveMinutesTrigger = (moment) => __awaiter(void 0, void 0, void 0, function* () {
    const stocks = yield getAllStocks();
    for (const stock of stocks) {
        if (calculateRandomBetween(0, 1, 2) > 1 - 1 / 12) {
            stock.update({
                currentTrend: calculateUpdatedTrend(),
            });
        }
    }
});

const calculateTrendEffect = (trend) => {
    const normalizedTrend = trend / 2;
    const calculated = calculateRandomBetween(-0.5 + normalizedTrend, 0.5 + normalizedTrend, 4);
    return calculated;
};

const calculateUpdatedMomentum = (momentum) => {
    if (momentum < -0.001 || momentum > 0.001)
        return momentum / 1.25;
    return calculateRandomBetween(0, 1, 2) > 0.98
        ? calculateRandomBetween(-0.05, 0.05, 4)
        : 0;
};
const calculateMomentumEffect = (momentum) => momentum * 0.05;

const calculateUpdatedValue = (stock) => __awaiter(void 0, void 0, void 0, function* () {
    const momentum = stock.momentum;
    const trend = stock.currentTrend;
    const currentValue = stock.stockValues[0];
    let oldValue = 10;
    if (currentValue) {
        oldValue = currentValue.value;
    }
    const momentumEffect = momentum == 0 ? 0 : calculateMomentumEffect(momentum);
    const trendEffect = calculateTrendEffect(trend);
    const normalizedTrendEffect = trendEffect * 0.015;
    const completeEffect = momentumEffect + normalizedTrendEffect;
    const updatedMomentum = calculateUpdatedMomentum(momentum);
    stock.update({
        momentum: updatedMomentum,
    });
    if (oldValue <= 0.5 && completeEffect <= 0)
        return oldValue;
    return oldValue * (1 + completeEffect);
});

const executeSecondsTrigger = (currentMoment) => __awaiter(void 0, void 0, void 0, function* () {
    const stocks = yield getAllStocksWithCurrentValue();
    const updatedStockValueBulk = [];
    for (const stock of stocks) {
        const stockId = stock.id;
        const newValue = (yield calculateUpdatedValue(stock)).toFixed(4);
        updatedStockValueBulk.push({
            value: newValue,
            currentDate: currentMoment.toDate(),
            stockId,
        });
    }
    yield StockValue.bulkCreate(updatedStockValueBulk);
});

function Ok(payload) {
    return {
        ok: true,
        payload,
    };
}

const stockRouter = express__default["default"].Router();
stockRouter.get('/all', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const stocks = yield getAllStocks();
    return response.json(Ok(stocks));
}));

const routerConfig = {
    routers: [
        {
            baseUrl: '/api/stocks',
            router: stockRouter,
        },
    ],
};

// Initialize
const server = express__default["default"]();
server.use(express__default["default"].json());
// Init routers
routerConfig.routers.forEach((routerConfig) => {
    server.use(routerConfig.baseUrl, routerConfig.router);
});
server.listen(9090, '127.0.0.1', () => {
    console.log(`Server started on address https://127.0.0.1:9090`);
});

const run = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync();
    const timeChecker = () => {
        const currentMoment = moment__default["default"]();
        if (currentMoment.seconds() % 20 == 0) {
            executeSecondsTrigger(currentMoment);
        }
        if (currentMoment.minutes() % 5 == 0 && currentMoment.seconds() % 60 == 0) {
            executeFiveMinutesTrigger();
        }
    };
    // setInterval(timeChecker, secondsToMilliseconds(1));
    setInterval(timeChecker, 1000);
});
run();
