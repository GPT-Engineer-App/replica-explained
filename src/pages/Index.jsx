import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex justify-between items-center mb-4">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="flex space-x-4">
              <Card className="w-1/4">
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$45,231.89</p>
                  <p className="text-green-500">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card className="w-1/4">
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">+2350</p>
                  <p className="text-green-500">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card className="w-1/4">
                <CardHeader>
                  <CardTitle>Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">+12,234</p>
                  <p className="text-green-500">+19% from last month</p>
                </CardContent>
              </Card>
              <Card className="w-1/4">
                <CardHeader>
                  <CardTitle>Active Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">+573</p>
                  <p className="text-green-500">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Jan 20, 2023 - Feb 09, 2023" className="p-2 rounded-md" />
          <button className="flex items-center space-x-2 bg-blue-500 text-white p-2 rounded-md">
            <FaDownload />
            <span>Download</span>
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          {/* Bar chart placeholder */}
          <div className="h-64 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Recent Sales</h2>
        <p className="mb-4">You made 265 sales this month.</p>
        <div className="bg-white p-4 rounded-md shadow-md">
          {/* Sales list placeholder */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$123.45</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-bold">Jane Smith</p>
                <p className="text-gray-500">jane.smith@example.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$67.89</Badge>
              </div>
            </div>
            {/* Add more sales items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;