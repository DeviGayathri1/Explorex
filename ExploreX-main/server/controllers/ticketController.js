const mongoose = require("mongoose");
const Ticket = require("../models/Ticket");
// Create Ticket
const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
    });
    //console.log("Saved Ticket ID:", ticket._id);//

    res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ticket creation failed" });
  }
};

// Get Tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Fetching failed" });
  }
};

// Solve Ticket
const solveTicket = async (req, res) => {
  try {
    const { solution } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        status: "Solved",
        solution,
      },
      { new: true }
    );

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    await ticket.deleteOne();

    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createTicket,
  getTickets,
  solveTicket,
  deleteTicket,
};