import React, { useState, useEffect } from "react";
import { TextInput, Text } from "react-native";
import * as rules from "../helpers/validations";

const validation = (props, name, value) => {
  return Object.keys(props).reduce((end, current) => {
    if (rules[current] === undefined) return end;
    end[name] = rules[current](props[current], value);
    return end;
  }, {});
};

const Input = (props) => {
  const [isValid, setValidity] = useState("clean");
  const [errors, setErrors] = useState([]);
  const { onChange, label, name, informForm, defaultValue = "" } = props;

  const validate = (e) => {
    const value = e.nativeEvent.text;
    const validateObject = validation({ ...props }, name, value);
    const validity = Object.entries(validateObject).map((item) => {
      if (item !== true) return item[1];
    });

    setErrors(validity);
    setValidity(validity.length === 0 ? true : false);

    if (typeof onChange === "function") {
      onChange({
        [name]: {
          value,
          isValid,
        },
      });
    }
  };

  useEffect(() => {
    informForm({
      [name]: {
        value: defaultValue,
        isValid,
      },
    });
  }, []);

  return (
    <>
      <Text>{label}</Text>
      <TextInput onChange={validate} defaultValue={defaultValue} />
      {errors.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
};

export default Input;
