import { motion } from "framer-motion";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { 
  Users, 
  MessageSquare, 
  Heart, 
  TrendingUp, 
  MapPin, 
  Calendar,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Users",
      value: "12,847",
      change: "+18%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Health Consultations",
      value: "4,293",
      change: "+12%",
      icon: MessageSquare,
      color: "text-secondary"
    },
    {
      title: "Vaccinations Tracked",
      value: "8,456",
      change: "+25%",
      icon: Heart,
      color: "text-success"
    },
    {
      title: "Outbreak Alerts",
      value: "3",
      change: "-40%",
      icon: AlertTriangle,
      color: "text-warning"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "outbreak",
      message: "Dengue cases reported in Maharashtra district",
      location: "Maharashtra, India",
      time: "2 hours ago",
      severity: "high"
    },
    {
      id: 2,
      type: "vaccination",
      message: "Polio vaccination drive scheduled",
      location: "Uttar Pradesh, India",
      time: "4 hours ago",
      severity: "medium"
    },
    {
      id: 3,
      type: "health",
      message: "Air quality alert for respiratory patients",
      location: "Delhi, India",
      time: "6 hours ago",
      severity: "medium"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Health Dashboard
          </h1>
          <p className="text-white/80 text-lg">
            Real-time health analytics and community insights
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassmorphismCard className="text-center space-y-4 hover:scale-105 transition-bounce">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-white/70 text-sm">{stat.title}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    stat.change.startsWith('+') ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Health Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlassmorphismCard className="h-96">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Health Heatmap
                </h2>
              </div>
              <div className="h-64 bg-gradient-primary/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white/70">
                  <MapPin className="h-12 w-12 mx-auto mb-4 animate-pulse" />
                  <p>Interactive health data visualization</p>
                  <p className="text-sm">Real-time disease tracking across regions</p>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* Recent Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassmorphismCard className="h-96">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Recent Alerts
                </h2>
              </div>
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-smooth"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'high' ? 'bg-destructive' : 'bg-warning'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium">
                          {alert.message}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-white/60 text-xs flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {alert.location}
                          </span>
                          <span className="text-white/60 text-xs">{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* Vaccination Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <GlassmorphismCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Vaccination Progress
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Polio", progress: 85, total: 10000, completed: 8500 },
                { name: "Measles", progress: 72, total: 8000, completed: 5760 },
                { name: "COVID-19", progress: 90, total: 15000, completed: 13500 }
              ].map((vaccine) => (
                <div key={vaccine.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{vaccine.name}</span>
                    <span className="text-white/70 text-sm">{vaccine.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${vaccine.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/60">
                    <span>{vaccine.completed.toLocaleString()} completed</span>
                    <span>{vaccine.total.toLocaleString()} total</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;