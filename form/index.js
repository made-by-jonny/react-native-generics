import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Form = ({
  children,
  onSubmit = (data) => console.log(data),
  errorMessage,
}) => {
  const [items, setItems] = useState({});

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      informForm: (data) => {
        setItems(Object.assign(items, data));
      },
      onChange: (data) => {
        setItems(Object.assign(items, data));
      },
    })
  );

  const submit = () => {
    if (typeof onSubmit === "function") {
      onSubmit(items);
    }
  };

  return (
    <View>
      {childrenWithProps}
      <Text>{errorMessage}</Text>
      <TouchableHighlight onPress={submit}>
        <Text>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Form;
