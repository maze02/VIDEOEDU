import moment from "moment";
import { useContext } from "react";
import CardTertiary from "../components/UI/TertiaryCard";
import { HistoryContext } from "./store/HistoryCtx";

const CondensedHistoryItem = ({ url, searchTerm, date }) => {
  const { handleViewHistory } = useContext(HistoryContext);
  return (
    <CardTertiary>
      <article className="history-info">
        <div className="image-cropper">
          <img src={url} alt={searchTerm} />
        </div>
        <div className="history-text">
          <h4>{searchTerm} &#183;</h4>
          <p>
            {moment(
              date.substring(0, 19).replace("T", " "),
              "YYYY-MM-DD hh:mm:ss"
            ).fromNow()}
          </p>
        </div>
      </article>

      <div className="button-wrapper">
        <button
          onClick={() => {
            handleViewHistory(searchTerm);
          }}
        >
          View videos
        </button>
      </div>
    </CardTertiary>
  );
};

export default CondensedHistoryItem;

//  {moment("2021-08-27 11:20:10", "YYYY-MM-DD hh:mm:ss").fromNow()}
