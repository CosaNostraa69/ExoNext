'use client'

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';

export default function Todo() {
 
  const data = [
    "Faire les courses",
    "Répondre aux e-mails",
    "Terminer le rapport",
    "Prendre rendez-vous",
    "Préparer le dîner",
    "Regarder un film"
  ];
  const [tasks, setTasks] = useState(data);
  const [taskInput, setTaskInput] = useState('');
  const [loading, setLoading] = useState(true)
  const inputRef = useRef();

  useEffect(() => {
    
    const localStoredData = localStorage.getItem('myTasks')

    if(localStoredData) {
      setTasks(JSON.parse(localStoredData))
    }else{
      setTasks(data)
    }

    setLoading(false)
  },[])

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = () => {
   const freshTasks = [inputRef.current.value, ...tasks];
      setTasks(freshTasks);
    
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
   <>
      {!loading && (
         <div className={styles.wrapper}>
         <div className={styles.card}>
           <h1 className={styles.title}>Liste des tâches</h1>
           <ul className={styles.taskList}>
             {tasks.map((task, index) => (
               <li
                 key={index}
                 className={styles.task}
                 onClick={() => handleDeleteTask(index)}
               >
                 {task}
               </li>
             ))}
           </ul>
           <div className="flex justify-between">
             <input
               ref={inputRef}
               className={styles.input}
               type="text"
               placeholder="Ajoute la Famax..."
             />
             <button
               className={styles.addButton}
               onClick={handleAddTask}
             >
               Ajoutez
             </button>
           </div>
         </div>
       </div>
      )}  
   </>
  );
}
