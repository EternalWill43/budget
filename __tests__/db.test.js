import { initQuery } from "../src/lib/planetscaleconn";

describe("Test DB", () => {
    it("should connect to db and return first user named \"Dumb\"", async () => {
        const [rows] = await initQuery();
        expect(rows.first_name).toBe("Dumb");
    });
});