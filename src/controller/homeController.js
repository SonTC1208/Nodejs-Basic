import pool from "../configs/connecDB";


let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users')

    // console.log('>>> check rows', rows)
    return res.render('index.ejs', { dataUser: rows });

}

let getDetailPage = async (req, res) => {
    let userid = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userid]);

    return res.send(JSON.stringify(user))
}


module.exports = {
    getHomepage, getDetailPage
}