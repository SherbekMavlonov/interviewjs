import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props =
  | {
      bgColor: string;
      textColor: string;
      title: string;
      children?: React.ReactElement;
      onPress: () => any;
      disabled?: boolean;
    }
  | {
      bgColor: string;
      textColor: string;
      title?: string;
      children: React.ReactElement;
      onPress: () => any;
      disabled?: boolean;
    };

const Button: React.FC<Props> = ({
  bgColor,
  textColor,
  title,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  const {textColor, title, bgColor, disabled} = nextProps;
  let isEqual = true;
  if (
    textColor == prevProps?.textColor ||
    title == prevProps?.title ||
    bgColor == prevProps?.bgColor ||
    disabled == prevProps?.disabled
  ) {
    isEqual = false;
  }
  return isEqual;
};

export default React.memo(Button, areEqual);
