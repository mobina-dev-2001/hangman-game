import { useNavigate } from 'react-router';
import { Card } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

export function MainMenu() {
  const navigate = useNavigate();
  return (
    <Card heading={<img className="mx-auto" src="/logo.svg" alt="logo" />}>
      <Button className="justify-self-center mt-19.5 mb-14.5" variant="circular">
        <img className="p-10.25" src="/icons/icon-play.svg" alt="play icon" />
      </Button>
      <Button
        className="justify-self-center text-heading-xs tracking-wider"
        onClick={() => navigate('/how-to-play')}
      >
        How to Play
      </Button>
    </Card>
  );
}
