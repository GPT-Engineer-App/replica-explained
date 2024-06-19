import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaDownload } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const Index = () => {
  const dateRange = "Jan 20, 2023 - Feb 09, 2023";

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
          <Input type="text" value={dateRange} readOnly className="p-2 rounded-md" />
          <Button className="flex items-center space-x-2 bg-blue-500 text-white p-2 rounded-md">
            <FaDownload />
            <span>Download</span>
          </Button>
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
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">Olivia Martin</p>
                <p className="text-gray-500">olivia.martin@email.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$1,999.00</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">Jackson Lee</p>
                <p className="text-gray-500">jackson.lee@email.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$39.00</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">Isabella Nguyen</p>
                <p className="text-gray-500">isabella.nguyen@email.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$299.00</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">William Kim</p>
                <p className="text-gray-500">will@email.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$99.00</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">Sofia Davis</p>
                <p className="text-gray-500">sofia.davis@email.com</p>
              </div>
              <div className="ml-auto">
                <Badge>$39.00</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;