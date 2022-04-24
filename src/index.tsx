import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-toast-show' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type ToastShowProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ToastShowView';

export const ToastShowView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ToastShowProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
