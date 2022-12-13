import { TextFieldProps } from "@mui/material";

export type FormSelectTypes = {
  name: string;
  label: string;
  labelKey?: string;
  valueKey?: string;
  options: Record<string, string | number>[];
  wantEmpty?: boolean;
  className?: string;
  placehoder?: string;
} & TextFieldProps;

export type ListItemTypes = { [key: string]: string };
