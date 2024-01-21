const express=require("express")
const { admit, getStudent, total } = require("../controller/admit")


const router=express.Router()

router.post("/admit",admit)
router.get("/total",total)
router.get("/students",getStudent)

module.exports=router