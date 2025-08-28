import { type RouteConfig, index } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  {
    path: '/how-to-play',
    file: 'routes/how-to-play.tsx',
  },
] satisfies RouteConfig;
