import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";
import classNames from "classnames";

import { FormSelectTypes } from "./form-select.types";

import styles from "./form-select.module.scss";

export const FormSelect = ({
  name,
  labelKey = "label",
  valueKey = "value",
  options,
  className,
  wantEmpty = false,
  ...rest
}: FormSelectTypes) => {
  const [field, meta] = useField(name);
  const { error } = meta;

  const itemsList = options.map((item) => (
    <MenuItem key={item[valueKey]} value={item[valueKey]}>
      {item[labelKey]}
    </MenuItem>
  ));

  return (
    <TextField
      {...field}
      className={classNames(styles.textInput, className)}
      id={name}
      error={Boolean(error)}
      helperText={error}
      select
      {...rest}
    >
      {wantEmpty && (
        <MenuItem sx={{ color: "warning.main" }} value="">
          default
        </MenuItem>
      )}

      {itemsList}
    </TextField>
  );
};
