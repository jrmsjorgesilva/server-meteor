"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app = {};
describe("Beach forecast functional tests", () => {
    it("Should return a forecast with just a few types", async () => {
        const { body, status } = await (0, supertest_1.default)(app).get("/forecast");
        expect(status).toBe(200);
        expect(body).toBe([
            {
                time: "2020-04-26T00:00:00+00:00",
                forecast: [
                    {
                        lat: -33.792726,
                        lng: 151.289824,
                        name: "Manly",
                        position: "E",
                        rating: 2,
                        swellDirection: 64.26,
                        swellHeight: 0.15,
                        swellPeriod: 3.89,
                        time: "2020-04-26T00:00:00+00:00",
                        waveDirection: 231.38,
                        waveHeight: 0.47,
                        windDirection: 299.45,
                    },
                ],
            },
            {
                time: "2020-04-26T01:00:00+00:00",
                forecast: [
                    {
                        lat: -33.792726,
                        lng: 151.289824,
                        name: "Manly",
                        position: "E",
                        rating: 2,
                        swellDirection: 123.41,
                        swellHeight: 0.21,
                        swellPeriod: 3.67,
                        time: "2020-04-26T01:00:00+00:00",
                        waveDirection: 232.12,
                        waveHeight: 0.46,
                        windDirection: 310.48,
                    },
                ],
            },
        ]);
    });
});
//# sourceMappingURL=forecast.test.js.map