import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask } from "./features/todos/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Redux Toolkit Todo App</h1>
        <p style={styles.author}>Developer: KESHAV GOYAL</p>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."
            style={styles.input}
          />
          <button onClick={handleAdd} style={styles.addBtn}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <span
                onClick={() => dispatch(toggleTask(todo.id))}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(deleteTask(todo.id))}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
  minHeight: "100vh",
  width: "100vw",          
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
},
  container: {
    width: "100%",
    maxWidth: "800px",
    padding: "40px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
    color: "#333",
  },
  author: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "30px",
  },
  inputContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addBtn: {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    background: "#f4f4f4",
    padding: "12px",
    borderRadius: "10px",
  },
  deleteBtn: {
    background: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;