const express = require("express");
const {
  createOrganization,
  getOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
} = require("../controllers/organizationController");

const router = express.Router();

router.post("/createOrganization", createOrganization);
router.get("/getOrganizations", getOrganizations);
router.get("/getOrganizationById/:id", getOrganizationById);
router.put("/updateOrganization/:id", updateOrganization);
router.delete("/deleteOrganization/:id", deleteOrganization);

module.exports = router;
