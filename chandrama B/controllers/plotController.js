const Plot = require("../models/Plot");

// CREATE
exports.createPlot = async (req, res) => {
  try {
    const {
      name,
      address,
      squareFeet,
      location,
      price,
      facing,
      boundary,
      description,
    } = req.body;

    // Cloudinary gives secure URLs in req.files[].path
    const images = (req.files || []).map((f) => f.path);

    const plot = await Plot.create({
      name,
      address,
      squareFeet: squareFeet ? Number(squareFeet) : undefined,
      location,
      price: price ? Number(price) : undefined,
      facing,
      boundary,
      description,
      images,
    });

    res.json({ plot });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE
exports.updatePlot = async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };

    // If new images uploaded, add their Cloudinary URLs
    if (req.files && req.files.length) {
      const newImages = req.files.map((f) => f.path);
      const plot = await Plot.findById(id);
      update.images = (plot.images || []).concat(newImages);
    }

    const updated = await Plot.findByIdAndUpdate(id, update, { new: true });
    res.json({ plot: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deletePlot = async (req, res) => {
  try {
    const { id } = req.params;
    await Plot.findByIdAndDelete(id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.adminGetAll = async (req, res) => {
  try {
    const plots = await Plot.find().sort({ createdAt: -1 });
    res.json({ plots });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllPublic = async (req, res) => {
  try {
    const plots = await Plot.find().sort({ createdAt: -1 });
    const list = plots.map((p) => ({
      id: p._id,
      name: p.name,
      price: p.price,
      location: p.location,
      image: p.images && p.images.length ? p.images[0] : null,
      squareFeet: p.squareFeet,
      facing: p.facing,
      boundary: p.boundary,
      description: p.description,
      address: p.address,
    }));
    res.json({ plots: list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getDetails = async (req, res) => {
  try {
    const plot = await Plot.findById(req.params.id);
    if (!plot) {
      return res.status(404).json({ message: "Plot not found" });
    }

    res.json({
      message: "Protected plot details",
      user: req.user,
      plot, // 👈 return the actual plot details
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
