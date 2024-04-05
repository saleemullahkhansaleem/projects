import { useEffect, useState } from "react";
import Input from "../components/Input";

const CashManager = () => {
  const [billAmount, setBillAmount] = useState(+"");
  const [cashAmount, setCashAmount] = useState(+"");
  const [noteDetail, setNoteDetail] = useState([]);
  const notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
  useEffect(() => {
    // console.log(billAmount, cashAmount);
    manageNotes(billAmount, cashAmount);
  }, [billAmount, cashAmount]);

  const manageNotes = (bill, cash) => {
    setNoteDetail([]);
    let changeAmount = cash - bill;
    notes.map((note) => {
      if (changeAmount >= note) {
        let noteCount = Math.floor(changeAmount / note);
        setNoteDetail((prv) => [...prv, { note: note, noteCount: noteCount }]);
        changeAmount -= note * noteCount;
      }
    });
  };
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center">
      <form className="rounded shadow p-4 flex flex-col gap-4 bg-zinc-200 dark:bg-zinc-700 w-80">
        <h2 className="text-xl">Manage the cash register</h2>
        <div className="flex">
          <Input
            className="rounded-l"
            type="number"
            name="bill_amount"
            id="bill_amount"
            value={billAmount || ""}
            placeholder={0}
            onChange={(e) => setBillAmount(e.target.value)}
            label="Bill amount"
          />
          {billAmount ? (
            <Input
              className="rounded-r border-l"
              type="number"
              name="cash_amount"
              id="cash_amount"
              value={cashAmount || ""}
              placeholder={0}
              onChange={(e) => setCashAmount(e.target.value)}
              label="Cash given"
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <h3 className="text-lg">
            Remaining Amount: {cashAmount - billAmount}
          </h3>
          {noteDetail.length > 0 && <h3 className="text-lg">Note details</h3>}
          <table>
            <tbody>
              {noteDetail?.map((note) => (
                <tr key={note.note}>
                  <td className="px-4">{note?.note}</td>
                  <td className="px-4">{note?.noteCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default CashManager;
