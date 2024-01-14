export interface PreProps {
  children: React.ReactNode;
}

export const Pre: React.FC<PreProps> = ({ children }) => {
  return (
    <pre className="bg-zinc-500 p-4 rounded-md w-[60rem] max-w-[90vw] overflow-y-auto">
      {children}
    </pre>
  );
};
