const express=require("express")
const { attend, getToday } = require("../controller/attendace")



const router=express.Router()

router.post("/attendance",attend)
router.get("/attendance",getToday)

module.exports=router