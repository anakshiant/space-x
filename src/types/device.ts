import { css } from "styled-components";

export enum SupportedDevice {
  PHONE = "PHONE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
  LARGE = "LARGE",
}

export const DeviceWidths: Record<SupportedDevice, DeviceWidthConstraint> = {
  [SupportedDevice.PHONE]: { min: "0px", max: "700px" },
  [SupportedDevice.TABLET]: { min: "700px", max: "1024px" },
  [SupportedDevice.DESKTOP]: { min: "1024px", max: "1440px" },
  [SupportedDevice.LARGE]: { min: "1440px", max: "2025px" },
};

export type DeviceWidthConstraint = {
  min?: string;
  max?: string;
};

const mediaQueryProvider = (device: SupportedDevice) => (style: any) => css`
  @media screen and (min-width: ${DeviceWidths[device]
      .min}) and (max-width: ${DeviceWidths[device].max}) {
    ${css(style)}
  }
`;

export const MediaQuery: Record<SupportedDevice, any> = {
  [SupportedDevice.PHONE]: mediaQueryProvider(SupportedDevice.PHONE),
  [SupportedDevice.TABLET]: mediaQueryProvider(SupportedDevice.TABLET),
  [SupportedDevice.DESKTOP]: mediaQueryProvider(SupportedDevice.DESKTOP),
  [SupportedDevice.LARGE]: mediaQueryProvider(SupportedDevice.LARGE),
};
