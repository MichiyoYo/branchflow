import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Clock, AlertCircle, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPriorityColor, saveToLocalStorage } from '../utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Task } from '@/types';
import { Link } from 'react-router-dom';
import { TaskExport } from './TaskExport';

interface TaskBreakdownProps {
  transcript: string;
  onTasksGenerated?: (tasks: Task[]) => void;
}

const TaskBreakdown: React.FC<TaskBreakdownProps> = ({
  transcript,
  onTasksGenerated,
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  const analyzeTasks = async () => {
    if (!transcript.trim()) {
      setError('Please record some text first');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    const prompt = `
      Analyze the following project description and break it down into specific tasks.
      Return only a JSON array of tasks with this exact structure, no other text:
      [{
        "title": "string",
        "description": "string",
        "estimatedTime": "string",
        "priority": "high|medium|low",
        "dependencies": ["string"]
      }]

      Project description: ${transcript}
    `;

    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.2',
          prompt: prompt,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to Ollama');
      }

      const data = await response.json();

      try {
        const parsedTasks = JSON.parse(data.response);
        setTasks(parsedTasks);
        saveToLocalStorage(parsedTasks, setError); // Save tasks when they're generated
        if (onTasksGenerated) {
          onTasksGenerated(parsedTasks);
        }
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        setError('Error parsing AI response. Please try again.');
      }
    } catch (err) {
      setError("Error connecting to Ollama. Make sure it's running locally.");
      console.error('Error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className=' flex-col gap-5 max-w-3xl flex justify-center items-center mx-auto mt-8'>
      <Button
        onClick={analyzeTasks}
        disabled={isAnalyzing || !transcript}
        className='w-fit  bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
      >
        {isAnalyzing ? (
          <div className='flex items-center'>
            <Loader2 className='w-4 h-4 mr-2 animate-spin' />
            Analyzing...
          </div>
        ) : (
          'Analyze Recording ✨'
        )}
      </Button>

      {error && (
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <AnimatePresence>
        {tasks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='mt-8 space-y-4'
          >
            {tasks.map((task, index) => (
              <Card key={index} className='bg-white/70 backdrop-blur-sm'>
                <CardHeader className='pb-2'>
                  <div className='flex items-center justify-between'>
                    <CardTitle className='text-lg font-semibold'>
                      {task.title}
                    </CardTitle>
                    <span
                      className={`text-xs font-medium ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      {task.priority.toUpperCase()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-slate-600 mb-4'>{task.description}</p>
                  <div className='flex items-center text-sm text-slate-500'>
                    <Clock className='w-4 h-4 mr-1' />
                    {task.estimatedTime}
                  </div>
                  {task.dependencies && task.dependencies.length > 0 && (
                    <div className='mt-2 text-sm text-slate-500'>
                      <div className='font-medium mb-1'>Dependencies:</div>
                      <ul className='list-disc list-inside'>
                        {task.dependencies.map((dep, i) => (
                          <li key={i}>{dep}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            <div className='space-y-4 mt-8'>
              <TaskExport tasks={tasks} />

              <Link to='/board'>
                <Button className='w-full bg-slate-800 hover:bg-slate-900 text-white mt-4'>
                  <LayoutGrid className='w-4 h-4 mr-2' />
                  View Tasks in Kanban Board
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TaskBreakdown;
