const Destination = require("../models/destination");

const createDestination = async (req, res) => {
  try {
    const { name, description, category, location, operatingHours, entryFee } =
      req.body;
    const attachments = req.fileUrls;

    const destination = new Destination({
      name,
      description,
      category,
      location,
      operatingHours,
      entryFee,
      attachments,
    });

    await destination.save();
    res
      .status(201)
      .json({ message: "Destination created successfully", destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;
    const { name, description, category, location, operatingHours, entryFee } =
      req.body;
    const attachments = req.fileUrls;

    const destination = await Destination.findByIdAndUpdate(
      destinationId,
      {
        name,
        description,
        category,
        location,
        operatingHours,
        entryFee,
        attachments,
      },
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

const getDestinationById = async (req, res) => {
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

const getAllDestinations = async (req, res) => {
  const search = req.query.search || "";

  try {
    const destinations = await Destination.find({
      name: { $regex: search, $options: "i" },
    });
    res.json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteDestination = async (req, res) => {
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

module.exports = {
  createDestination,
  updateDestination,
  getDestinationById,
  getAllDestinations,
  deleteDestination,
};
