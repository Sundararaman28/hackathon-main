import { Club, Code, Layers2, Lightbulb, ShieldAlert, TableOfContents, Trophy, Users,Server,MessageCircle,DollarSign,ClipboardList,Briefcase,GitMerge,Wallet,FileText,Image,MessageSquare,Target,Mail,Bot,Monitor,Mic  } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <ShieldAlert className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Log Anomaly Detector",
      description: [
        "Use AI to analyze logs from services (e.g., ClickHouse, Redis, Kafka).",
        "Detect anomalies or potential failures before they happen.",
        "Enhancing log observability with AI-driven intelligence."
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Driven Query Optimizer",
      description: [
        "Use machine learning to analyze MySQL EXPLAIN plans.",
        "Automatically suggest query optimizations.",
        "Improve database efficiency with AI-powered insights."
      ]
    },
    {
      icon: <Code className="h-10 w-10 text-hackathon-accent" />,
      title: "Smart Alert Noise Reduction",
      description: [
        "AI model that clusters similar alerts.",
        "Filters out unnecessary notifications in monitoring dashboards.",
        "Enhancing system reliability by reducing alert fatigue."
      ]
    },
    {
      icon: <Club className="h-10 w-10 text-hackathon-accent" />,
      title: "Auto-Scaling Predictor for Kubernetes",
      description: [
        "AI model that predicts when Kubernetes pods need scaling.",
        "Uses historical metrics for intelligent scaling decisions.",
        "Ensuring optimal resource utilization with AI."
      ]
    },
    {
      icon: <TableOfContents className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Based Vulnerability Scanner",
      description: [
        "Detect security vulnerabilities in container images.",
        "Analyze Kubernetes configurations for security flaws.",
        "AI-driven security monitoring for cloud environments."
      ]
    },
    {
      icon: <Layers2 className="h-10 w-10 text-hackathon-accent" />,
      title: "Threat Intelligence Bot for MS Teams",
      description: [
        "AI assistant that monitors security logs.",
        "Sends alerts to MS Teams with remediation steps.",
        "Improving security awareness with real-time AI insights."
      ]
    },
    {
      icon: <Server className="h-10 w-10 text-hackathon-accent" />,
      title: "Self-Healing Load Balancer",
      description: [
        "AI system that detects traffic bottlenecks.",
        "Automatically adjusts HAProxy or Nginx configurations.",
        "Optimizing load balancing with AI-powered automation."
      ]
    },
    {
      icon: <GitMerge className="h-10 w-10 text-hackathon-accent" />,
      title: "GitHub PR Review AI",
      description: [
        "AI-powered bot that reviews pull requests.",
        "Suggests improvements and detects vulnerabilities.",
        "Streamlining code review with intelligent automation."
      ]
    },
    {
      icon: <Wallet className="h-10 w-10 text-hackathon-accent" />,
      title: "Expense Categorization AI",
      description: [
        "AI-powered system to automatically categorize expenses.",
        "Analyzes transaction history for smarter spending insights.",
        "Improving financial tracking with machine learning."
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-hackathon-accent" />,
      title: "Smart Invoice Fraud Detector",
      description: [
        "AI model that flags suspicious invoices.",
        "Detects duplicate payments in company records.",
        "Preventing financial fraud with AI-driven analysis."
      ]
    },
    {
      icon: <Image className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Meme Generator",
      description: [
        "AI model that generates memes based on trending topics.",
        "Enhances engagement with AI-driven humor.",
        "Bringing creativity and fun to content creation."
      ]
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Chatbot for Hackathons",
      description: [
        "AI bot that answers hackathon-related questions.",
        "Suggests projects and helps teams find members.",
        "Enhancing collaboration with AI-driven support."
      ]
    },
    {
      icon: <Target className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Lead Scoring",
      description: [
        "Analyze customer interactions and rank leads.",
        "Uses AI to predict conversion probability.",
        "Optimizing sales processes with data-driven insights."
      ]
    },
    {
      icon: <Mail className="h-10 w-10 text-hackathon-accent" />,
      title: "Automated Personalized Email Campaigns",
      description: [
        "AI that generates personalized email content.",
        "Uses behavior data to tailor outreach strategies.",
        "Improving email engagement with intelligent automation."
      ]
    },
    {
      icon: <Bot className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Sales Chatbot",
      description: [
        "Chatbot that understands customer queries.",
        "Suggests relevant products or services.",
        "Enhancing customer engagement with AI-driven conversations."
      ]
    },
    {
      icon: <Monitor className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Sentiment Analysis for Brand Monitoring",
      description: [
        "Monitor online mentions and reviews.",
        "Analyze customer sentiment using AI models.",
        "Providing actionable insights for brand strategy."
      ]
    },
    {
      icon: <Briefcase className="h-10 w-10 text-hackathon-accent" />,
      title: "Resume Analyzer & Job Match AI",
      description: [
        "AI tool that scans resumes and recommends jobs.",
        "Matches skills and experience with job opportunities.",
        "Helping job seekers find the right career fit."
      ]
    },
    {
      icon: <Mic className="h-10 w-10 text-hackathon-accent" />,
      title: "AI-Powered Interview Coach",
      description: [
        "Virtual AI coach that conducts mock interviews.",
        "Provides feedback on answers, tone, and confidence.",
        "Helping candidates improve their interview skills."
      ]
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-hackathon-accent" />,
      title: "Automated Financial Report Generator",
      description: [
        "AI that generates financial summaries and reports.",
        "Creates balance sheets and profit & loss statements.",
        "Automating financial analysis with AI insights."
      ]
    },
    {
      icon: <DollarSign className="h-10 w-10 text-hackathon-accent" />,
      title: "Expense Prediction & Budgeting AI",
      description: [
        "AI tool that predicts future expenses.",
        "Uses past transactions to suggest budgeting strategies.",
        "Helping users manage finances efficiently."
      ]
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-hackathon-accent" />,
      title: "Automated Tax Deduction Finder",
      description: [
        "AI that scans receipts to identify tax deductions.",
        "Helps users maximize tax savings.",
        "Simplifying tax filing with intelligent automation."
      ]
    }
  ];

  return (
    <section id="about" className="section">
      <div className="flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-hackathon-light/10 px-4 py-1 mb-6">
            <p className="text-hackathon-medium font-medium text-sm">About The Event</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Welcome to Our Hackathon
          </h2>
          
          <p className="text-muted-foreground  text-lg">
            Our hackathon brings together brilliant minds to collaborate, innovate, and create solutions 
            that address real-world challenges. Over the course of one week, participants will form teams, 
            develop prototypes, and present their ideas to a panel of industry experts.
          </p>
          <p className="text-muted-foreground text-lg pt-4">
          Atatus is a next-generation observability platform designed to empower modern software teams with real-time, full-stack monitoring. Our solution seamlessly integrates application performance monitoring (APM), infrastructure monitoring, and user experience monitoring into one intuitive interface—making it easier than ever to detect, diagnose, and resolve issues before they impact your users.
+
          </p>
          
          <div className="mt-6">
            <a 
              href="https://www.atatus.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-hackathon-accent hover:text-hackathon-medium transition-colors"
            >
              <span className="font-medium">Visit our company website</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold lg:mb-[-20]  text-gradient text-center">
        Problem Statements
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className='flex  items-center justify-left gap-x-3'>
              <div className="mb-4 p-3 bg-hackathon-light/10 w-fit rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-hackathon-dark">
                {feature.title}
              </h3>
              </div>
             
              <ul className="text-muted-foreground">
  {feature.description.map((p, index) => (
    <li key={index} className='list-disc ml-4'>{p}</li>
  ))}
</ul>

            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Why Participate?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Network with Industry Professionals</span> - Connect with mentors and sponsors who can help advance your career.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Learn New Skills</span> - Participate in workshops and collaborate with peers to expand your knowledge.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Win Prizes</span> - Compete for cash prizes, tech gadgets, and potential internship opportunities.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-hackathon-light/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-hackathon-accent"></div>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Build Your Portfolio</span> - Create impressive projects to showcase to future employers.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <div className="glass-card p-6 z-10 relative">
                <div className="aspect-video bg-hackathon-dark/5 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Hackathon participants collaborating"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-hackathon-dark">Previous Hackathon</h4>
                    <p className="text-sm text-muted-foreground">Participants collaborating on projects</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-hackathon-light/20"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 -bottom-3 -left-3 bg-gradient-to-r from-hackathon-medium to-hackathon-accent rounded-2xl blur-xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
