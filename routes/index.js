const express = require("express")
const Users = require("../models/Users")
const Logs = require("../models/Logs")
const routes = express.Router()

routes.get("/users", async (req, res) => {

    const users_data = await Users.aggregate([
        {
          '$project': {
            '_id': 0, 
            'name': 1, 
            'avatar': 1, 
            'id': 1, 
            'occupation': 1
          }
        }, {
          '$lookup': {
            'from': 'logs', 
            'localField': 'id', 
            'foreignField': 'user_id', 
            'as': 'users_logs'
          }
        }
    ]);

    let res_arr = []
    let chart_data_revenue = []
    //let chart_data_timestamp = []

    users_data.map((user)=>{  

        let conversion_count =0
        let impression_count =0

        let revenueTotal = user.users_logs.reduce(function(prev, cur) {
            if(cur.user_id == user.id){
                if(cur.type == 'conversion')  {
                    conversion_count++ 
                    // chart_data.push({
                    //     revenue:Math.round(cur.revenue),
                    //     timestamp:cur.timestamp
                    // })
                    chart_data_revenue.push(cur.revenue)
                    //chart_data_timestamp.push(cur.timestamp)
                    
                    
                }else if(cur.type == 'impression') {
                    impression_count++
                }
                return prev + cur.revenue
            }
        }, 0)

        res_arr.push({
            name: user.name,
            avatar: (user.avatar) ? user.avatar : user.name.charAt(0),
            id: user.id,
            occupation: user.occupation,
            revenue:revenueTotal.toFixed(2),
            conversion_count:conversion_count,
            impression_count:impression_count,
            chart_data_revenue: chart_data_revenue,
            //chart_data_timestamp:chart_data_timestamp
        })
    })
    res.send(res_arr)
    //chart_data = [];
})

module.exports = routes