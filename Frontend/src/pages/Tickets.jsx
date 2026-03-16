// import { useEffect, useState } from "react";
// import API from "../api";

// const Tickets = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(false);

//   /* Fetch Tickets */
//   const fetchTickets = async () => {
//     try {
//       const { data } = await API.get("/tickets");
//       setTickets(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   /* Submit Ticket */
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!title || !description) {
//     alert("Please fill all fields");
//     return;
//   }

//   try {
//     setLoading(true);

//     console.log("Sending request...");

//     const response = await API.post("/tickets", {
//       title,
//       description,
//     });

//     console.log("Response:", response);

//     if (response.status === 201) {
//       alert("✅ Ticket saved in database");

//       // 🔥 IMPORTANT — REFRESH FROM DATABASE
//       await fetchTickets();

//       setTitle("");
//       setDescription("");
//     }
//   } catch (error) {
//     console.error("Submit error:", error);
//     alert("❌ Error saving ticket");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         Support Tickets
//       </h1>

//       {/* Form Section */}
//       <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">
//           Post Your Query
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Issue Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//           />

//           <textarea
//             rows="4"
//             placeholder="Describe your issue..."
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//           />

//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             {loading ? "Submitting..." : "Submit Ticket"}
//           </button>
//         </form>
//       </div>

//       {/* Tickets Cards */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">
//           My Tickets
//         </h2>

//         {tickets.length === 0 ? (
//           <p className="text-gray-500">
//             No tickets submitted yet.
//           </p>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6">
//             {tickets.map((ticket) => (
//               <div
//                 key={ticket._id}
//                 className="bg-white rounded-xl shadow-md p-5 border"
//               >
//                 <div className="flex justify-between mb-2">
//                   <h3 className="font-semibold text-lg">
//                     {ticket.title}
//                   </h3>

//                   <span
//                     className={`text-xs px-3 py-1 rounded-full ${
//                       ticket.status === "Solved"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-yellow-100 text-yellow-700"
//                     }`}
//                   >
//                     {ticket.status}
//                   </span>
//                 </div>

//                 <p className="text-gray-600 text-sm mb-3">
//                   {ticket.description}
//                 </p>

//                 {ticket.status === "Solved" && (
//                   <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
//                     <p className="font-semibold text-green-700 text-sm">
//                       Solution:
//                     </p>
//                     <p className="text-sm text-green-800">
//                       {ticket.solution}
//                     </p>
//                   </div>
//                 )}

//                 <p className="text-xs text-gray-400 mt-3">
//                   {new Date(ticket.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tickets;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import API from "../api";

const Tickets = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Fetch Tickets */
  const fetchTickets = async () => {
    try {
      const { data } = await API.get("/tickets");
      setTickets(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  /* Submit Ticket */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/tickets", {
        title,
        description,
      });

      if (response.status === 201) {
        await fetchTickets();
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      alert("Error saving ticket");
    } finally {
      setLoading(false);
    }
  };

  /* Delete Ticket */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ticket?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/tickets/${id}`);
      fetchTickets();
    } catch (error) {
      alert("Error deleting ticket");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">

      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <button
  onClick={() => navigate("/home")}
  className="
    group flex items-center gap-3
    bg-gradient-to-r from-indigo-600 to-purple-600
    text-white px-5 py-2.5
    rounded-full
    shadow-md
    hover:shadow-xl
    hover:scale-105
    transition-all duration-300
  "
>
  <span className="bg-white/20 p-2 rounded-full group-hover:-translate-x-1 transition-transform duration-300">
    <FaArrowLeft className="text-sm" />
  </span>

  <span className="font-medium tracking-wide">
    Back
  </span>
</button>

        <h1 className="text-3xl font-bold text-gray-800">
          🎫 Support Center
        </h1>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-indigo-100">
        <h2 className="text-xl font-semibold mb-4 text-indigo-700">
          Submit Your Issue
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Issue Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Describe your issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition shadow-md"
          >
            {loading ? "Submitting..." : "Submit Ticket"}
          </button>
        </form>
      </div>

      {/* Tickets Section */}
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        My Tickets
      </h2>

      {tickets.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl shadow text-center text-gray-500">
          🚀 No tickets yet. Submit your first query above!
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition duration-300 relative"
            >
              {/* Delete Icon */}
              <button
                onClick={() => handleDelete(ticket._id)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition"
              >
                <FaTrash />
              </button>

              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-800">
                  {ticket.title}
                </h3>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    ticket.status === "Solved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {ticket.description}
              </p>

              {ticket.status === "Solved" && (
                <div className="bg-green-50 border border-green-200 p-3 rounded-xl">
                  <p className="font-semibold text-green-700 text-sm mb-1">
                    Solution:
                  </p>
                  <p className="text-sm text-green-800">
                    {ticket.solution}
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-400 mt-4">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tickets;