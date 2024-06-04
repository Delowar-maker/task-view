import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn REact such than I can treat it like my alave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "low",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, SetShowAddModal] = useState(false);

  // function handleAddTask() {
  //   console.log("add task");
  // }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => SetShowAddModal(true)} />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
