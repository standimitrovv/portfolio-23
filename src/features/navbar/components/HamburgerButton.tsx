interface Props {
  triggerAnimation: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      id='hamburger-button'
      className={`text-3xl md:hidden cursor-pointer relative w-8 h-8  ${
        props.triggerAnimation ? 'toggle-btn' : ''
      }`}
      onClick={props.onClick}
    >
      <div
        className={`bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 ${createPseudoClasses(
          'before'
        )} ${createPseudoClasses('after')}`}
      />
    </button>
  );
};

const createPseudoClasses = (type: 'before' | 'after') =>
  `${type}:countent-[""] ${type}:bg-black ${type}:w-8 ${type}:h-1 ${type}:rounded ${type}:absolute ${type}:-translate-x-4 ${type}:${
    type === 'before' ? '-' : ''
  }translate-y-3 ${type}:transition-all ${type}:duration-500`;
