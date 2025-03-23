import dotenv from "dotenv";
dotenv.config();
import arcjet,{ tokenBucket,shield,detectBot} from "@arcjet/node"

import "dotenv/config";



export const aj= arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules:[
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            allow:["CATEGORY:SEARCH_ENGINE"]
        }),
        tokenBucket({
            mode:"LIVE",
            refillRate:30,
            interval:5,
            capacity:20,
        })
    ]

})