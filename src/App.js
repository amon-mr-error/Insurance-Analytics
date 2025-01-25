import React, { useState } from 'react';
import { 
  BarChart, LineChart, PieChart, 
  Bar, Line, Pie, XAxis, YAxis, 
  Tooltip, Legend, CartesianGrid 
} from 'recharts';
import { 
  Shield, Users, TrendingUp, 
  AlertOctagon, FileText, 
  Search, Filter, Bell 
} from 'lucide-react';

const InsuranceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive Mock Datasets
  const overviewKPIs = [
    { title: 'Total Policies', value: '5,234', change: '+3.2%', color: 'blue' },
    { title: 'Total Claims', value: '524', change: '-1.5%', color: 'green' },
    { title: 'Avg Claim Amount', value: '$4,750', change: '+2.1%', color: 'purple' }
  ];

  const customerData = [
    { id: 'C001', name: 'John Doe', age: 35, riskScore: 78, premium: '$1,200', status: 'Active' },
    { id: 'C002', name: 'Emily Chen', age: 42, riskScore: 45, premium: '$950', status: 'Active' },
    { id: 'C003', name: 'Michael Rodriguez', age: 28, riskScore: 62, premium: '$1,100', status: 'Pending' }
  ];

  const claimsData = [
    { id: 'CL001', customer: 'John Doe', amount: 5000, status: 'Pending', fraudRisk: 'High' },
    { id: 'CL002', customer: 'Emily Chen', amount: 2500, status: 'Approved', fraudRisk: 'Low' },
    { id: 'CL003', customer: 'Michael Rodriguez', amount: 7500, status: 'Investigation', fraudRisk: 'Medium' }
  ];

  const fraudIndicators = [
    { indicator: 'Multiple Claims', count: 12, severity: 'High' },
    { indicator: 'Address Mismatch', count: 8, severity: 'Medium' },
    { indicator: 'Unusual Transaction', count: 5, severity: 'Low' }
  ];

  const riskDistributionData = [
    { category: 'Low Risk', value: 45, fill: '#4CAF50' },
    { category: 'Medium Risk', value: 35, fill: '#FFC107' },
    { category: 'High Risk', value: 20, fill: '#F44336' }
  ];

  const monthlyRevenueData = [
    { month: 'Jan', revenue: 250000, claims: 120000 },
    { month: 'Feb', revenue: 280000, claims: 145000 },
    { month: 'Mar', revenue: 265000, claims: 132000 }
  ];

  const navigationTabs = [
    { name: 'Overview', icon: TrendingUp, tab: 'overview' },
    { name: 'Customers', icon: Users, tab: 'customers' },
    { name: 'Claims', icon: Shield, tab: 'claims' },
    { name: 'Fraud Detection', icon: AlertOctagon, tab: 'fraud' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <div className="text-xl font-bold mb-8 text-blue-600">
          Insurance Analytics
        </div>
        <nav>
          {navigationTabs.map(({ name, icon: Icon, tab }) => (
            <div 
              key={tab}
              className={`flex items-center p-3 mb-2 cursor-pointer rounded ${
                activeTab === tab ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <Icon className="mr-3" />
              {name}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white p-4 flex justify-between items-center shadow">
          <div className="flex items-center bg-gray-100 p-2 rounded-lg flex-1 mr-4">
            <Search className="text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search customers, policies, claims..." 
              className="bg-transparent outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-600 cursor-pointer" />
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>

        {/* Dynamic Content Modules */}
        <div className="p-6 overflow-y-auto">
          {/* Overview Module */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-3 gap-6">
              {overviewKPIs.map(kpi => (
                <div 
                  key={kpi.title} 
                  className={`bg-white p-5 rounded-lg shadow border-l-4 border-${kpi.color}-500`}
                >
                  <div className="text-sm text-gray-500 mb-2">{kpi.title}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{kpi.value}</span>
                    <span className={`text-${kpi.color}-500 text-sm`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
              ))}

              <div className="bg-white p-5 rounded-lg shadow col-span-2">
                <h2 className="text-lg font-semibold mb-4">Risk Distribution</h2>
                <PieChart width={500} height={300}>
                  <Pie 
                    data={riskDistributionData} 
                    dataKey="value"
                    nameKey="category"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>

              <div className="bg-white p-5 rounded-lg shadow col-span-3">
                <h2 className="text-lg font-semibold mb-4">Monthly Revenue & Claims</h2>
                <BarChart width={900} height={300} data={monthlyRevenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                  <Bar dataKey="claims" fill="#82ca9d" name="Claims" />
                </BarChart>
              </div>
            </div>
          )}

          {/* Customers Module */}
          {activeTab === 'customers' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">Customer Insights</h2>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  Add Customer
                </button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    {['Customer ID', 'Name', 'Age', 'Risk Score', 'Premium', 'Status', 'Actions'].map(header => (
                      <th key={header} className="p-3 text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {customerData.map(customer => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{customer.id}</td>
                      <td className="p-3">{customer.name}</td>
                      <td className="p-3">{customer.age}</td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded text-xs
                          ${customer.riskScore > 70 ? 'bg-red-100 text-red-800' : 
                            customer.riskScore > 40 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'}
                        `}>
                          {customer.riskScore}
                        </span>
                      </td>
                      <td className="p-3">{customer.premium}</td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded text-xs
                          ${customer.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            'bg-yellow-100 text-yellow-800'}
                        `}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <button className="text-blue-500 hover:underline">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Claims Module */}
          {activeTab === 'claims' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">Claims Management</h2>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  New Claim
                </button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    {['Claim ID', 'Customer', 'Amount', 'Status', 'Fraud Risk', 'Actions'].map(header => (
                      <th key={header} className="p-3 text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {claimsData.map(claim => (
                    <tr key={claim.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{claim.id}</td>
                      <td className="p-3">{claim.customer}</td>
                      <td className="p-3">${claim.amount}</td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded text-xs
                          ${claim.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            claim.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                            'bg-red-100 text-red-800'}
                        `}>
                          {claim.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded text-xs
                          ${claim.fraudRisk === 'High' ? 'bg-red-100 text-red-800' : 
                            claim.fraudRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'}
                        `}>
                          {claim.fraudRisk}
                        </span>
                      </td>
                      <td className="p-3">
                        <button className="text-blue-500 hover:underline">
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Fraud Detection Module */}
          {activeTab === 'fraud' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Fraud Detection Insights</h2>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4">
                {fraudIndicators.map(item => (
                  <div 
                    key={item.indicator} 
                    className={`p-4 rounded-lg border 
                      ${item.severity === 'High' ? 'bg-red-50 border-red-300' : 
                        item.severity === 'Medium' ? 'bg-yellow-50 border-yellow-300' : 
                        'bg-green-50 border-green-300'}
                    `}
                  >
                    <div className="text-sm font-semibold mb-2">{item.indicator}</div>
                    <div className="text-2xl font-bold">{item.count}</div>
                    <div className={`text-xs font-medium mt-1
                      ${item.severity === 'High' ? 'text-red-600' : 
                        item.severity === 'Medium' ? 'text-yellow-600' : 
                        'text-green-600'}
                    `}>
                      {item.severity} Risk
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceDashboard;