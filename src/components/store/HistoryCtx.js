import { createContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const HistoryProvider = (props) => {
  let selHistoryT = localStorage.getItem("selectedHistory")
    ? localStorage.getItem("selectedHistory")
    : "";

  const [selectedHistory, setSelectedHistory] = useState(selHistoryT);

  const history = useHistory();

  const handleViewHistory = (searchTermP) => {
    console.log("OEOEOE CLICKED YO!");
    //setting state relating to search Term picked
    setSelectedHistory((prev) => searchTermP);
    localStorage.setItem("selectedHistory", searchTermP);

    //back up -loop through list incase previous localStorage is tampered with, technically could just picked it from localStorage

    history.push(`/history`);
  };

  return (
    <HistoryContext.Provider
      value={{
        selectedHistory: selectedHistory,
        handleViewHistory: handleViewHistory,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;

export const HistoryContext = createContext();
