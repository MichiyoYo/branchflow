import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import TaskBreakdown from './TaskBreakdown';

const VoiceRecorder = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const toggleRecording = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
      resetTranscript();
    }
  };

  return (
    <div className='w-full max-w-3xl mx-auto p-8'>
      <Card className='bg-white/70 backdrop-blur-sm'>
        <CardContent className='p-6'>
          <div className='flex flex-col items-center space-y-6'>
            {/* Recording Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='icon'
                onClick={toggleRecording}
                className={`rounded-full p-8 ${
                  listening
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'
                }`}
              >
                <AnimatePresence mode='wait'>
                  {listening ? (
                    <motion.div
                      key='recording'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <MicOff className='w-8 h-8' />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='not-recording'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Mic className='w-8 h-8' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Recording Status */}
            <div className='text-center'>
              {listening ? (
                <div className='flex items-center space-x-2 text-red-500'>
                  <Loader2 className='w-4 h-4 animate-spin' />
                  <span>Recording...</span>
                </div>
              ) : (
                <span className='text-slate-500'>Click to start recording</span>
              )}
            </div>

            {/* Transcript Display */}
            <div className='w-full'>
              <div
                className={`w-full min-h-[200px] p-4 rounded-lg border ${
                  transcript ? 'border-purple-200' : 'border-slate-200'
                }`}
              >
                {transcript || 'Your recorded text will appear here...'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='w-full flex justify-center'>
        <TaskBreakdown transcript={transcript} />
      </div>
    </div>
  );
};

export default VoiceRecorder;
