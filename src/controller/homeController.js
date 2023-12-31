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

let createNewUser = async (req, res) => {
    console.log('check req: ', req.body)
    let { firstName, lastName, email, address } = req.body;

    await pool.execute('insert into users(firstName, lastName, email, address) value (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/')
}


module.exports = {
    getHomepage, getDetailPage, createNewUser
}