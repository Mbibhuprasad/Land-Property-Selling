const Plot = require("../models/Plot");

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
      amenities,
    } = req.body;

    let amenitiesArr = [];
    if (amenities) {
      try {
        amenitiesArr = JSON.parse(amenities);
      } catch {
        amenitiesArr = ("" + amenities).split(",").map((s) => s.trim());
      }
    }

    const images = (req.files || []).map(
      (f) =>
        `${process.env.BASE_URL || "http://localhost:5000"}/uploads/${
          f.filename
        }`
    );

    const plot = await Plot.create({
      name,
      address,
      squareFeet: squareFeet ? Number(squareFeet) : undefined,
      location,
      price: price ? Number(price) : undefined,
      facing,
      boundary,
      description,
      amenities: amenitiesArr,
      images,
    });

    res.json({ plot });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updatePlot = async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };

    if (update.amenities) {
      try {
        update.amenities = JSON.parse(update.amenities);
      } catch {
        update.amenities = ("" + update.amenities)
          .split(",")
          .map((s) => s.trim());
      }
    }

    if (req.files && req.files.length) {
      const newImages = req.files.map(
        (f) =>
          `${process.env.BASE_URL || "http://localhost:5000"}/uploads/${
            f.filename
          }`
      );
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
      amenities: p.amenities,
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
    const { id } = req.params;
    const plot = await Plot.findById(id);
    if (!plot) return res.status(404).json({ message: "Not found" });
    res.json({ plot });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
