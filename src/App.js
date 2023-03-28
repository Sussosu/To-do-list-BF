import React, { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
const Apptitle = "To-Do-App";

const list = [
  { id: 1, title : "test #1", completed: false },
  { id: 2, title : "test #2" },
  { id: 3, title : "test #3" }
  ];

const App = () => {
  const [todoList, setTodoList] = useState(list);
  
  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };

  const removeTodo = (id) => {
    setTodoList((oldlist) => oldlist.filter((item) => item.id !== id));
  };

  
  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{Apptitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  );
};

export default App;