import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { GitBranch, Mic, Calendar, Brain } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <div className='container ver mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-4'>BranchFlow.dev</h1>
          <p className='text-xl text-muted-foreground mb-8'>
            Transform your thoughts into structured development tasks
          </p>
          <div className='flex flex-wrap justify-center gap-2'>
            <Button size='lg'>Get Started</Button>
            <Button variant='outline' size='lg'>
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 gap-6 mt-12'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-center gap-2'>
                <Mic className='h-6 w-6' />
                <CardTitle>Voice-to-Task</CardTitle>
              </div>
              <CardDescription>
                Convert your spoken ideas into structured tasks instantly
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className='flex items-center justify-center gap-2'>
                <Brain className='h-6 w-6' />
                <CardTitle>AI-Powered Planning</CardTitle>
              </div>
              <CardDescription>
                Smart task breakdown and time estimation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className='flex items-center justify-center gap-2'>
                <GitBranch className='h-6 w-6' />
                <CardTitle>Developer-Focused</CardTitle>
              </div>
              <CardDescription>
                Optimized for software development workflows
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className='flex items-center justify-center gap-2'>
                <Calendar className='h-6 w-6' />
                <CardTitle>Calendar Sync</CardTitle>
              </div>
              <CardDescription>
                Seamless integration with your existing calendars
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
