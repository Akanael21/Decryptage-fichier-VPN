import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  description?: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow';
};

export default function StatCard({ 
  title, 
  value, 
  description, 
  icon = "📊", 
  color = 'blue' 
}: StatCardProps) {
  
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800",
    green: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800",
    purple: "bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-800",
    red: "bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-800",
    yellow: "bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-800"
  };
  
  const valueColorClasses = {
    blue: "text-blue-700 dark:text-blue-300",
    green: "text-green-700 dark:text-green-300",
    purple: "text-purple-700 dark:text-purple-300",
    red: "text-red-700 dark:text-red-300",
    yellow: "text-yellow-700 dark:text-yellow-300"
  };
  
  return (
    <div className={`p-6 rounded-lg shadow-md border ${colorClasses[color]} transition-all duration-300 hover:shadow-lg`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className={`text-3xl font-bold ${valueColorClasses[color]} mb-2`}>
        {value}
      </div>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  );
}
