import { useNavigate } from 'react-router';
import { useCategories } from '~/hooks/useCategories';
import { Loading } from '~/components/ui/loading';
import { Button } from '~/components/ui/button';
import { StrokedText } from '~/components/ui/stroked-text';

export function PickACategory() {
  const { data: categories, isLoading, error } = useCategories();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="grid gap-[clamp(6.25rem,11vw,9.75rem)] w-full">
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
          Pick a Category
        </StrokedText>
      </header>

      <div className="grid grid-cols-3 grid-rows-[repeat(2,11.875rem)] max-lg:grid-cols-2 max-lg:grid-rows-[repeat(3,11.417rem)] max-sm:grid-cols-1 max-sm:grid-rows-[repeat(6,4.813rem)] gap-x-8 gap-y-[clamp(1rem,3.5vw,3rem)]">
        {categories?.map((category) => (
          <Button key={category.name} className="max-sm:rounded-[1.25rem]">
            <p className="text-heading-sm tracking-wider">{category.name}</p>
          </Button>
        ))}
      </div>
    </section>
  );
}
