import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock fetch globally
global.fetch = vi.fn();

// Mock service worker registration
global.navigator.serviceWorker = {
  register: vi.fn().mockResolvedValue({
    update: vi.fn(),
    unregister: vi.fn(),
  }),
} as any;
