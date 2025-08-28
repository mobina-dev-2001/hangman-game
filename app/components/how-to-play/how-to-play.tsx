import { useNavigate } from 'react-router';
import { Button } from '~/components/ui/button';
import { StrokedText } from '~/components/ui/stroked-text';

export function HowToPlay() {
  const navigate = useNavigate();

  const guide = [
    {
      step: '01',
      title: 'Choose a category',
      description:
        'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
    },
    {
      step: '02',
      title: 'Guess letters',
      description:
        'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.',
    },
    {
      step: '03',
      title: 'Win or lose',
      description:
        'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
    },
  ];

  return (
    <section className="grid gap-16">
      <header className="relative">
        <Button
          className="absolute z-1 top-1/2 -translate-y-1/2"
          variant="circular"
          color="secondary"
          onClick={() => navigate('/')}
        >
          <img className="w-[clamp(1.091rem,3vw,2.563rem)]" src="/icons/icon-back.svg" alt="" />
        </Button>
        <StrokedText className="text-heading-xl tracking-[-0.65px] max-sm:text-right">
          How to Play
        </StrokedText>
      </header>

      <div className="grid min-xl:grid-cols-3 gap-[clamp(1.5rem,2.25vw,2rem)] max-xl:text-left">
        {guide.map((item) => (
          <div
            key={item.step}
            className="grid items-start grid-rows-[min-content_min-content_1fr] max-xl:grid-cols-[fit-content(100%)_fit-content(100%)] max-xl:grid-rows-[min-content_min-content] max-sm:grid-cols-[min-content_fit-content(100%)] gap-[clamp(1rem,3vw,2.5rem)] py-[clamp(2rem,4.25vw,3.75rem)] px-[clamp(2rem,3.5vw,3rem)] bg-white rounded-5xl max-sm:rounded-[1.25rem]"
          >
            <h2 className="max-xl:row-span-2 max-sm:row-span-1 text-blue-ribbon text-heading-md">
              {item.step}
            </h2>
            <h3 className="self-center text-dark-navy text-heading-sm tracking-wider uppercase">
              {item.title}
            </h3>
            <p className="max-sm:col-span-2 text-purple-mountains-majesty">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
