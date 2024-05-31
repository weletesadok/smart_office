const Destination = require("../models/destination");

exports.createDestination = async (req, res) => {
  try {
    const { name, region, city, district, woreda, kebele, description, attachments, bestTimeToVisit, tourismCategories } = req.body;

    const destination = new Destination({
      name,
      region,
      city,
      district,
      woreda,
      kebele,
      description,
      attachments,
      bestTimeToVisit,
      tourismCategories,
    });

    await destination.save();

    res.status(201).json({ message: "Destination created successfully", destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;
    const { name, region, city, district, woreda, kebele, description, attachments, bestTimeToVisit, tourismCategories } = req.body;

    const destination = await Destination.findByIdAndUpdate(
      destinationId,
      { name, region, city, district, woreda, kebele, description, attachments, bestTimeToVisit, tourismCategories },
      { new: true }
    );

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json({ message: "Destination updated successfully", destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getDestinationById = async (req, res) => {
  try {
    const { destinationId } = req.params;

    const destination = await Destination.findById(destinationId);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(destination);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;

    const destination = await Destination.findByIdAndDelete(destinationId);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json({ message: "Destination deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
