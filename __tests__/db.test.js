import { initQuery } from "../src/lib/planetscaleconn";

describe("Test DB", () => {
    it("should connect to db", async () => {
        const [rows] = await initQuery();
        expect(rows.first_name).toBe("Dumb");
    });
});