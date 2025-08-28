import type { Route } from './+types/how-to-play';
import { HowToPlay } from '~/components/how-to-play';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'How to Play - Hangman Game' }];
}

export default function Home() {
  return <HowToPlay />;
}
