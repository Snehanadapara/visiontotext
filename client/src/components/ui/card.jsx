export const Card = ({ children, ...props }) => (
    <div className="border rounded-lg shadow-lg" {...props}>
      {children}
    </div>
  );
  
  export const CardContent = ({ children }) => (
    <div className="p-4">{children}</div>
  );
  