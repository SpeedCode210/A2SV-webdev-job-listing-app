import colors from "./colors.json";
const colorMap: {TagColors : Record<string, string>, InversedTagColors : Record<string, string>} = colors;


type TagProps = { name: string };

export function Tag({ name }: TagProps) {
  const getColorClasses = () => {
    return colorMap.TagColors[name] || colorMap.TagColors.default;
  };

  return (
    <span
      className={`mb-2 min-w-16 text-center mx-1 text-xs font-semibold inline-block border py-2 px-3 rounded-full ${getColorClasses()}`}
    >
      {name}
    </span>
  );
}

export function InversedTag({ name }: TagProps) {
  const getColorClasses = () => {
    return colorMap.InversedTagColors[name] || colorMap.InversedTagColors.default;
  };

  return (
    <span
      className={`mb-2 min-w-16 text-center mx-1 text-xs font-semibold inline-block py-2 px-3 rounded-full ${getColorClasses()}`}
    >
      {name}
    </span>
  );
}

export function NeutralTag({ name }: TagProps) {

  return (
    <span
      className='mb-2 min-w-16 text-center mx-1 text-sm inline-block bg-purple-100 text-indigo-900 py-2 px-3 rounded-md'
    >
      {name}
    </span>
  );
}