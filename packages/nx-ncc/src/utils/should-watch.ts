export const shouldWatch = (command: string, options: any) => {
  return command === 'run' || !!(options as any).watch;
};
