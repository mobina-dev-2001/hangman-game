import type { Route } from './+types/pick-a-category';
import { PickACategory } from '~/components/pick-a-category';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Pick a Category - Hangman Game' }];
}

export default function Home() {
  return <PickACategory />;
}
