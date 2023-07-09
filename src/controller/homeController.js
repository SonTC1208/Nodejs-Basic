import connection from "../configs/connecDB";


let getHomepage = (req, res) => {
    //logic
    let data = []
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            data = results.map((row) => { return row });
            console.log('>>>check data inside:', data);

            return res.render('index.ejs', { dataUser: data });

        }
    );
}

module.exports = {
    getHomepage
}