import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  Bell, 
  Plus,
  PieChart,
  BarChart3
} from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
};

const DashboardContent = () => {
  // Sample data for demonstration
  const monthlySpending = [
    { category: "Food & Dining", amount: 850, color: "bg-primary" },
    { category: "Transportation", amount: 420, color: "bg-accent" },
    { category: "Shopping", amount: 650, color: "bg-warning" },
    { category: "Bills & Utilities", amount: 1200, color: "bg-success" },
    { category: "Entertainment", amount: 320, color: "bg-destructive" },
  ];

  const aiRecommendations = [
    {
      title: "Reduce dining expenses",
      description: "You've spent 23% more on restaurants this month. Try cooking at home 2 more days per week to save $200.",
      impact: "Save $200/month",
      type: "warning"
    },
    {
      title: "Investment opportunity",
      description: "Based on your savings pattern, consider investing $500 in a diversified index fund.",
      impact: "Potential $60/month growth",
      type: "success"
    },
    {
      title: "Bill optimization",
      description: "Switch to annual billing for your subscriptions and save 15% on monthly costs.",
      impact: "Save $45/month",
      type: "info"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Financial Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
              <Button className="bg-gradient-primary">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <Card className="shadow-card hover:shadow-hover transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$24,563</div>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Spending</CardTitle>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$3,442</div>
              <div className="flex items-center text-xs text-destructive">
                <TrendingDown className="h-3 w-3 mr-1" />
                +8.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Savings Goal</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">68%</div>
              <div className="text-xs text-muted-foreground">$6,800 of $10,000</div>
              <Progress value={68} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-hover transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Investment Return</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">+15.3%</div>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="h-3 w-3 mr-1" />
                +$2,340 this year
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Monthly Spending Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-primary" />
                Spending by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlySpending.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">${item.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-accent" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <h4 className="font-semibold text-foreground mb-1">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-success">{rec.impact}</span>
                      <Button size="sm" variant="outline">Apply</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;