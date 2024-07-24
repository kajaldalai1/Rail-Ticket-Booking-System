"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPassengerDetailsByBookingId = void 0;
const db_1 = require("../db");
const getPassengerDetailsByBookingId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookingId } = req.params;
    try {
        const result = yield db_1.pool.query('SELECT * FROM passengers WHERE user_id IN (SELECT user_id FROM bookings WHERE id = $1)', [bookingId]);
        res.json(result.rows);
    }
    catch (err) {
        console.error('Error fetching passenger details:', err);
        res.status(500).json({ error: err });
    }
});
exports.getPassengerDetailsByBookingId = getPassengerDetailsByBookingId;