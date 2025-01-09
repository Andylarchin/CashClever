import { useState, useEffect } from 'react';

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          bio: 'I love managing my finances and planning for the future.',
          location: 'New York, USA',
          phone: '+1 (555) 123-4567',
          currency: 'USD',
          language: 'English',
          notifications: {
            email: true,
            push: true,
            monthly: false,
          },
        };
  });

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const updateAvatar = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      updateProfile({ avatar: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return { profile, updateProfile, updateAvatar };
}
