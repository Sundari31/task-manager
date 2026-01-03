// import { useEffect, useState } from "react";
// import API from "../services/api";
// import Navbar from "../components/Navbar";

// const Dashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [search, setSearch] = useState("");

//   const fetchTasks = async () => {
//     const res = await API.get("/tasks");
//     setTasks(res.data);
//   };

//   const addTask = async (e) => {
//     e.preventDefault();
//     if (!title) return;
//     await API.post("/tasks", { title });
//     setTitle("");
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await API.delete(`/tasks/${id}`);
//     fetchTasks();
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className="bg-gray-100 min-h-screen p-6">
//         <div className="max-w-2xl mx-auto">

//           {/* Profile Card */}
//           <div className="bg-white p-4 rounded shadow mb-6">
//             <h2 className="font-semibold text-lg mb-1">
//               Welcome, {user?.name} 👋
//             </h2>
//             {/* <p className="text-sm text-gray-500">
//               {user?.email}
//             </p> */}
//           </div>

//           {/* Task Card */}
//           <div className="bg-white p-4 rounded shadow">
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               className="border p-2 w-full mb-3 rounded"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//             <form onSubmit={addTask} className="flex gap-2 mb-4">
//               <input
//                 className="border p-2 flex-1 rounded"
//                 placeholder="Add a new task"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//               <button className="bg-blue-600 text-white px-4 rounded">
//                 Add
//               </button>
//             </form>

//             <ul>
//               {tasks
//                 .filter((t) =>
//                   t.title.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((task) => (
//                   <li
//                     key={task._id}
//                     className="flex justify-between items-center border-b py-2"
//                   >
//                     <span>{task.title}</span>
//                     <button
//                       onClick={() => deleteTask(task._id)}
//                       className="text-red-500 text-sm"
//                     >
//                       Delete
//                     </button>
//                   </li>
//                 ))}
//             </ul>

//             {tasks.length === 0 && (
//               <p className="text-center text-gray-400 mt-4">
//                 No tasks yet
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;



import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* ===== Profile Card ===== */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome back, {user?.name} 👋
              </h2>
              {/* <p className="text-sm text-gray-500">{user?.email}</p> */}
            </div>

            <div className="mt-4 sm:mt-0 text-sm text-gray-600">
              <span className="font-medium">{tasks.length}</span> total tasks
            </div>
          </div>

          {/* ===== Task Manager Card ===== */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Your Tasks
              </h3>

              <input
                type="text"
                placeholder="Search tasks..."
                className="mt-3 sm:mt-0 border rounded-lg px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Add Task */}
            <form
              onSubmit={addTask}
              className="flex gap-2 mb-6"
            >
              <input
                type="text"
                placeholder="Add a new task..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Add
              </button>
            </form>

            {/* Task List */}
            <ul className="divide-y">
              {filteredTasks.map((task) => (
                <li
                  key={task._id}
                  className="flex items-center justify-between py-3 group"
                >
                  <span className="text-gray-700 group-hover:text-gray-900 transition">
                    {task.title}
                  </span>

                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-xs text-red-500 opacity-0 group-hover:opacity-100 transition hover:underline"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            {/* Empty State */}
            {filteredTasks.length === 0 && (
              <div className="text-center py-10 text-gray-400 text-sm">
                No tasks found. Add your first task ✨
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
