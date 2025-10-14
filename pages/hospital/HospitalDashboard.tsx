
import React from 'react';
import { useDataStore } from '../../store/useDataStore';
import { useAuthStore } from '../../store/useAuthStore';
import Card from '../../components/ui/Card';
import { RecordType } from '../../types';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HospitalDashboard = () => {
  const { user } = useAuthStore();
  const { records, getHospitalById } = useDataStore();
  
  const hospital = user?.hospitalId ? getHospitalById(user.hospitalId) : null;
  const hospitalRecords = records.filter(r => r.hospitalId === user?.hospitalId);

  const birthRecords = hospitalRecords.filter(r => r.recordType === RecordType.BIRTH).length;
  const deathRecords = hospitalRecords.filter(r => r.recordType === RecordType.DEATH).length;

  const chartData = [
    { name: 'Births', value: birthRecords },
    { name: 'Deaths', value: deathRecords },
  ];
  const COLORS = ['#3498db', '#e74c3c'];

  return (
    <div className="space-y-6">
       <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, {hospital?.name || 'User'}!</h2>
        <p className="text-gray-600 dark:text-gray-400">Here's a summary of your hospital's activity.</p>
       </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Total Records</h3>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">{hospitalRecords.length}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Birth Records</h3>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">{birthRecords}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Death Records</h3>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">{deathRecords}</p>
        </Card>
      </div>

       <Card title="Record Distribution">
         <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default HospitalDashboard;
