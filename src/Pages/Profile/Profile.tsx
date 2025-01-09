import React, { useRef } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { Camera, MapPin, Phone, Globe, Bell, Mail, Lock } from 'lucide-react';
import { useUserProfile } from '../../hooks/UseUserProfile';

export function Profile() {
  const { profile, updateProfile, updateAvatar } = useUserProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      updateAvatar(file);
    }
  };

  return (
    <Layout>
      <div className='p-8'>
        <h1 className='text-2xl font-bold mb-8'>Profile Settings</h1>

        <div className='max-w-4xl mx-auto'>
          {/* Profile Picture Section */}
          <div className='bg-white rounded-lg p-6 mb-6'>
            <h2 className='text-lg font-semibold mb-4'>Profile Picture</h2>
            <div className='flex items-center space-x-6'>
              <div className='relative'>
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className='w-24 h-24 rounded-full object-cover'
                />
                <button
                  onClick={handleAvatarClick}
                  className='absolute bottom-0 right-0 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700'
                >
                  <Camera className='h-4 w-4' />
                </button>
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <p className='text-sm text-gray-500'>
                  Click the camera icon to upload a new profile picture.
                  Recommended size: 256x256px.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className='bg-white rounded-lg p-6 mb-6'>
            <h2 className='text-lg font-semibold mb-4'>Personal Information</h2>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Full Name
                </label>
                <input
                  type='text'
                  value={profile.name}
                  onChange={(e) => updateProfile({ name: e.target.value })}
                  className='w-full rounded-lg border-gray-300'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  value={profile.email}
                  onChange={(e) => updateProfile({ email: e.target.value })}
                  className='w-full rounded-lg border-gray-300'
                />
              </div>
              <div className='col-span-2'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Bio
                </label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => updateProfile({ bio: e.target.value })}
                  className='w-full rounded-lg border-gray-300'
                  rows={3}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Location
                </label>
                <div className='relative'>
                  <MapPin className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
                  <input
                    type='text'
                    value={profile.location}
                    onChange={(e) =>
                      updateProfile({ location: e.target.value })
                    }
                    className='w-full rounded-lg border-gray-300 pl-10'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Phone
                </label>
                <div className='relative'>
                  <Phone className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
                  <input
                    type='tel'
                    value={profile.phone}
                    onChange={(e) => updateProfile({ phone: e.target.value })}
                    className='w-full rounded-lg border-gray-300 pl-10'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className='bg-white rounded-lg p-6 mb-6'>
            <h2 className='text-lg font-semibold mb-4'>Preferences</h2>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Currency
                </label>
                <div className='relative'>
                  <Globe className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
                  <select
                    value={profile.currency}
                    onChange={(e) =>
                      updateProfile({ currency: e.target.value })
                    }
                    className='w-full rounded-lg border-gray-300 pl-10'
                  >
                    <option value='USD'>USD ($)</option>
                    <option value='EUR'>EUR (€)</option>
                    <option value='GBP'>GBP (£)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Language
                </label>
                <div className='relative'>
                  <Globe className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
                  <select
                    value={profile.language}
                    onChange={(e) =>
                      updateProfile({ language: e.target.value })
                    }
                    className='w-full rounded-lg border-gray-300 pl-10'
                  >
                    <option value='English'>English</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='French'>French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className='bg-white rounded-lg p-6'>
            <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <Mail className='h-5 w-5 text-gray-400' />
                  <span>Email Notifications</span>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={profile.notifications.email}
                    onChange={(e) =>
                      updateProfile({
                        notifications: {
                          ...profile.notifications,
                          email: e.target.checked,
                        },
                      })
                    }
                    className='sr-only peer'
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <Bell className='h-5 w-5 text-gray-400' />
                  <span>Push Notifications</span>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={profile.notifications.push}
                    onChange={(e) =>
                      updateProfile({
                        notifications: {
                          ...profile.notifications,
                          push: e.target.checked,
                        },
                      })
                    }
                    className='sr-only peer'
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <Lock className='h-5 w-5 text-gray-400' />
                  <span>Monthly Report</span>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={profile.notifications.monthly}
                    onChange={(e) =>
                      updateProfile({
                        notifications: {
                          ...profile.notifications,
                          monthly: e.target.checked,
                        },
                      })
                    }
                    className='sr-only peer'
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
