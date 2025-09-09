const Lead = require("../models/Lead");

// Create a new Lead
exports.createLead = async (req, res) => {
  try {
    const { title, description, image,status } = req.body;
    const lead = await Lead.create({ title, description, image,status });
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Get all Leads
exports.getLeads = async (req, res) => {
  try {
    const status = req.params.status;
    const leads = await Lead.find(status !== 'all' ? { status } : {});
    res.json(leads);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Get Lead by ID
exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ msg: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Update Lead
exports.updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!lead) return res.status(404).json({ msg: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Delete Lead
exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ msg: "Lead not found" });
    res.json({ msg: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
