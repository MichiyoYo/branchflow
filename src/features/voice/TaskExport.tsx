import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Clipboard, Save, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Task } from '@/types';
import { copyToClipboard, exportToJson, saveToLocalStorage } from '../utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface TaskExportProps {
  tasks: Task[];
}

export const TaskExport: React.FC<TaskExportProps> = ({ tasks }) => {
  const [error, setError] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className='bg-white/70 backdrop-blur-sm border-purple-100'>
        <CardHeader>
          <CardTitle className='text-lg font-semibold text-slate-800'>
            Save or Export Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Button
              onClick={() => saveToLocalStorage(tasks, setError)}
              className='flex items-center gap-2 bg-purple-500 hover:bg-purple-600'
            >
              <Save className='h-4 w-4' />
              Save for Later
            </Button>
            <Button
              onClick={() => exportToJson(tasks)}
              className='flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600'
            >
              <Download className='h-4 w-4' />
              Export JSON
            </Button>
            <Button
              onClick={() => copyToClipboard(tasks)}
              className='flex items-center gap-2 bg-slate-500 hover:bg-slate-600'
            >
              <Clipboard className='h-4 w-4' />
              Copy as Markdown
            </Button>
          </div>
        </CardContent>
      </Card>
      {error && (
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </motion.div>
  );
};
