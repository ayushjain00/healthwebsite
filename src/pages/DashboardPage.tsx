import React, { useState, useEffect } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import { Eye, Download, DollarSign, FileText, TrendingUp, ListFilter } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import ChartCard from '../components/dashboard/ChartCard';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { ResearcherStats, CompanyStats } from '../types';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler);

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [researcherStats, setResearcherStats] = useState<ResearcherStats | null>(null);
  const [companyStats, setCompanyStats] = useState<CompanyStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (user?.role === 'researcher') {
        // Mock researcher stats
        setResearcherStats({
          totalUploads: 12,
          totalViews: 1250,
          totalDownloads: 345,
          totalEarnings: 1280,
          recentViews: [
            { date: 'Jan', count: 120 },
            { date: 'Feb', count: 150 },
            { date: 'Mar', count: 200 },
            { date: 'Apr', count: 180 },
            { date: 'May', count: 220 },
            { date: 'Jun', count: 250 },
            { date: 'Jul', count: 300 },
          ],
          recentEarnings: [
            { date: 'Jan', amount: 100 },
            { date: 'Feb', amount: 120 },
            { date: 'Mar', amount: 150 },
            { date: 'Apr', amount: 180 },
            { date: 'May', amount: 210 },
            { date: 'Jun', amount: 240 },
            { date: 'Jul', amount: 280 },
          ],
        });
      } else if (user?.role === 'company') {
        // Mock company stats
        setCompanyStats({
          subscribed: 26,
          accessed: 145,
          favorites: 48,
          recommendedTopics: [
            'Hormonal Therapy',
            'Pregnancy Complications',
            'Autoimmune Disorders in Women',
            'Cardiovascular Health',
            'Endometriosis Research',
          ],
          recentActivity: [
            { date: '2023-07-15', type: 'download', paper: 'Molecular Basis of Endometriosis' },
            { date: '2023-07-14', type: 'view', paper: 'Cardiovascular Risk Assessment in Women' },
            { date: '2023-07-12', type: 'favorite', paper: 'Hormone Replacement Therapy and Cancer Risk' },
            { date: '2023-07-10', type: 'download', paper: 'Autoimmune Disorders and Pregnancy' },
            { date: '2023-07-08', type: 'view', paper: 'Personalized Medicine Approaches for Women' },
          ],
        });
      }

      setLoading(false);
    };

    if (user) {
      fetchStats();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center p-8">
          <h2 className="text-2xl font-heading font-bold mb-4">Login Required</h2>
          <p className="text-gray-300 mb-6">
            Please login to access your dashboard.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-10 bg-background-lighter rounded-lg w-1/4"></div>
            <div className="h-6 bg-background-lighter rounded-lg w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-32 bg-background-lighter rounded-lg"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="h-80 bg-background-lighter rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render researcher dashboard
  if (user.role === 'researcher' && researcherStats) {
    const viewsData = {
      labels: researcherStats.recentViews.map(item => item.date),
      datasets: [
        {
          label: 'Views',
          data: researcherStats.recentViews.map(item => item.count),
          borderColor: '#0ff0fc',
          backgroundColor: 'rgba(15, 240, 252, 0.1)',
          tension: 0.3,
          fill: true,
        },
      ],
    };

    const earningsData = {
      labels: researcherStats.recentEarnings.map(item => item.date),
      datasets: [
        {
          label: 'Earnings ($)',
          data: researcherStats.recentEarnings.map(item => item.amount),
          borderColor: '#ff00ff',
          backgroundColor: 'rgba(255, 0, 255, 0.1)',
          tension: 0.3,
          fill: true,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        },
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        },
      },
    };

    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-gray-400">
              Here's an overview of your research performance and earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Uploads"
              value={researcherStats.totalUploads}
              icon={<FileText size={24} />}
              variant="primary"
            />
            <StatsCard
              title="Total Views"
              value={researcherStats.totalViews}
              change={{ value: 12, isPositive: true }}
              icon={<Eye size={24} />}
              variant="accent"
            />
            <StatsCard
              title="Total Downloads"
              value={researcherStats.totalDownloads}
              change={{ value: 8, isPositive: true }}
              icon={<Download size={24} />}
              variant="secondary"
            />
            <StatsCard
              title="Total Earnings"
              value={`$${researcherStats.totalEarnings}`}
              change={{ value: 15, isPositive: true }}
              icon={<DollarSign size={24} />}
              variant="success"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard
              title="Views Over Time"
              subtitle="Last 7 months"
            >
              <div className="h-64">
                <Line data={viewsData} options={chartOptions} />
              </div>
            </ChartCard>

            <ChartCard
              title="Earnings Over Time"
              subtitle="Last 7 months"
            >
              <div className="h-64">
                <Line data={earningsData} options={chartOptions} />
              </div>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <h3 className="text-lg font-medium text-white mb-4">
                  Recently Uploaded Research
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background-lighter rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Hormonal Fluctuations and Cognitive Performance
                      </h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-4">Uploaded 3 days ago</span>
                        <span className="flex items-center mr-4">
                          <Eye size={14} className="mr-1" /> 128
                        </span>
                        <span className="flex items-center">
                          <Download size={14} className="mr-1" /> 42
                        </span>
                      </div>
                    </div>
                    <Badge variant="success">Trending</Badge>
                  </div>
                  
                  <div className="p-4 bg-background-lighter rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Pregnancy Complications in Women with Autoimmune Disorders
                      </h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-4">Uploaded 1 week ago</span>
                        <span className="flex items-center mr-4">
                          <Eye size={14} className="mr-1" /> 96
                        </span>
                        <span className="flex items-center">
                          <Download size={14} className="mr-1" /> 23
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                  
                  <div className="p-4 bg-background-lighter rounded-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        Estrogen's Effect on Neural Plasticity
                      </h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-4">Uploaded 2 weeks ago</span>
                        <span className="flex items-center mr-4">
                          <Eye size={14} className="mr-1" /> 76
                        </span>
                        <span className="flex items-center">
                          <Download size={14} className="mr-1" /> 18
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card>
                <h3 className="text-lg font-medium text-white mb-4">
                  Research Impact
                </h3>
                <div className="h-56 flex items-center justify-center">
                  <Doughnut 
                    data={{
                      labels: ['Premium Downloads', 'Free Downloads', 'Academic Citations', 'Industry Citations'],
                      datasets: [
                        {
                          data: [42, 58, 25, 15],
                          backgroundColor: ['#ff00ff', '#0ff0fc', '#00ffff', '#10b981'],
                          borderWidth: 0,
                        },
                      ],
                    }} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            padding: 10,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render company dashboard
  if (user.role === 'company' && companyStats) {
    const topicData = {
      labels: [
        'Women\'s Health',
        'Mental Health',
        'Cardiovascular',
        'Reproductive Health',
        'Autoimmune',
        'Other'
      ],
      datasets: [
        {
          data: [35, 25, 15, 12, 8, 5],
          backgroundColor: [
            '#ff00ff',
            '#0ff0fc',
            '#00ffff',
            '#10b981',
            '#f59e0b',
            '#6b7280'
          ],
          borderWidth: 0,
        },
      ],
    };

    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-gray-400">
              Here's an overview of your premium research access and recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Premium Subscriptions"
              value={companyStats.subscribed}
              icon={<FileText size={24} />}
              variant="secondary"
            />
            <StatsCard
              title="Papers Accessed"
              value={companyStats.accessed}
              change={{ value: 23, isPositive: true }}
              icon={<Eye size={24} />}
              variant="primary"
            />
            <StatsCard
              title="Favorited Papers"
              value={companyStats.favorites}
              change={{ value: 8, isPositive: true }}
              icon={<TrendingUp size={24} />}
              variant="accent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <ChartCard
                title="Research Categories"
                subtitle="Distribution of accessed papers"
              >
                <div className="h-64">
                  <Doughnut 
                    data={topicData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            padding: 10,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </ChartCard>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <h3 className="text-lg font-medium text-white mb-4">
                  <span className="flex items-center">
                    <ListFilter size={18} className="mr-2 text-accent-500" />
                    Recommended Research Topics
                  </span>
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Based on your activity and research trends, we recommend exploring these topics.
                </p>
                <div className="space-y-4">
                  {companyStats.recommendedTopics.map((topic, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-background-lighter rounded-lg border border-gray-700 hover:border-accent-500 transition-all duration-300"
                    >
                      <h4 className="font-medium text-white">{topic}</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {[
                          "Growing research area with significant recent discoveries",
                          "Recently trending topic with many new publications",
                          "Underexplored area with high potential for innovation",
                          "Active area with multiple ongoing clinical trials",
                          "Emerging field with promising early results",
                        ][index % 5]}
                      </p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">
                          Explore Topic
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <h3 className="text-lg font-medium text-white mb-4">
                Recent Activity
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Activity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Research Paper
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {companyStats.recentActivity.map((activity, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {new Date(activity.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge 
                            variant={
                              activity.type === 'download' ? 'primary' :
                              activity.type === 'view' ? 'accent' : 'secondary'
                            }
                          >
                            {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-white">
                          {activity.paper}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Button variant="ghost" size="sm">
                            View Paper
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Render admin dashboard (simplified)
  if (user.role === 'admin') {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-400">
              Manage platform users, content, and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Users"
              value="1,245"
              change={{ value: 15, isPositive: true }}
              icon={<Users size={24} />}
              variant="primary"
            />
            <StatsCard
              title="Research Papers"
              value="3,872"
              change={{ value: 23, isPositive: true }}
              icon={<FileText size={24} />}
              variant="secondary"
            />
            <StatsCard
              title="Pending Approvals"
              value="28"
              change={{ value: 5, isPositive: false }}
              icon={<ListFilter size={24} />}
              variant="warning"
            />
            <StatsCard
              title="Platform Revenue"
              value="$45,280"
              change={{ value: 18, isPositive: true }}
              icon={<DollarSign size={24} />}
              variant="success"
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <h3 className="text-lg font-medium text-white mb-4">
                Content Awaiting Approval
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Submitted
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      {
                        title: "Endometriosis and Chronic Pain Management",
                        author: "Dr. Sarah Johnson",
                        category: "Women's Health",
                        date: "2023-07-12"
                      },
                      {
                        title: "Hormonal Contraceptives and Depression Risk",
                        author: "Dr. Emily Chen",
                        category: "Reproductive Health",
                        date: "2023-07-11"
                      },
                      {
                        title: "Gender Differences in Cardiovascular Treatment Outcomes",
                        author: "Dr. Michael Wong",
                        category: "Cardiovascular",
                        date: "2023-07-10"
                      },
                    ].map((paper, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-white">
                          {paper.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {paper.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge 
                            variant={
                              paper.category === "Women's Health" ? 'secondary' :
                              paper.category === "Reproductive Health" ? 'primary' : 'accent'
                            }
                          >
                            {paper.category}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {new Date(paper.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                          <Button variant="primary" size="sm">
                            Approve
                          </Button>
                          <Button variant="ghost" size="sm">
                            Review
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DashboardPage;