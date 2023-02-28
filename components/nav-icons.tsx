import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function BlogIcon(props: IconProps) {
  return (
   <img src='/privacy.png' className='h-[100%] w-[100%]' />
  );
}

export function ProjectIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M10.3351 9.22941L16.9366 5.56191L10.6916 2.09245C10.5825 2.03182 10.4598 2 10.3351 2C10.2103 2 10.0876 2.03182 9.9786 2.09245L3.73358 5.56191L10.3351 9.22941Z"
        fill="currentColor"
      />
      <path
        d="M9.6015 10.4998L3 6.83228V14.4695C2.99999 14.6002 3.03495 14.7286 3.10123 14.8413C3.16752 14.9541 3.26274 15.047 3.37702 15.1106L9.6015 18.5683V10.4998Z"
        fill="currentColor"
      />
      <path
        d="M11.0685 10.4998V18.5683L17.293 15.1106C17.4073 15.047 17.5025 14.9541 17.5688 14.8413C17.6351 14.7286 17.67 14.6002 17.67 14.4695V6.83301L11.0685 10.4998Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SnippetIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M5 14.5116L1.0775 10.5891C0.751672 10.2633 0.751672 9.73661 1.0775 9.41078L5 5.48828L6.17834 6.66661L2.84501 9.99995L6.17834 13.3333L5 14.5116Z"
        fill="currentColor"
      />
      <path
        d="M15 14.5116L13.8217 13.3333L17.155 9.99995L13.8217 6.66661L15 5.48828L18.9225 9.41078C19.2484 9.73661 19.2484 10.2633 18.9225 10.5891L15 14.5116Z"
        fill="currentColor"
      />
      <path
        d="M11.0621 2.3229L7.32193 17.2729L8.93876 17.6774L12.679 2.7274L11.0621 2.3229Z"
        fill="currentColor"
      />
    </svg>
  );
}

// export function TalksIcon(props: IconProps) {
//   return (
//     <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
//       <path
//         d="M10 11.6667C11.3833 11.6667 12.5 10.5501 12.5 9.16675V4.16675C12.5 2.78341 11.3833 1.66675 10 1.66675C8.61667 1.66675 7.5 2.78341 7.5 4.16675V9.16675C7.5 10.5501 8.61667 11.6667 10 11.6667Z"
//         fill="currentColor"
//       />
//       <path
//         d="M14.1667 9.16675C14.1667 11.4667 12.3 13.3334 10 13.3334C7.70002 13.3334 5.83335 11.4667 5.83335 9.16675H4.16669C4.16669 12.1084 6.34169 14.5251 9.16669 14.9334V17.5001H10.8334V14.9334C13.6584 14.5251 15.8334 12.1084 15.8334 9.16675H14.1667Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

export function HamburgerMenuIcon(props: IconProps) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" x1="1" x2="23" y1="12" y2="12" />
        <line fill="none" x1="1" x2="23" y1="5" y2="5" />
        <line fill="none" x1="1" x2="23" y1="19" y2="19" />
      </g>
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" stroke="currentColor" x1="19" x2="5" y1="5" y2="19" />
        <line fill="none" stroke="currentColor" x1="19" x2="5" y1="19" y2="5" />
      </g>
    </svg>
  );
}
