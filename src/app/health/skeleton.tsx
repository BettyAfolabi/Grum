

import React from 'react';

interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  additionalClasses?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  width = '100%',
  height = '40px',
  borderRadius = '4px',
  additionalClasses = '',
}) => {
  return (
    <div className='flex justify-center items-center mx-auto'>
    <div
      className={`bg-gray-300 animate-pulse ${additionalClasses}`}
      style={{ width, height, borderRadius }}
    />
    <div
      className={`bg-gray-300 animate-pulse ${additionalClasses}`}
      style={{ width, height, borderRadius }}
    />
    </div>
    
  );
};

export default LoadingSkeleton;
