import type { Route } from './+types/home';
import { MainMenu } from '~/components/main-menu';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Hangman Game' }, { name: '---', content: '---' }];
}

export default function Home() {
  return <MainMenu />;
}
