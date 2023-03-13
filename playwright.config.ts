import { devices } from '@playwright/test';

export const config = {

  testDir: './tests',
  timeout: 50 * 1000, // 30 sec is the global timeout 
  expect: {
      timeout: 5000  //5sec is the assertion timeout.
    },
  fullyParallel: true,
  reporter: 'html',
  video: 'on',
  
  use: {
    //actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'on',
    headless: false,
    
    },

  projects: [
    { 
      name: 'setup', 
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      dependencies: ['setup'],
    },
  ],
};

export default config;