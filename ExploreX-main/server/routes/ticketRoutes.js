const express = require("express");
const router = express.Router();

const {
  createTicket,
  getTickets,
  solveTicket,
  deleteTicket,
} = require("../controllers/ticketController");

router.post("/", createTicket);
router.get("/", getTickets);
router.put("/:id", solveTicket);
router.delete("/:id", deleteTicket);
module.exports = router;