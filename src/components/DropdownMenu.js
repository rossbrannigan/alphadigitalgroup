import { useClient } from 'next/client';
import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Using useClient to ensure this component is treated as a Client Component
  useClient();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // ... rest of your component code
  );
};

export default DropdownMenu;
