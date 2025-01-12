import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { GitBranch, Mic, Calendar, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='w-full px-8 py-16'>
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className='text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          BranchFlow.dev
        </motion.h1>
        <motion.p
          className='text-2xl text-slate-600 mb-8 max-w-3xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your thoughts into structured development tasks with AI ✨
        </motion.p>
        <motion.div
          className='flex justify-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size='lg'
            className='bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105'
          >
            Get Started
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 transition-all hover:scale-105'
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className='grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto px-4'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {[
          {
            icon: <Mic className='h-6 w-6 text-purple-500' />,
            title: 'Voice-to-Task',
            description: 'Convert your ideas into structured tasks instantly',
          },
          {
            icon: <Brain className='h-6 w-6 text-indigo-500' />,
            title: 'AI-Powered Planning',
            description: 'Smart task breakdown and time estimation',
          },
          {
            icon: <GitBranch className='h-6 w-6 text-purple-500' />,
            title: 'Developer-Focused',
            description: 'Optimized for software development workflows',
          },
          {
            icon: <Calendar className='h-6 w-6 text-indigo-500' />,
            title: 'Calendar Sync',
            description: 'Seamless integration with your existing calendars',
          },
        ].map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className='bg-white/70 border-purple-100 hover:shadow-lg hover:shadow-purple-100 transition-all backdrop-blur-sm group hover:-translate-y-1 duration-300'>
              <CardHeader>
                <div className='flex justify-center items-center gap-2'>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className='text-slate-800'>
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className='text-slate-600'>
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated gradient orbs */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <motion.div
          className='absolute top-0 -right-40 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl'
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl'
          animate={{
            x: [0, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
