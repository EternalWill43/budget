import mysql from "mysql2";

const connection = mysql.createPool({uri: process.env.DATABASE_URL});

export const initQuery = async () => {
    let [rows] = await connection
        .promise()
        .query(`select * from users limit 1;`);
    return rows;
};

initQuery();