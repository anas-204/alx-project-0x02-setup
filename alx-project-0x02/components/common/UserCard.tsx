import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start">
          <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-gray-600">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div className="flex items-center">
          <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-sm text-gray-600">{phone}</p>
        </div>
        
        <div className="flex items-center">
          <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <a href={`https://${website}`} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
        
        <div className="pt-2 mt-2 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-800">{company.name}</p>
          <p className="text-xs text-gray-500 italic">"{company.catchPhrase}"</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;