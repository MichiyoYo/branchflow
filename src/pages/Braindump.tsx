import { motion } from 'framer-motion';
import VoiceRecorder from '@/features/voice/VoiceRecorder';
import { Page } from '@/components/layout';

export const BrainDump = () => {
  return (
    <Page pageTitle='Brain Dump'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Introduction Section */}
        <div className='text-center mb-12'>
          <h2 className='text-2xl font-semibold text-slate-800 mb-3'>
            Transform Your Ideas Into Tasks
          </h2>
          <p className='text-slate-600 max-w-2xl mx-auto'>
            Speak your thoughts, and let AI help you break them down into
            actionable tasks. Perfect for planning new projects or organizing
            your ideas.
          </p>
        </div>

        {/* Voice Recorder Section */}
        <div className='space-y-8'>
          <VoiceRecorder />
        </div>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='mt-16 bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-purple-100'
      >
        <h3 className='text-lg font-semibold text-slate-800 mb-4'>
          Tips for better results:
        </h3>
        <ul className='space-y-2 text-slate-600'>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
            Speak clearly and provide context about your project
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
            Mention any specific technologies or requirements
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
            Include any time constraints or priorities
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
            Consider dependencies between different parts of your project
          </li>
        </ul>
      </motion.div>
    </Page>
  );
};
