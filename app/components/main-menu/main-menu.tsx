import { Card } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

export function MainMenu() {
  return (
    <Card heading={<img src="/logo.svg" alt="logo" />}>
      <Button variant="circular" color="secondary">
        <img className="w-[34%]" src="/icons/icon-play.svg" alt="play icon" />
      </Button>
      <Button className="text-[2rem] tracking-wider">How to Play</Button>
    </Card>
  );
}
