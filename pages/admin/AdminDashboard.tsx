
import React from 'react';
import { useDataStore } from '../../store/useDataStore';
import Card from '../../components/ui/Card';
import { RecordType } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const hospitals = useDataStore(state => state.hospitals);
  const records = useDataStore(state => state.records);

  const birthRecords = records.filter(r => r.recordType === RecordType.BIRTH).length;
  const deathRecords = records.filter(r => r.recordType === RecordType.DEATH).length;

  const data = [
    { name: 'Births', count: birthRecords, fill: '#3498db' },
    { name: 'Deaths', count: deathRecords, fill: '#e74c3c' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Total Hospitals</h3>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">{hospitals.length}</p>
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
      <Card title="Records Overview">
         <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none', color: '#fff' }}/>
                    <Bar dataKey="count" barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
