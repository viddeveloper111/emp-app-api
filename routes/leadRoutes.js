const express = require("express");
const {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

router.post("/createLead", createLead);
router.get("/getLeads/:status", getLeads);
router.get("/getLeadById/:id", getLeadById);
router.put("/updateLead/:id", updateLead);
router.delete("/deleteLead/:id", deleteLead);

module.exports = router;
