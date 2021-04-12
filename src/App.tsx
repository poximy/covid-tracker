import React from "react";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
