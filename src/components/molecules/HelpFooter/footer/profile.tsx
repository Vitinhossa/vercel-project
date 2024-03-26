import { colors } from "@/utils/colors";

export function ProfileIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5_2)">
        <path d="M1.1687 19.0217V17.9348C1.1687 13.7326 4.49858 10.3261 8.6062 10.3261C12.7138 10.3261 16.0437 13.7326 16.0437 17.9348V19.0217" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.6062 10.3261C10.9534 10.3261 12.8562 8.37946 12.8562 5.97826C12.8562 3.57701 10.9534 1.63043 8.6062 1.63043C6.25899 1.63043 4.3562 3.57701 4.3562 5.97826C4.3562 8.37946 6.25899 10.3261 8.6062 10.3261Z" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_5_2">
          <rect width="17" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
