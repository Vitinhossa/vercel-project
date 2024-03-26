import { colors } from "@/utils/colors";

export function ShopIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6685 1.62549H15.5938L16.1042 6.72954C16.1042 6.72954 17.125 7.75035 18.6562 7.75035C19.7556 7.75035 20.5042 7.22407 20.839 6.92727C20.9724 6.80898 21.0212 6.62839 20.9919 6.4525L20.2726 2.13728C20.2234 1.84195 19.9679 1.62549 19.6685 1.62549Z" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.6" />
      <path d="M15.5936 1.62549L16.1041 6.72954C16.1041 6.72954 15.0832 7.75035 13.552 7.75035C12.0208 7.75035 11 6.72954 11 6.72954V1.62549H15.5936Z" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.6" />
      <path d="M11.0001 1.62549V6.72954C11.0001 6.72954 9.97925 7.75035 8.44802 7.75035C6.91681 7.75035 5.896 6.72954 5.896 6.72954L6.4064 1.62549H11.0001Z" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.6" />
      <path d="M6.40636 1.62549H2.33156C2.03216 1.62549 1.77664 1.84195 1.72741 2.13728L1.0082 6.45251C0.978895 6.62839 1.02772 6.80898 1.16114 6.92727C1.49588 7.22407 2.24447 7.75035 3.34391 7.75035C4.87513 7.75035 5.89596 6.72954 5.89596 6.72954L6.40636 1.62549Z" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.6" />
      <path d="M1.81934 7.75049V17.9586C1.81934 19.0862 2.7334 20.0002 3.86096 20.0002H18.1523C19.2799 20.0002 20.1939 19.0862 20.1939 17.9586V7.75049" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.6" />
      <path d="M13.8993 20V13.8751C13.8993 12.7475 12.9852 11.8335 11.8576 11.8335H9.81602C8.68848 11.8335 7.77441 12.7475 7.77441 13.8751V20" stroke={isActive ? colors.verdeFluor : colors.cinzaLightDark} strokeWidth="1.6" strokeMiterlimit="16" />
    </svg>
  );
}
