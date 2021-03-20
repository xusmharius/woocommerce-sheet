import mysqlConnection from '../database';

export const getOrdenes = (req, res) => {
    mysqlConnection.query("SELECT `order_id`, `date_created`, `num_items_sold`, `total_sales`,`status` FROM `wp_wc_order_stats` WHERE (`status` LIKE 'wc-completed' OR 'wc-cancelled') AND `customer_id` = ? LIMIT 5", [2], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
}


// router.get('/orders', (req, res) => {
//     mysqlConnection.query("SELECT `order_id`, `date_created`, `num_items_sold`, `total_sales`,`status` FROM `wp_wc_order_stats` WHERE (`status` LIKE 'wc-completed' OR 'wc-cancelled') AND `customer_id` = ? LIMIT 5", [2], (err, rows, fields) => {
//         if (!err) {
//             res.json(rows);
//         } else {
//             console.log(err);
//         }
//     })
// })